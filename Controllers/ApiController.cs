using CRMService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
#nullable disable
namespace CRMService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        private IConfiguration _configuration;
        private EFContext _EFcontext;
        private ILogger<ApiController> _logger;
        public ApiController(EFContext eFContext, IConfiguration configuration, ILogger<ApiController> logger)
        {
            _configuration = configuration;
            _EFcontext = eFContext ?? throw new NullReferenceException();
            _logger = logger;
        }
#if DEBUG
        /// <summary>
        /// For debug purposes do no build production with that 
        /// </summary>
        [HttpGet]
        [Route("/apitest")]
        public void Test()
        {
            UserRole userRole = new UserRole();
            userRole.Name = "Admin Role";
            User rootUser = new User();
            rootUser.Email = "root@testing.com";
            rootUser.Password = "root";
            userRole.RoleOwners = new List<User>() { rootUser };
            _EFcontext.Roles.Add(userRole);
            _EFcontext.Users.Add(rootUser);
            _EFcontext.SaveChanges();
        }
#endif
        [NonAction]
        public bool CheckJWTBool(string token)
        {
            try
            {
                token = token.Remove(0, 7);
                var tokenHandler = new JwtSecurityTokenHandler();
                SecurityToken validatedToken;
                IPrincipal principal = tokenHandler.ValidateToken(token, new TokenValidationParameters()
                {
                    ValidateLifetime = true,
                    ValidateAudience = true,
                    ValidateIssuer = true,
                    ValidIssuer = "https://localhost:7237",
                    ValidAudience = "https://localhost:44411",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]))
                }, out validatedToken);
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpGet]
        [ProducesResponseType(401)]
        [ProducesResponseType(200)]
        [Route("CheckJWT")]
        public IActionResult CheckJWT(string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                SecurityToken validatedToken;
                IPrincipal principal = tokenHandler.ValidateToken(token, new TokenValidationParameters()
                {
                    ValidateLifetime = true,
                    ValidateAudience = true,
                    ValidateIssuer = true,
                    ValidIssuer = "https://localhost:7237",
                    ValidAudience = "https://localhost:44411",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]))
                }, out validatedToken);
                return Ok();
            }
            catch
            {
                return Unauthorized();
            }
        }
        [HttpGet]
        [ProducesResponseType(401)]
        [ProducesResponseType(200)]
        [Route("Login")]
        public IActionResult Login(string email, string password)
        {
            if (email != null && password != null)
                email = email.ToLower();
            User LoginUser = _EFcontext.Users.FirstOrDefault(x => x.Email == email && x.Password == password);
            if (LoginUser == null)
                return Unauthorized();

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            JwtSecurityToken tokenConf = new JwtSecurityToken(
                issuer: "https://localhost:7237",
                audience: "https://localhost:44411",
                expires: DateTime.Now.AddDays(2),
                claims: new List<Claim>
                {
                    new Claim("userId", LoginUser.Id.ToString()),
                    new Claim("roleId", LoginUser.RoleId.ToString())
                },
                signingCredentials: signingCredentials);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenConf);
            return Ok(new { token });
        }
        [HttpPost]
        [ProducesResponseType(500)]
        [ProducesResponseType(401)]
        [ProducesResponseType(200)]
        [Route("CreateAnoument")]
        public IActionResult CreateAnoument(string header, string content)
        {
            if (Request.Headers.ContainsKey("Authorization"))
            {
                if (CheckJWTBool(Request.Headers["Authorization"]))
                {
                    //foreach (ClaimsIdentity claim in HttpContext.User.Identities)
                    //{
                    //    Console.WriteLine(claim.);
                    //}
                    User autorUser = _EFcontext.Users.Where(x => x.Id == Convert.ToInt32(HttpContext.User.FindFirst("userId").Value)).FirstOrDefault();
                    if (autorUser != null)
                    {
                        AnnoucementObject annoucement = new AnnoucementObject();
                        annoucement.CreationDate = DateOnly.FromDateTime(DateTime.Now);
                        annoucement.Content = content;
                        annoucement.Header = header;
                        annoucement.AutorUser = autorUser;
                        _EFcontext.Annoucments.Add(annoucement);
                        _EFcontext.SaveChanges();
                        return Ok();
                    }
                    else
                    {
                        _logger.LogError($"Can't create annoucement by user {Convert.ToInt32(HttpContext.User.FindFirst("userId").Value)}, can't find it");
                        return StatusCode(500);
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
                return Unauthorized();
        }
        [HttpGet]
        [ProducesResponseType(500)]
        [ProducesResponseType(401)]
        [ProducesResponseType(typeof(List<AnnoucementObject>), 200)]
        [Route("GetAnoucements")]
        public ActionResult<List<AnnoucementObject>> GetAnoucements()
        {
            Console.WriteLine(Request.Headers.ContainsKey("Authorization"));
            if (Request.Headers.ContainsKey("Authorization"))
            {
                if (CheckJWTBool(Request.Headers["Authorization"]))
                {
                    return Ok(_EFcontext.Annoucments.Include(x => x.AutorUser).ToList());
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
                return Unauthorized();
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns>List<AnnoucementObject> but sorted by id of user that made request</returns>
        [HttpGet]
        [ProducesResponseType(500)]
        [ProducesResponseType(401)]
        [ProducesResponseType(typeof(List<AnnoucementObject>), 200)]
        [Route("GetAnnoucementsSorted")]
        public ActionResult<List<AnnoucementObject>> GetAnnoucementsSorted()
        {
            if (Request.Headers.ContainsKey("Authorization"))
            {
                if (CheckJWTBool(Request.Headers["Authorization"]))
                {
                    return Ok(_EFcontext.Annoucments.Include(x => x.AutorUser).ToList());
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
                return Unauthorized();
        }
        [HttpPut]
        [ProducesResponseType(500)]
        [ProducesResponseType(401)]
        [ProducesResponseType(200)]
        [Route("EditAnnoucement")]
        public IActionResult EditAnnoucement(int annoucementid, string header, string content)
        {
            if (Request.Headers.ContainsKey("Authorization"))
            {
                if (CheckJWTBool(Request.Headers["Authorization"]))
                {
                    User editorUser = _EFcontext.Users.Where(x => x.Id == Convert.ToInt32(HttpContext.User.FindFirst("userId").Value)).FirstOrDefault();
                    AnnoucementObject annoument = _EFcontext.Annoucments.Where(x => x.Id == annoucementid && x.AutorUser.Id == editorUser.Id).FirstOrDefault();
                    if (annoument != null)
                    {
                        annoument.Header = header;
                        annoument.Content = content;
                        _EFcontext.SaveChanges();
                        return Ok();
                    }
                    else
                    {
                        return Unauthorized();
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
                return Unauthorized();

        }
        [HttpDelete]
        [ProducesResponseType(500)]
        [ProducesResponseType(401)]
        [ProducesResponseType(200)]
        [Route("DeleteAnnoucement")]
        public IActionResult DeleteAnnoucement(int annoucementid)
        {
            if (Request.Headers.ContainsKey("Authorization"))
            {
                if (CheckJWTBool(Request.Headers["Authorization"]))
                {
                    User editorUser = _EFcontext.Users.Where(x => x.Id == Convert.ToInt32(HttpContext.User.FindFirst("userId").Value)).FirstOrDefault();
                    AnnoucementObject annoument = _EFcontext.Annoucments.Where(x => x.Id == annoucementid && x.AutorUser.Id == editorUser.Id).FirstOrDefault();
                    if (annoument != null)
                    {
                        _EFcontext.Annoucments.Remove(annoument);
                        _EFcontext.SaveChanges();
                        return Ok();
                    }
                    else
                    {
                        return Unauthorized();
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
                return Unauthorized();

        }
    }
}
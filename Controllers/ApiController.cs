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
        private EFContext _context;
        public ApiController(EFContext eFContext, IConfiguration configuration)
        {
            _configuration = configuration;
            _context = eFContext ?? throw new NullReferenceException();
        }
#if DEBUG
        /// <summary>
        /// For debug purposes do no build production with that 
        /// </summary>
        [HttpGet]
        [Route("/apitest")]
        public void Test()
        {
            ActionAccess access = new ActionAccess();
            access.IsDocumentEditor = true;
            access.IsDocumentReader = true;
            UserRole defaultRootAccess = new UserRole();
            defaultRootAccess.Name = "root";
            defaultRootAccess.Rule = access;
            defaultRootAccess.RoleOwners = new List<User>();
            User rootUser = new User();
            rootUser.email = "root@testing.com";
            rootUser.password = "rootPassword";
            rootUser.role = defaultRootAccess;
            defaultRootAccess.RoleOwners.Add(rootUser);
            access.RootRole = defaultRootAccess;
            _context.Users.Add(rootUser);
            _context.SaveChanges();
        }
#endif
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
            User LoginUser = _context.Users.Include(x => x.role).ThenInclude(x => x.Rule).FirstOrDefault(x => x.email == email && x.password == password);
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
                    new Claim("userId", LoginUser.id.ToString()),
                    new Claim("roleId", LoginUser.role.Id.ToString())
                },
                signingCredentials: signingCredentials);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenConf);
            return Ok(new { token });
        }
    }
}
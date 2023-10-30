using Microsoft.AspNetCore.Mvc;

namespace CRMService.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ApiController : ControllerBase
    {
        [HttpGet]
        [Route("/apitest")]
        public int Test()
        {
            return 1;
        }
    }
}
using Microsoft.AspNetCore.Antiforgery;
using luna.Controllers;

namespace luna.Web.Host.Controllers
{
    public class AntiForgeryController : lunaControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}

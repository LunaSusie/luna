using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace luna.Controllers
{
    public abstract class lunaControllerBase: AbpController
    {
        protected lunaControllerBase()
        {
            LocalizationSourceName = lunaConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}

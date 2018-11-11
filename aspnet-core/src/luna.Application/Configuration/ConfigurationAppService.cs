using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using luna.Configuration.Dto;

namespace luna.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : lunaAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}

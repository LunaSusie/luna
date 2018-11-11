using System.Threading.Tasks;
using luna.Configuration.Dto;

namespace luna.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using luna.Configuration;
using luna.Web;

namespace luna.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class lunaDbContextFactory : IDesignTimeDbContextFactory<lunaDbContext>
    {
        public lunaDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<lunaDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            lunaDbContextConfigurer.Configure(builder, configuration.GetConnectionString(lunaConsts.ConnectionStringName));

            return new lunaDbContext(builder.Options);
        }
    }
}

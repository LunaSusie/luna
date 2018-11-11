using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace luna.EntityFrameworkCore
{
    public static class lunaDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<lunaDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<lunaDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}

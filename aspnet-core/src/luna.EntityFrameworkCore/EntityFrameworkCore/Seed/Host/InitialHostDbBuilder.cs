namespace luna.EntityFrameworkCore.Seed.Host
{
    public class InitialHostDbBuilder
    {
        private readonly lunaDbContext _context;

        public InitialHostDbBuilder(lunaDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            new DefaultEditionCreator(_context).Create();
            new DefaultLanguagesCreator(_context).Create();
            new HostRoleAndUserCreator(_context).Create();
            new DefaultSettingsCreator(_context).Create();

            _context.SaveChanges();
        }
    }
}

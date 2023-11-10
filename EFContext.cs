using Microsoft.EntityFrameworkCore;

namespace CRMService
{
    public class EFContext : DbContext
    {
        public EFContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
#if DEBUG
            optionsBuilder.UseInMemoryDatabase("testingDB");
#elif RELEASE
            optionsBuilder.UseMySql(@ConfigurationManager.AppSettings.Get("ConnetionString"), new MySqlServerVersion(new Version()));
#endif
            optionsBuilder.LogTo(message => System.Diagnostics.Debug.WriteLine(message), Microsoft.Extensions.Logging.LogLevel.Error);
        }
    }
}
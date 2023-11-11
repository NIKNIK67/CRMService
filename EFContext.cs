using CRMService.Models;
using Microsoft.EntityFrameworkCore;

namespace CRMService
{
    public class EFContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<ActionAccess> AccessSets { get; set; }
        public DbSet<UserRole> Roles { get; set; }
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
        protected override void OnModelCreating(ModelBuilder model)
        {
            model.Entity<User>(entity =>
            {
                entity.HasKey(x => x.id);
                entity.Property(x => x.email).IsRequired();
                entity.Property(x => x.password).IsRequired();
                entity.HasOne(x => x.role).WithMany(a => a.RoleOwners);

            });
            model.Entity<UserRole>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.HasMany(x => x.RoleOwners).WithOne(a => a.role);
                entity.HasOne(x => x.Rule).WithOne(a => a.RootRole).HasForeignKey<ActionAccess>(a => a.RuleId);
            });
            model.Entity<ActionAccess>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.HasOne(x => x.RootRole).WithOne(a => a.Rule);
                entity.Property(x => x.IsDocumentReader).IsRequired();
                entity.Property(x => x.IsDocumentEditor).IsRequired();
            });
        }
    }
}
using CRMService.Models;
using Microsoft.EntityFrameworkCore;

namespace CRMService
{
    public class EFContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<ActionAccess> AccessSets { get; set; }
        public DbSet<UserRole> Roles { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<AnnoucementObject> Annoucments { get; set; }
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
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Email).IsRequired();
                entity.Property(x => x.Password).IsRequired();
                entity.HasOne(x => x.Role).WithMany(x => x.RoleOwners);
                entity.HasOne(x => x.Rule).WithOne(x => x.RootUser).HasForeignKey<User>(foreignKeyExpression: x => x.RuleId);
                entity.HasMany(x => x.Annoucements).WithOne(x => x.AutorUser);

            });
            model.Entity<UserRole>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.HasMany(x => x.RoleOwners).WithOne(a => a.Role).HasForeignKey(x => x.RoleId);
                entity.HasMany(x => x.Rules).WithOne(a => a.RootRole).HasForeignKey(foreignKeyExpression: x => x.RoleId);
            });
            model.Entity<ActionAccess>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.HasOne(x => x.RootRole).WithMany(a => a.Rules).HasForeignKey(x => x.RoleId);
                entity.HasOne(x => x.RootUser).WithOne(a => a.Rule).HasForeignKey<User>(x => x.RuleId);
                entity.Property(x => x.IsDocumentDeleter).IsRequired();
                entity.Property(x => x.IsDocumentReader).IsRequired();
                entity.Property(x => x.IsDocumentAccessManager).IsRequired();
                entity.Property(x => x.IsDocumentEditor).IsRequired();
            });
            model.Entity<Document>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Path);
                entity.Property(x => x.Name);
                entity.HasMany(x => x.Rules).WithOne(x => x.RootDocument).HasForeignKey(foreignKeyExpression: x => x.DocumentId);
            });
            model.Entity<AnnoucementObject>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Header);
                entity.Property(x => x.Content);
                entity.Property(x => x.CreationDate);
                entity.HasOne(x => x.AutorUser).WithMany(x => x.Annoucements);
            });
        }
    }
}
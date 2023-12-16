using CRMService.Models;
using Microsoft.EntityFrameworkCore;

namespace CRMService
{
    public class EFContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> Roles { get; set; }
        public DbSet<AnnoucementObject> Annoucments { get; set; }
        public DbSet<GlobalUserActionAccess> GlobalUsersActions { get; set; }
        public DbSet<GlobalRoleActionAccess> GlobalRolesActions { get; set; }
        public DbSet<ProjectUserActionAccess> ProjectUsersActionAccesses { get; set; }
        public DbSet<ProjectRoleActionAccess> ProjectRolesActionAccesses { get; set; }
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
                entity.HasOne(x => x.Role).WithMany(x => x.RoleOwners).HasForeignKey(x => x.RoleId);
                entity.HasMany(x => x.Annoucements).WithOne(x => x.AutorUser);
                entity.HasOne(x => x.GlobalUserActionAccess).WithOne(x => x.RootUser).HasForeignKey<GlobalUserActionAccess>(x => x.UserId);

            });
            model.Entity<UserRole>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.HasMany(x => x.RoleOwners).WithOne(a => a.Role).HasForeignKey(x => x.RoleId);
                entity.HasOne(x => x.GlobalRoleActionAccess).WithOne(x => x.RootRole).HasForeignKey<GlobalRoleActionAccess>(x => x.RoleId);
            });
            model.Entity<ProjectUserActionAccess>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.ProjectId);
                entity.HasOne(x => x.Project).WithMany(x => x.UsersWithAccess).HasForeignKey(x => x.ProjectId);
                entity.Property(x => x.IsDocumentEditor);
                entity.Property(x => x.IsDocumentReader);
                entity.Property(x => x.IsDocumentDeleter);
                entity.Property(x => x.IsDocumentAccessManager);
            });
            model.Entity<ProjectRoleActionAccess>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.ProjectId);
                entity.HasOne(x => x.Project).WithMany(x => x.RolesWithAccess).HasForeignKey(x => x.ProjectId);
                entity.Property(x => x.IsDocumentEditor);
                entity.Property(x => x.IsDocumentReader);
                entity.Property(x => x.IsDocumentDeleter);
                entity.Property(x => x.IsDocumentAccessManager);
            });
            model.Entity<GlobalUserActionAccess>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.IsAllowedAddNews);
                entity.Property(x => x.IsGlobalProjectAccess);
                entity.Property(x => x.IsProjectCreating);
                entity.Property(x => x.IsUserCreating);
                entity.HasOne(x => x.RootUser).WithOne(x => x.GlobalUserActionAccess).HasForeignKey<GlobalUserActionAccess>(x => x.UserId);
            });
            model.Entity<GlobalRoleActionAccess>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.IsAllowedAddNews);
                entity.Property(x => x.IsGlobalProjectAccess);
                entity.Property(x => x.IsProjectCreating);
                entity.Property(x => x.IsUserCreating);
                entity.HasOne(x => x.RootRole).WithOne(x => x.GlobalRoleActionAccess).HasForeignKey<GlobalRoleActionAccess>(x => x.RoleId);
            });
            model.Entity<Document>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Path);
                entity.Property(x => x.Name);

            });
            model.Entity<AnnoucementObject>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Header);
                entity.Property(x => x.Content);
                entity.Property(x => x.CreationDate);
                entity.HasOne(x => x.AutorUser).WithMany(x => x.Annoucements);
            });
            model.Entity<Project>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.HasMany(x => x.Documents).WithMany(x => x.Projects);
                entity.HasMany(x => x.UsersWithAccess).WithOne(x => x.Project).HasForeignKey(x => x.ProjectId);
                entity.HasMany(x => x.RolesWithAccess).WithOne(x => x.Project).HasForeignKey(x => x.ProjectId);
            });
        }
    }
}
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Reflection;
using System.Text;
namespace CRMService
{
    public class Program
    {
        public static IConfiguration Configuration { get; set; }
        public static void Main(string[] args)
        {
            var confbuilder = new ConfigurationBuilder()
           .SetBasePath(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location))
           .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            Configuration = confbuilder.Build();
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllersWithViews().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
                options.JsonSerializerOptions.MaxDepth = 64;
            });
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<EFContext>();
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = "https://localhost:7237",
                    ValidAudience = "https://localhost:44411",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Key"]))
                };
            });
            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                    builder
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
            }
            );
            var app = builder.Build();

            if (!app.Environment.IsDevelopment())
            {
                app.UseHsts();
            }
            app.UseRouting();
            app.UseHttpsRedirection();
            app.UseCors();
            app.UseAuthorization();
            app.UseAuthentication();
            app.UseStaticFiles();
            app.UseSwagger().UseSwaggerUI();
            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");
            app.MapFallbackToFile("index.html");
            app.Run();
        }
    }
}
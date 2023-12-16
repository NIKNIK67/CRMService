#nullable disable

namespace CRMService.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int RoleId { get; set; }
        public UserRole Role { get; set; }
        public List<AnnoucementObject> Annoucements { get; set; }
        public GlobalUserActionAccess GlobalUserActionAccess { get; set; }
    }
}
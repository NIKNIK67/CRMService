#nullable disable

namespace CRMService.Models
{
    public class ActionAccess
    {
        public int Id { get; set; }
        public int RoleId { get; set; }
        public int UserId { get; set; }
        public UserRole RootRole { get; set; }
        public User RootUser { get; set; }
        public bool IsDocumentEditor { get; set; }
        public bool IsDocumentReader { get; set; }
        public bool IsDocumentDeleter { get; set; }
        public bool IsDocumentAccessManager { get; set; }
        public int DocumentId { get; set; }
        public Document RootDocument { get; set; }

    }
    enum DocumentAction
    {
        Upload,
        Edit,
        Delete
    }
}

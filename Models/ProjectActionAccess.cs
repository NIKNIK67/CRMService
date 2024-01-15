#nullable disable

namespace CRMService.Models
{
    public abstract class ProjectActionAccess
    {
        public virtual int Id { get; set; }
        public virtual int ProjectId { get; set; }
        public virtual Project Project { get; set; }
        public virtual bool IsDocumentEditor { get; set; }
        public virtual bool IsDocumentReader { get; set; }
        public virtual bool IsDocumentDeleter { get; set; }
        public virtual bool IsDocumentAccessManager { get; set; }
    }
}

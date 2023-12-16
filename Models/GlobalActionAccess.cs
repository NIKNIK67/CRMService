#nullable disable

namespace CRMService.Models
{
    public abstract class GlobalActionAccess
    {
        public virtual int Id { get; set; }
        public virtual bool IsAllowedAddNews { get; set; }
        public virtual bool IsGlobalProjectAccess { get; set; }
        public virtual bool IsProjectCreating { get; set; }
        public virtual bool IsUserCreating { get; set; }
    }
}

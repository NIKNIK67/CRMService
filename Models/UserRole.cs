﻿#nullable disable

namespace CRMService.Models
{
    public class UserRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<User> RoleOwners { get; set; }
        public int RuleId { get; set; }
        public List<ActionAccess> Rules { get; set; }

    }
}

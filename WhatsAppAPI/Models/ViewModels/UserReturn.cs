using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WhatsAppAPI.Models.ViewModels
{
    public class UserReturn
    {
        public int Id { get; set; }
        public int RoleId { get; set; }
        public string FullName { get; set; }
        public string ImageLocation { get; set; }
    }
}

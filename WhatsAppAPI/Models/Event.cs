using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WhatsAppAPI.Models
{
    public class Event
    {
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string EventURL { get; set; }
		public DateTime StartDate { set; get; }
		public DateTime EndDate { set; get; }
		public string EventImageURL { set; get; }
		public int LocationId { get; set; }
		public int UserGroupId { get; set; }
		public int UserId { get; set; }
		public bool InActive { get; set; }


	}
}

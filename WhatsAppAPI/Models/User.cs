using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WhatsAppAPI.Models
{
	public class User
	{
		public int Id { get; set; }
		public string UserName { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
	    public string Email { get; set; }
		public int RoleId { get; set; }
		public string FirebaseId { get; set; }
		public bool InActive { get; set; }
		public DateTime CreateDateTime { set; get; }
		public string ImageLocation { get; set; }
		public string FullName
		{
			get
			{
				return FirstName + " " + LastName;
			}
		}
	}
}

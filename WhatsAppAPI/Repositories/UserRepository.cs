using Microsoft.Extensions.Configuration;
using WhatsAppAPI.Models;
using WhatsAppAPI.Utils;

namespace WhatsAppAPI.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        public User GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        select [Id],[UserName],[FirstName],[LastName],[RoleId],[FirebaseId],
                        [InActive],[Email],[CreateDateTime],[ImageLocation]
	                    From [User]
                         WHERE FirebaseId = @FirebaseuserId";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", firebaseUserId);

                    User user = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        user = new User()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseId = DbUtils.GetString(reader, "FirebaseId"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            RoleId = DbUtils.GetInt(reader, "RoleId"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation")
                        };
                    }
                    reader.Close();

                    return user;
                }
            }
        }

        public void Add(User user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO User (FirebaseUserId, FirstName, LastName, Email, RoleId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseUserId, @Name, @Email, @UserTypeId)";
                    DbUtils.AddParameter(cmd, "@FirebaseUserId", user.FirebaseId);
                    DbUtils.AddParameter(cmd, "@LastName", user.LastName);
                    DbUtils.AddParameter(cmd, "@FirstName", user.FirstName);
                    DbUtils.AddParameter(cmd, "@Email", user.Email);
                    DbUtils.AddParameter(cmd, "@RoleId", user.RoleId);

                    user.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}

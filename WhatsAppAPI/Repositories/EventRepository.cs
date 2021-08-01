using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using WhatsAppAPI.Models;
using WhatsAppAPI.Utils;

namespace WhatsAppAPI.Repositories
{
    public class EventRepository : BaseRepository, IEventRepository
    {
        public EventRepository(IConfiguration configuration) : base(configuration) { }

        public List<Event> GetEventByUserId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Name, Description, EventURL, 
                        StartDate, EndDate, EventImageURL, 
                        UserGroupId, LocationId, InActive,UserId
                        From Events
                         WHERE UserId = @userId";

                    DbUtils.AddParameter(cmd, "@userId", id);

                    var events = new List<Event>();
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        var ev = NewEvent(reader);
                        events.Add(ev);
                    }
                    reader.Close();
                    return events;
                }
            }
        }
        public void Add(Event ev)
        {
            using(var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Insert Into Events
                                      (Name, Description, EventURL, 
                                       StartDate, EndDate, EventImageURL, 
                                       UserGroupId, LocationId, UserId)
                                    values(@name, @description,@eventURL,@startDate
                                            @endDate, @eventImageUPL, 0,@locationId, 
                                            @userId

";

                    DbUtils.AddParameter(cmd, "@userId", id);

                    var events = new List<Event>();
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        var ev = NewEvent(reader);
                        events.Add(ev);
                    }
                    reader.Close();
                    return events;
                }
            }
            //Id, Name, Description, EventURL, 
            //StartDate, EndDate, EventImageURL, 
            //            UserGroupId, LocationId, InActive,UserId
            //            From Events
        }
        private Event NewEvent(SqlDataReader reader)
        {
            return new Event()
            {
                Id = DbUtils.GetInt(reader, "Id"),
                Name = DbUtils.GetString(reader, "Name"),
                Description = DbUtils.GetString(reader, "Description"),
                EventURL = DbUtils.GetString(reader, "EventURL"),
                StartDate = DbUtils.GetDateTime(reader, "StartDate"),
                EndDate = DbUtils.GetDateTime(reader, "EndDate"),
                EventImageURL = DbUtils.GetString(reader, "EventImageURL"),
                UserGroupId = DbUtils.GetInt(reader, "UserGroupId"),
                UserId = DbUtils.GetInt(reader, "UserId"),
                LocationId = DbUtils.GetInt(reader, "LocationId"),
                InActive = reader.GetBoolean(reader.GetOrdinal("InActive"))
            };
        }
    }
}

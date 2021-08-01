using WhatsAppAPI.Models;
using System.Collections.Generic;

namespace WhatsAppAPI.Repositories
{
    public interface IEventRepository
    {
        List<Event> GetEventByUserId(int id);
    }
}

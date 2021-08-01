using Microsoft.AspNetCore.Mvc;
using WhatsAppAPI.Repositories;
using WhatsAppAPI.Models;

namespace WhatsAppAPI.Controllers
{
    public class EventController : ControllerBase
    {
        private readonly IEventRepository _eventRepository;
        public EventController(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }
        [HttpGet("GetEvents/{Id}")]
        public IActionResult GetEventByUserId(int Id)
        {
            var events = _eventRepository.GetEventByUserId(Id);
            if (events == null)
            {
                return NotFound();
            }
            return Ok(events);
        }

        //[HttpGet("DoesUserExist/{firebaseUserId}")]
        //public IActionResult DoesUserExist(string firebaseUserId)
        //{
        //    var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        //    if (userProfile == null)
        //    {
        //        return Ok(-1);
        //    }
        //    return Ok(userProfile);
        //}

        [HttpPost]
        public IActionResult AddEvent(Event ev)
        {
            _eventRepository.Add(ev);
            return CreatedAtAction(
                nameof(GetByFirebaseUserId), new { firebaseUserId = userProfile.FirebaseUserId }, userProfile);
        }
    }
}

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WhatsAppAPI.Repositories;

namespace WhatsAppAPI.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userProfileRepository;
        public UserController(IUserRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }

        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok();
        }

        //[HttpPost]
        //public IActionResult Register(UserController user)
        //{
        //    // All newly registered users start out as a "user" user type (i.e. they are not admins)
        //    user.Id = UserType.USER_TYPE_ID;
        //    _userProfileRepository.Add(user);
        //    return CreatedAtAction(
        //        nameof(GetByFirebaseUserId), new { firebaseUserId = userProfile.FirebaseUserId }, userProfile);
        //}
    }
}

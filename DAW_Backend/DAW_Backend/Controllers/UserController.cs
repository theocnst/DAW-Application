using DAW_Backend.Interfaces;
using DAW_Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace DAW_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        [HttpGet("GetUsers")]
        public async Task<IActionResult> GetUsers()
        {
            var user = await _userRepository.GetUsers();
            return new OkObjectResult(user);
        }

        [HttpGet("GetUserById/{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _userRepository.GetUserById(id);
            return new OkObjectResult(user);
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser(User user)
        {
            var newUser = await _userRepository.CreateUser(user);
            return new OkObjectResult(newUser);
        }

        [HttpPut("EditUser")]
        public async Task<IActionResult> EditUser(User user)
        {
            var editUser = await _userRepository.EditUser(user);
            return new OkObjectResult(editUser);
        }

        [HttpDelete("DeleteUser/{email}")]
        public async Task<IActionResult> DeleteUser(string email)
        {
            var deleteUser = await _userRepository.DeleteUser(email);
            return new OkObjectResult(deleteUser);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(string email, string password)
        {
            var user = await _userRepository.Login(email, password);
            if (user == null)
            {
                return new NotFoundObjectResult("User not found or password is incorrect.");
            }

            return new OkObjectResult(user);
        }


        [HttpPost("Register")]
        public async Task<IActionResult> Register(User user)
        {
            var newUser = await _userRepository.Register(user);
            return new OkObjectResult(newUser);
        }
    }
}

using DAW_Backend.Models;

namespace DAW_Backend.Interfaces
{
    public interface IUserRepository
    {
        Task<User> CreateUser(User user);
        Task<User> GetUser(string email);
        Task<User> EditUser(User user);
        Task<User> DeleteUser(string email);
        Task<User> GetUserById(int id);
        Task<List<User>> GetUsers();
        Task<User> Login(string email, string password);
        Task<User> Register(User user);
    }

}

using DAW_Backend.Interfaces;
using DAW_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace DAW_Backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DawDbContext _databaseContext;

        public UserRepository(DawDbContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public async Task<User> CreateUser(User user)
        {
            await _databaseContext.Users.AddAsync(user);
            await _databaseContext.SaveChangesAsync();
            return user;
        }

        public async Task<User> GetUser(string email)
        {
            return await _databaseContext.Users.FirstOrDefaultAsync(user => user.Email == email);
        }

        public async Task<User> EditUser(User user)
        {
            _databaseContext.Users.Update(user);
            await _databaseContext.SaveChangesAsync();
            return user;
        }

        public async Task<User> DeleteUser(string email)
        {
            var user = await _databaseContext.Users.FirstOrDefaultAsync(user => user.Email == email);
            _databaseContext.Users.Remove(user);
            await _databaseContext.SaveChangesAsync();
            return user;
        }

        public async Task<User> GetUserById(int id)
        {
            return await _databaseContext.Users.FirstOrDefaultAsync(user => user.Id == id);
        }

        public async Task<List<User>> GetUsers()
        {
            return await _databaseContext.Users.ToListAsync();
        }

        public async Task<User> Login(string email, string password)
        {
            var user = await _databaseContext.Users
                .FirstOrDefaultAsync(u => u.Email == email && u.Password == password);

            return user;
        }

        public async Task<User> Register(User user)
        {
            await _databaseContext.Users.AddAsync(user);
            await _databaseContext.SaveChangesAsync();
            return user;
        }
    }
}

using WhatsAppAPI.Models;

namespace WhatsAppAPI.Repositories
{
    public interface IUserRepository
    {
        void Add(User userProfile);
        User GetByFirebaseUserId(string firebaseUserId);
    }
}

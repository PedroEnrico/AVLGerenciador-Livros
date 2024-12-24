using APIGerenciador_Livros.Model;

namespace APIGerenciador_Livros.Interfaces
{
    public interface ILivroRepository
    {
        Task<IEnumerable<Livro>> GetAllAsync();
        Task<Livro> GetByIdAsync(int id);
        Task<Livro> CreateAsync(Livro livro);
        Task UpdateAsync(Livro livro);
        Task DeleteAsync(int id);
        Task<bool> ExistsAsync(int id);
        Task SaveChangesAsync();
    }
}

using APIGerenciador_Livros.Data;
using APIGerenciador_Livros.Interfaces;
using APIGerenciador_Livros.Model;
using Microsoft.EntityFrameworkCore;

namespace APIGerenciador_Livros.Repositories
{
    public class LivroRepository : ILivroRepository
    {
        private readonly ApplicationDbContext _context;

        public LivroRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Livro>> GetAllAsync()
        {
            return await _context.Livros.ToListAsync();
        }

        public async Task<Livro> GetByIdAsync(int id)
        {
            return await _context.Livros.FindAsync(id);
        }

        public async Task<Livro> CreateAsync(Livro livro)
        {
            _context.Livros.Add(livro);
            await SaveChangesAsync();
            return livro;
        }

        public async Task UpdateAsync(Livro livro)
        {
            _context.Entry(livro).State = EntityState.Modified;
            await SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var livro = await GetByIdAsync(id);
            if (livro != null)
            {
                _context.Livros.Remove(livro);
                await SaveChangesAsync();
            }
        }

        public async Task<bool> ExistsAsync(int id)
        {
            return await _context.Livros.AnyAsync(e => e.Id == id);
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
using APIGerenciador_Livros.Model;
using Microsoft.EntityFrameworkCore;

namespace APIGerenciador_Livros.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Livro> Livros { get; set; }

        // Configure outros DbSets aqui se necessário
    }
}

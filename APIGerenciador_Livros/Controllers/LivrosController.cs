using APIGerenciador_Livros.Data;
using APIGerenciador_Livros.Dtos;
using APIGerenciador_Livros.Model;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APIGerenciador_Livros.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LivrosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public LivrosController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        /// <summary>
        /// Recupera a lista de livros do banco de dados.
        /// </summary>
        /// <remarks>
        /// Exemplo de resposta:
        /// 
        ///     GET /api/livros
        ///     {
        ///        "id": 1,
        ///        "titulo": "Livro A",
        ///        "autor": "Autor A",
        ///        "genero": "Ficção",
        ///        "ano": "2020"
        ///     }
        /// </remarks>
        /// <returns>Uma lista de livros.</returns>
        /// <response code="200">Retorna a lista de livros.</response>
        /// <response code="500">Erro interno do servidor.</response>
        // GET: api/livros
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LivroResponseDTO>>> GetLivros()
        {
            var livros = await _context.Livros.ToListAsync();
            return Ok(_mapper.Map<IEnumerable<LivroResponseDTO>>(livros));
        }

        /// <summary>
        /// Recupera os detalhes de um livro específico com base no ID fornecido.
        /// </summary>
        /// <param name="id">O ID do livro a ser recuperado.</param>
        /// <returns>O livro correspondente ao ID.</returns>
        /// <response code="200">Retorna o livro correspondente.</response>
        /// <response code="404">Livro não encontrado.</response>
        // GET: api/livros/#
        [HttpGet("{id}")]
        public async Task<ActionResult<LivroResponseDTO>> GetLivro(int id)
        {
            var livro = await _context.Livros.FindAsync(id);

            if (livro == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<LivroResponseDTO>(livro));
        }

        /// <summary>
        /// Adiciona um novo livro ao banco de dados.
        /// </summary>
        /// <param name="createLivroDTO">Os dados do livro a ser adicionado.</param>
        /// <returns>O livro recém-criado.</returns>
        /// <response code="201">Livro criado com sucesso.</response>
        /// <response code="400">Dados inválidos.</response>
        // POST: api/livros
        [HttpPost]
        public async Task<ActionResult<LivroResponseDTO>> PostLivro(CreateLivroDTO createLivroDTO)
        {
            var livro = _mapper.Map<Livro>(createLivroDTO);

            _context.Livros.Add(livro);
            await _context.SaveChangesAsync();

            var livroResponse = _mapper.Map<LivroResponseDTO>(livro);

            return CreatedAtAction(
                nameof(GetLivro),
                new { id = livro.Id },
                livroResponse
            );
        }

        /// <summary>
        /// Atualiza as informações de um livro existente com base no ID fornecido.
        /// </summary>
        /// <param name="id">O ID do livro a ser atualizado.</param>
        /// <param name="updateLivroDTO">Os novos dados para o livro.</param>
        /// <returns>Sem conteúdo.</returns>
        /// <response code="204">Livro atualizado com sucesso.</response>
        /// <response code="404">Livro não encontrado.</response>
        /// <response code="400">Requisição inválida.</response>
        // PUT: api/livros/#
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLivro(int id, UpdateLivroDTO updateLivroDTO)
        {
            var livro = await _context.Livros.FindAsync(id);

            if (livro == null)
            {
                return NotFound();
            }

            _mapper.Map(updateLivroDTO, livro);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LivroExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        /// <summary>
        /// Exclui um livro do banco de dados com base no ID fornecido.
        /// </summary>
        /// <param name="id">O ID do livro a ser excluído.</param>
        /// <returns>Sem conteúdo.</returns>
        /// <response code="204">Livro excluído com sucesso.</response>
        /// <response code="404">Livro não encontrado.</response>
        // DELETE: api/livros/#
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLivro(int id)
        {
            var livro = await _context.Livros.FindAsync(id);
            if (livro == null)
            {
                return NotFound();
            }

            _context.Livros.Remove(livro);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LivroExists(int id)
        {
            return _context.Livros.Any(e => e.Id == id);
        }
    }
}
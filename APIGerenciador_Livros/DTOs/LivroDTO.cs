namespace APIGerenciador_Livros.Dtos
{
    public class LivroDTO
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Genero { get; set; }
        public string Ano { get; set; }
    }

    // DTO para criação de livro
    public class CreateLivroDTO
    {
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Genero { get; set; }
        public string Ano { get; set; }
    }

    // DTO para atualização de livro
    public class UpdateLivroDTO
    {
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Genero { get; set; }
        public string Ano { get; set; }
    }

    // DTO para resposta detalhada
    public class LivroResponseDTO : LivroDTO
    {
    }
}

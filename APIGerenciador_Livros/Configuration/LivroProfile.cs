using AutoMapper;
using APIGerenciador_Livros.Model;
using APIGerenciador_Livros.Dtos;

namespace APIGerenciador_Livros.Configuration
{
    public class LivroProfile : Profile
    {
        public LivroProfile()
        {
            // Mapeamento de Livro para LivroDTO e vice-versa
            CreateMap<Livro, LivroDTO>();
            CreateMap<LivroDTO, Livro>();

            // Mapeamento para criação
            CreateMap<CreateLivroDTO, Livro>();

            // Mapeamento para atualização
            CreateMap<UpdateLivroDTO, Livro>()
                .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

            // Mapeamento para resposta
            CreateMap<Livro, LivroResponseDTO>();
        }
    }
}

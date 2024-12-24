using APIGerenciador_Livros.Data;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using APIGerenciador_Livros.Configuration;
using APIGerenciador_Livros.Model;
using System;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy("DevPolicy",
        builder => builder
            .WithOrigins("http://localhost:4200") // URL Angular
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

// Configure o InMemory
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseInMemoryDatabase("BooksDb"));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(typeof(LivroProfile));

builder.Services.AddSwaggerGen(options =>
{
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    options.IncludeXmlComments(xmlPath);
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    context.Livros.AddRange(
        new Livro { Id = 1, Titulo = "Livro A", Autor = "Autor A", Genero = "Ficção", Ano = "2020" },
        new Livro { Id = 2, Titulo = "Livro B", Autor = "Autor B", Genero = "Romance", Ano = "2021" }
    );
    context.SaveChanges();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("DevPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();

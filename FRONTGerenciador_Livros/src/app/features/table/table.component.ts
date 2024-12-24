import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LivroService } from 'src/app/core/services/livro.service';
import { Book } from 'src/app/shared/model/Book';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../editDialog/edit.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titulo', 'autor', 'genero', 'ano', 'acoes'];
  dataSource = new MatTableDataSource<Book>([]);

  constructor(private livroService: LivroService, private dialog: MatDialog) { }

  // Método para abrir o diálogo de edição
  openEditDialog(bookData: any): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '800px', // Define a largura do diálogo
      data: bookData // Passa os dados do livro para o diálogo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadBooks()
      }
    });
  }

  openDeleteDialog(bookData: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '800px', // Define a largura do diálogo
      data: bookData // Passa os dados do livro para o diálogo
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        this.loadBooks()
      }
    });
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.livroService.getAllBooks()
      .subscribe({
        next: (data) => {
          console.log(data)
          this.dataSource.data = data; // Atualiza os dados da tabela
        },
        error: (error) => {
          console.error('Erro ao carregar livros:', error);
        }
      });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '800px', // Define a largura do diálogo
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        this.loadBooks()
      }
    });
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LivroService } from 'src/app/core/services/livro.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  private idRow = 0

  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private livroService: LivroService, private snackBar: MatSnackBar) { 
    this.idRow = data.id
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close(this.idRow); 
  }

  onConfirm(): void {
    this.livroService.deleteBook(this.idRow).subscribe({
      next: (response) => {

        this.snackBar.open('Livro excluido!', 'Fechar', {
          duration: 1000,
        });
      },
      error: (err) => {
        this.snackBar.open('Não foi possível excluir o livro.', 'Fechar', {
          duration: 1000,
        });
      },
      complete: (() => {
        this.dialogRef.close(true);
      })
    });
     
  }

}

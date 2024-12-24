import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'src/app/shared/model/Book';
import { LivroService } from 'src/app/core/services/livro.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  livroForm!: FormGroup;
  private idRow = 0
  constructor(
    private livroService: LivroService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any // Recebe os dados do livro
  ) {
    this.idRow = data.id
    this.livroForm = this.fb.group({
      titulo: [data.titulo || ''],
      autor: [data.autor || ''],
      genero: [data.genero || ''],
      ano: [data.ano || ''],
    });
  }

  

  onSubmit(): void {
    if (this.livroForm.valid) {
      const newBook: Book = this.livroForm.value;
      this.livroService.updateBook(this.idRow, newBook).subscribe({
        next: (response) => {

          this.snackBar.open('Livro editado!', 'Fechar', {
            duration: 2000,
          });
        },
        error: (err) => {
          this.snackBar.open('Não foi possível editar o livro.', 'Fechar', {
            duration: 2000,
          });
        },
        complete: (() => {
          this.dialogRef.close(this.livroForm.value);
          this.livroForm.reset();
        })
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}

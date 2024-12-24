import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivroService } from 'src/app/core/services/livro.service';
import { Book } from 'src/app/shared/model/Book';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

  livroForm!: FormGroup;

  constructor(private livroService: LivroService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CreateDialogComponent>) {
    this.livroForm = this.fb.group({
      titulo: [''],
      autor: [''],
      genero: [''], 
      ano: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.livroForm.valid) {
      const newBook: Book = this.livroForm.value;
      newBook.id = 0
      this.livroService.addBook(newBook).subscribe({
        next: (response) => {

          this.snackBar.open('Livro Criado!', 'Fechar', {
            duration: 2000,  
          });
  
          this.livroForm.reset();
        },
        error: (err) => {
          this.snackBar.open('Não foi possível criar o livro.', 'Fechar', {
            duration: 2000,  
          });
        },
        complete: (() => {
          this.dialogRef.close(true);
          this.livroForm.reset();
        })
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  
}



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';

const COMPONENTS = [
  DeleteDialogComponent
] as const;

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule
  ],
  exports: [...COMPONENTS]
})
export class DeleteModule { }

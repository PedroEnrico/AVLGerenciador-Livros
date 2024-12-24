import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { CreateDialogComponent } from './create-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

const COMPONENTS = [
  CreateDialogComponent
] as const;

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...COMPONENTS]
})
export class CreateModule { }

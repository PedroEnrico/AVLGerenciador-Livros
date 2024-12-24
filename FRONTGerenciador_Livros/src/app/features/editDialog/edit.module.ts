import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TableModule } from '../table/table.module';

const COMPONENTS = [
  EditComponent
] as const;

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    TableModule
  ],
  exports: [...COMPONENTS]
})
export class EditModule { }

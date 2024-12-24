import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TableRoutingModule } from './table-routing.module';

const COMPONENTS = [
  TableComponent
] as const;

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    TableRoutingModule
  ],
  exports: [...COMPONENTS]
})
export class TableModule { }

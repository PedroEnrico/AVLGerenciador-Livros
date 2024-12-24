import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EditModule } from './editDialog/edit.module';
import { TableModule } from './table/table.module';
import { DeleteModule } from './delete-dialog/delete.module';
import { CreateModule } from './create-dialog/create.module';

@NgModule({
    imports: [
      CommonModule,
      MaterialModule,
      CreateModule,
      EditModule,
      DeleteModule,
      TableModule
    ],
    exports: [
      CreateModule,
      EditModule,
      DeleteModule,
      TableModule
    ]
})
export class FeaturesModule { }

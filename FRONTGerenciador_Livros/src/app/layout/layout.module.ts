import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SnackbarComponent } from './snackbar/snackbar.component';

const COMPONENTS = [
  ToolbarComponent
] as const;

@NgModule({
  declarations: [...COMPONENTS, SnackbarComponent], 
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS  
  ]
})

export class LayoutModule { }

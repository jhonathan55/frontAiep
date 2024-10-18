import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
const MATERIAL_MODULES = [
  MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ]
})
export class MaterialModule { }

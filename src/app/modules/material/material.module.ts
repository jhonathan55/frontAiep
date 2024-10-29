import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const MATERIAL_MODULES = [
  MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ];

  const FRM=[
    ReactiveFormsModule,
    FormsModule,

  ]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    FRM
  ],
  exports: [
    MATERIAL_MODULES,
    FRM
  ]
})
export class MaterialModule { }

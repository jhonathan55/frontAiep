import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-frm-dialog',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './frm-dialog.component.html',
  styleUrl: './frm-dialog.component.css'
})
export class FrmDialogComponent implements OnInit,OnDestroy {
  
  private _fb=inject(FormBuilder)
  private _subscription:Subscription=new Subscription()
  userForm!:FormGroup
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
  onSubmit(){
    console.log('enviado');
    
  }


}

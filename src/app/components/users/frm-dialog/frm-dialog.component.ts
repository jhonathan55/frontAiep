import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

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
  readonly dialogRef=inject(MatDialogRef)
  private _fb=inject(FormBuilder)
  private _subscription:Subscription=new Subscription()
  userForm!:FormGroup
  ngOnInit(): void {
    this.userForm=this._fb.group({
      firstName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      lastName:[''],
      age:['',Validators.required],

    })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
  onSubmit(){
    if(this.userForm.invalid){
      return
    }
    this.dialogRef.close(this.userForm.value)
    
  }

  isValidField(field:string):string{
    const validatedField=this.userForm.get(field)
    return (!validatedField?.valid && validatedField?.touched)?'is-invalid':''
  }


}

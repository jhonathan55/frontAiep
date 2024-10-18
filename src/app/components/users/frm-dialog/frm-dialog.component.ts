import { Component } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-frm-dialog',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './frm-dialog.component.html',
  styleUrl: './frm-dialog.component.css'
})
export class FrmDialogComponent {

}

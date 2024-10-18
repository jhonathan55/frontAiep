import { Component, inject, Optional } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FrmDialogComponent } from './frm-dialog/frm-dialog.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  readonly dialogRef = inject(MatDialogRef<FrmDialogComponent>, {
    optional: true,
  });

  readonly dialog=inject(MatDialog);

  openDialog() {
    console.log('Dialog opened');
    const dialogRef = this.dialog.open(FrmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

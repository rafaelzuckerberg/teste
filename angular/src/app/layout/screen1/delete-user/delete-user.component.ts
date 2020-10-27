import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  
  constructor(private service: UserService, @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<DeleteUserComponent>) { 
  }

  ngOnInit(): void {
  }


  eventModal() {
    this.service.delete(this.data.id)
      .subscribe(res => {
        this.message(res['message'], 3000);
        this.closeModal(true);
      })
  }


  closeModal(even) {
    this.dialogRef.close(even);
  }


  message(message: string, duration) {
    this.snackBar.open(message, 'Fechar', {
        duration: duration,
      });
  }


}

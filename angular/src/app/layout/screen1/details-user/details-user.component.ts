import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/dao/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {

  user: User = {};

  constructor(private service: UserService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DetailsUserComponent>) { 
  }

  ngOnInit(): void {
    if(this.data) {
      this.getUser();
    }
  }


  getUser() {
    this.service.getUser(this.data.id)
        .subscribe(user => {
          console.log(user)
          this.user = user;
        });
  }


  closeModal(even) {
    this.dialogRef.close(even);
  }

}

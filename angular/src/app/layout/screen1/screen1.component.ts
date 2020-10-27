import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/dao/user';
import { UserService } from 'src/app/shared/services/user.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';


@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {

  displayedColumns = ['id', 'name', 'email', 'cell', 'profile', 'created_at', 'icon'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dialog: MatDialog, private service: UserService) {
  }


  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.service.getUsers()
      .subscribe(users => {
        console.log(users);
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }


  modalCreate(user) {
    this.service.user = Object.assign({}, user);
    let dialogRef = this.dialog.open(CreateUserComponent, {
      height: '545px',
      width: '600px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getUsers();
      }
    });
  }


  modalDetails(user: User) {
    let dialogRef = this.dialog.open(DetailsUserComponent, {
      height: '500px',
      width: '560px',
      data: {
        id: user.id
      },
      disableClose: true
    });
  }


  modalDelete(user: User) {
    console.log(user);
    let dialogRef = this.dialog.open(DeleteUserComponent, {
      height: '150',
      width: '425px',
      data: {
        id: user.id
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getUsers();
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

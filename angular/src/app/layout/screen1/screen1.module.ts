import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Screen1RoutingModule } from './screen1-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';


@NgModule({
  declarations: [Screen1Component, CreateUserComponent, DeleteUserComponent, DetailsUserComponent],
  imports: [
    CommonModule,
    Screen1RoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatTableModule
  ],
  entryComponents: [
    CreateUserComponent
  ]
})
export class Screen1Module { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  form: FormGroup;

  profiles: any = [
    { id: 1, name: 'Pessoa Física' },
    { id: 2, name: 'Pessoa Jurídica' },
  ]
  hide = true;
  clicked: boolean = false;
  showProfile: boolean = null;


  constructor(private fb: FormBuilder, public service: UserService, private snack: MatSnackBar, public dialogRef: MatDialogRef<CreateUserComponent>) { }

  ngOnInit(): void {
    this.initForm();
    if(this.service.user.id != undefined) {
      let profile = this.service.user.cnpj != null ? 2 : 1;
      this.form.controls['name'].setValue(this.service.user.name.split(' ')[0]);
      this.form.controls['lastname'].setValue(this.service.user.name.split(' ')[1]);
      this.showProfile = profile == 1 ? true : false;
      this.form.controls['profile'].setValue(profile);
    }
  }


  initForm() {
    this.form = this.fb.group({
      name: [this.service.user.name, Validators.required],
      lastname: [this.service.user.name, Validators.required],
      email: [this.service.user.email, Validators.required],
      cell: [this.service.user.cell, Validators.required],
      profile: ['', Validators.required],
      cpf: [this.service.user.cpf],
      cnpj: [this.service.user.cnpj],
    });
  }


  profileSelected(e) {
    this.showProfile = e == 1 ? true : false;
  }


  submit() {
    this.clicked = true;
    console.log(this.form.value);
    if(this.service.user.id != undefined) {
      this.update();
    } else {
      this.save();
    }
  }


  save() {
    this.service.add(this.form.value)
    .subscribe(res => {
      console.log(res)
      setTimeout(() => {
        this.closeModal(true);
        this.message(res['message'], 3000);
      }, 3000);
    }, er => {
      console.log(er);
      setTimeout(() => {
        this.clicked = false;
      }, 2000);
    });
  }


  update() {
    this.form.value.id = this.service.user.id;
    this.service.update(this.form.value)
    .subscribe(res => {
      console.log(res)
      setTimeout(() => {
        this.closeModal(true);
        this.message(res['message'], 3000);
      }, 3000);
    }, er => {
      console.log(er);
      setTimeout(() => {
        this.clicked = false;
      }, 2000);
    });
  }


  message(message: string, duration) {
    this.snack.open(message, 'Fechar', {
        duration: duration,
      });
  }


  closeModal(even) {
    this.dialogRef.close(even);
  }

}

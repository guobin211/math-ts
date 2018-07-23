import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  checkLogin = {
    _username: 'admin',
    _password: 'admin'
  };

  constructor(private fb: FormBuilder, private route: Router, private storage: StorageService) {
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.checkLogin._username == this.validateForm.value.userName && this.checkLogin._password == this.validateForm.value.password && this.validateForm.value.remember) {
      this.route.navigate(['./home']);
      // 存储用户信息
      this.storage.setItem('userInfo', this.validateForm.value);
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}

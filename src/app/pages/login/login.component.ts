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
  isLogin = false;

  constructor(private fb: FormBuilder,
              private route: Router,
              private storage: StorageService,) {
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.checkLogin._username == this.validateForm.value.userName
      && this.checkLogin._password == this.validateForm.value.password) {
      if (this.validateForm.value.remember) {
        // 存储用户信息
        this.storage.setData('userInfo', this.validateForm.value);
        this.route.navigate(['./home']);
        this.isLogin = true;
      } else {
        this.storage.remove('userInfo');
        this.route.navigate(['./home']);
        this.isLogin = true;
      }
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

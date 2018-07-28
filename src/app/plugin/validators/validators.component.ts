import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {mobileValidator} from "../../pipes/validators";

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent implements OnInit {
  validateForm: FormGroup;
  mobileForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      /**
       * 表单校验通过
       * console.log(this.validateForm.value);
       *
       * **/
    }
  }

  ngOnInit(): void {
    /**
     * 创建表单
     *
     * **/
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(6)]],
      remember: [true]
    });
    this.mobileForm = this.fb.group({
      mobile: [null, [Validators.required, mobileValidator]],
      remember: [true]
    })
  }
}

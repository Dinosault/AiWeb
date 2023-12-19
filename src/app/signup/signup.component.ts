import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  error: string = '';

  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit() {
    // 處理表單提交邏輯，如發送到伺服器
    console.log('提交的數據: ', this.user);
  }
}

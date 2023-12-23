import { Component } from '@angular/core';
import { DataApiService } from '../service/todo-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {


  error: string = '';
  user = {
    userAccount: '',
    userPassword: ''
  };

  constructor(
    private router: Router,
    private dataApiService: DataApiService) {}

  login(): void {
    // 這裡應該有一個身份驗證服務，用來檢查使用者的帳號和密碼
    this.dataApiService.logInData(this.user).subscribe(res =>{
      const resstr = res;
      console.log(resstr);
    });
  }
}

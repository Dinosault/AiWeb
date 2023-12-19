import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login(): void {
    // 在實際應用中，這裡應該有一個身份驗證服務，用來檢查使用者的帳號和密碼
    // 這裡只是一個簡單的示範
    if (this.username === 'user' && this.password === 'password') {
      // 登入成功，導航到應用的主畫面（這裡假設有一個名為 'dashboard' 的路由）
      this.router.navigate(['/dashboard']);
    } else {
      // 登入失敗，顯示錯誤訊息
      this.error = 'Invalid username or password';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../service/todo-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{

  hide = true;
  error: string = '';
  user = {
    userAccount: '',
    userPassword: ''
  };

  constructor(private dataApiService: DataApiService) {}

  onSubmit(): void {
    // 處理表單提交邏輯，如發送到伺服器
    this.dataApiService.signUpData(this.user).subscribe(
      data => console.log('傳送成功:', data),
      error => console.error('請求出現問題:', error)
    );
    // console.log('提交的數據: ', this.user);
  }

  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('');
  constructor(){}

  updateName(){
    this.name.setValue('Nancy');
  }
  // 呼叫 FormGroup 或 FormArray 的 setValue() 方法時
  // 傳入值需符合「控制元件組」或「控制元件陣列」的結構
  ngOnInit(): void {
  }
}

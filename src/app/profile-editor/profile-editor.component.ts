import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName:['', Validators.required],
    lastName:[''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit(){
  }
  onSubmit(){
    console.log(this.profileForm.value)
  }
  updateProfile(){
    this.profileForm.patchValue({
      firstName:'nancy',
      address: {
        street: '123 Drew Street'
      }
    });
    // this.profileForm.setValue({
    //   firstName: 'nancy',
    //   lastName:'',
    //   address:{
    //     street: '123 Drew Street',
    //     city: '',
    //     state: '',
    //     zip: '',
    //   }
    // });
    // 使用patchValue() 方法
    // this.profileForm.patchValue({
    //   firstName: 'nancy',
    //   address: {
    //     street: '123 Drew Street'
    //   }
    // });
  }
  addAlias(){
    this.aliases.push(this.fb.control(''));
  }
}

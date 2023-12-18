import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/name-editor', pathMatch: 'full' },
  { path: 'name-editor', component: NameEditorComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
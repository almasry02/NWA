import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import {ApplicationConfig, BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // other routes...
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// login.component.ts
import { Component } from '@angular/core';
import {Teacher, Teachers} from '../../Model/teacher';
import {Student, Students} from '../../Model/student';
import { Router } from '@angular/router';
import { UserService } from '../../Model/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent {

  constructor(private router: Router, private UserService: UserService) { }
  // Vordefinierter Benutzer
  teachers: Teacher[] = Teachers;
  students: Student[] = Students;

  //Funktion für die Anmeldung
  onClick(email: string, password: string): void {
    const foundUser = [...this.teachers, ...this.students].find(user =>
      user.getEmail().toLowerCase() === email.toLowerCase() && user.getPassword() === password
    );

    if (foundUser) {
      this.UserService.setLoggedInUser(foundUser.getEmail().toLowerCase(), foundUser.getGegenstand().toLowerCase());
      if (foundUser.getUserType().toLowerCase() === 'teacher') {
        this.router.navigate(['/teacher']);
      } else if (foundUser.getUserType().toLowerCase() === 'student') {
        this.router.navigate(['/students']);
      }

    }
  }

  // Diese Variablen werden von ngModel in der HTML-Datei verwendet
  email: string = '';
  password: string = '';
}

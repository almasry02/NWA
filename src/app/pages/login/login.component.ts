import { Component } from '@angular/core';
import { Teacher, Teachers } from '../../Model/teacher';
import { Student, Students } from '../../Model/student';
import { Router } from '@angular/router';
import { UserService } from '../../Model/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private userService: UserService) { }

  // Vordefinierter Benutzer
  teachers: Teacher[] = Teachers;
  students: Student[] = Students;

  // Diese Variablen werden von ngModel in der HTML-Datei verwendet
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  // Funktion für die Anmeldung
  onClick(email: string, password: string): void {
    const foundUser = [...this.teachers, ...this.students].find(user =>
      user.getEmail().toLowerCase() === email.toLowerCase() && user.getPassword() === password
    );

    if (foundUser) {
      this.userService.setLoggedInUser(foundUser.getEmail().toLowerCase(), foundUser.getGegenstand().toLowerCase());
      if (foundUser.getUserType().toLowerCase() === 'teacher') {
        this.router.navigate(['/teacher']);
      } else if (foundUser.getUserType().toLowerCase() === 'student') {
        this.router.navigate(['/students']);
      }
    } else {
      this.errorMessage = 'Invalid login credentials';
    }
  }
}

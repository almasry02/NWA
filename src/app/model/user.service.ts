// Model/user.service.ts
import { Injectable } from '@angular/core';
import { Grade, Grades } from './grade';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser: string = '';
  private loggedInUserSubject: string = '';

  setLoggedInUser(user: string, subject: string) {
    this.loggedInUser = user;
    this.loggedInUserSubject = subject;
  }

  getLoggedInUser() {
    return {
      user: this.loggedInUser,
      subject: this.loggedInUserSubject
    };
  }

  addGrade(studentEmail: string, subject: string, grade: number) {
    Grades.push(new Grade(studentEmail, subject, grade));
  }

  getGradesForStudent(studentEmail: string): Grade[] {
    return Grades.filter(g => g.studentEmail === studentEmail);
  }

  getGradesForStudentAndSubject(studentEmail: string, subject: string): Grade[] {
    return Grades.filter(g => g.studentEmail === studentEmail && g.subject === subject);
  }
}

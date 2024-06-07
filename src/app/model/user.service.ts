import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { [key: string]: { password: string, role: string } } = {
    'teacher@htl.at': { password: '1234', role: 'teacher' },
    'student1@htl.at': { password: '5678', role: 'student' },
    'student2@htl.at': { password: '91011', role: 'student' },
    // Weitere Benutzer
  };

  private grades: { [student: string]: { [subject: string]: number } } = {};

  private loggedInUser: { user: string, role: string } | null = null;

  login(user: string, password: string): boolean {
    const userData = this.users[user];
    if (userData && userData.password === password) {
      this.loggedInUser = { user, role: userData.role };
      return true;
    }
    return false;
  }

  getLoggedInUser(): { user: string, role: string } | null {
    return this.loggedInUser;
  }

  setLoggedInUser(user: string, role: string): void {
    this.loggedInUser = { user, role };
  }

  addGrade(student: string, subject: string, grade: number): void {
    if (!this.grades[student]) {
      this.grades[student] = {};
    }
    this.grades[student][subject] = grade; // Überschreibt vorhandene Note für das Fach
  }

  getGradesForStudent(student: string): { subject: string, grade: number }[] {
    const studentGrades = this.grades[student];
    if (!studentGrades) {
      return [];
    }
    return Object.keys(studentGrades).map(subject => ({
      subject,
      grade: studentGrades[subject]
    }));
  }

  getGradesForStudentAndSubject(student: string, subject: string): { subject: string, grade: number }[] {
    const studentGrades = this.grades[student];
    if (!studentGrades || !studentGrades[subject]) {
      return [];
    }
    return [{ subject, grade: studentGrades[subject] }];
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Model/user.service';
import { Grade } from '../../Model/grade';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  subjects: string[] = ['Mathematik', 'Naturwissenschaften', 'Geschichte', 'Englisch'];
  selectedSubject: string | null = null;
  grades: Grade[] = [];
  warnings: string[] = [];

  loggedInUser: string = ''; // Initialisierung hier

  constructor(private router: Router, private userService: UserService) {
    const loggedInData = this.userService.getLoggedInUser();
    if (loggedInData) {
      this.loggedInUser = loggedInData.user;
    } else {
      // Handle error, maybe redirect to login
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.loadGrades();
    this.loadWarnings();
  }

  selectSubject(subject: string): void {
    this.selectedSubject = subject;
    this.loadGrades();
    this.loadWarnings();
  }

  loadGrades(): void {
    const gradesData = this.selectedSubject
      ? this.userService.getGradesForStudentAndSubject(this.loggedInUser, this.selectedSubject)
      : this.userService.getGradesForStudent(this.loggedInUser);

    // Convert the gradesData to the Grade[] type
    this.grades = gradesData.map(grade => ({
      studentEmail: this.loggedInUser,
      subject: grade.subject,
      grade: grade.grade
    }));
  }

  loadWarnings(): void {
    this.warnings = this.userService.getWarningsForStudent(this.loggedInUser);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}

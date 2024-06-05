// pages/students/students.component.ts
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

  loggedInUser: string;
  loggedInUserSubject: string;

  constructor(private router: Router, private userService: UserService) {
    const loggedInData = this.userService.getLoggedInUser();
    this.loggedInUser = loggedInData.user;
    this.loggedInUserSubject = loggedInData.subject;
  }

  ngOnInit(): void {
    this.loadGrades();
  }

  selectSubject(subject: string): void {
    this.selectedSubject = subject;
    this.loadGrades();
  }

  loadGrades(): void {
    this.grades = this.selectedSubject
      ? this.userService.getGradesForStudentAndSubject(this.loggedInUser, this.selectedSubject)
      : this.userService.getGradesForStudent(this.loggedInUser);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}

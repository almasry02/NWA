// pages/teacher/teacher.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Model/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  classes: string[] = ['5AHITN', '4AHITN', '2AHIT', '1AHIT'];
  students: { [key: string]: string[] } = {
    '5AHITN': ['student1@htl.at'],
    '4AHITN': ['student2@htl.at'],
    '2AHIT': ['student3@htl.at'],
    '1AHIT': ['student4@htl.at']
  };
  subjects: string[] = ['Mathematik', 'Naturwissenschaften', 'Geschichte', 'Englisch'];
  grades: number[] = [1, 2, 3, 4, 5];

  selectedClass: string | null = null;
  selectedStudent: string | null = null;
  selectedSubject: string | null = null;
  selectedGrade: number | null = null;

  notificationMessage: string | null = null;

  loggedInUser: string;

  constructor(private router: Router, private userService: UserService) {
    this.loggedInUser = this.userService.getLoggedInUser().user;
  }

  ngOnInit(): void {}

  selectClass(className: string): void {
    this.selectedClass = className;
    this.selectedStudent = null;
    this.selectedSubject = null;
    this.selectedGrade = null;
    this.notificationMessage = null;
  }

  selectStudent(student: string): void {
    this.selectedStudent = student;
    this.selectedSubject = null;
    this.selectedGrade = null;
    this.notificationMessage = null;
  }

  selectSubject(subject: string): void {
    this.selectedSubject = subject;
    this.selectedGrade = null;
    this.notificationMessage = null;
  }

  selectGrade(grade: number): void {
    this.selectedGrade = grade;
    this.notificationMessage = null;
  }

  addGrade(): void {
    if (this.selectedStudent && this.selectedSubject && this.selectedGrade !== null) {
      this.userService.addGrade(this.selectedStudent, this.selectedSubject, this.selectedGrade);
      this.notificationMessage = `Sie haben dem Schüler ${this.selectedStudent} in ${this.selectedSubject} die Note ${this.selectedGrade} gegeben.`;
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Model/user.service'; // Import UserService

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  classes: string[] = ['4AHITN', '4AHITM', '3AHITN', '3AHITM'];
  students: { [key: string]: string[] } = {
    '4AHITN': ['Max Mustermann', 'Lisa Müller', 'Tom Schmidt'],
    '4AHITM': ['Anna Mayer', 'Paul Wagner', 'Sarah Huber'],
    '3AHITN': ['Markus Meier', 'Sophie Fischer', 'Tobias Weber'],
    '3AHITM': ['Julia Schneider', 'Simon Lehner', 'Elena Schwarz']
  };
  subjects: string[] = ['Mathematik', 'Naturwissenschaften', 'Geschichte', 'Englisch'];
  selectedClass: string | null = null;
  selectedStudent: string | null = null;
  selectedSubject: string | null = null;
  selectedMark: string | null = null;
  loggedInUser: string; // Add loggedInUser variable
  loggedInUserSubject: string; // Add loggedInUserSubject variable
  confirmationMessage: boolean = false; // Add confirmationMessage variable
  submissionSuccess: boolean = false; // Add submissionSuccess variable

  constructor(private router: Router, private userService: UserService) { // Inject UserService
    const loggedInUserInfo = this.userService.getLoggedInUser(); // Get loggedInUser and loggedInUserSubject from UserService
    this.loggedInUser = loggedInUserInfo.user;
    this.loggedInUserSubject = loggedInUserInfo.subject;
  }

  selectClass(className: string): void {
    this.selectedClass = className;
    this.selectedStudent = null;
    this.selectedSubject = null;
    this.selectedMark = null;
  }

  selectStudent(student: string): void {
    this.selectedStudent = student;
    this.selectedSubject = null;
    this.selectedMark = null;
  }

  selectSubject(subject: string): void {
    this.selectedSubject = subject;
    this.confirmationMessage = true; // Show confirmation message after subject selection
  }

  selectMark(mark: string): void {
    this.selectedMark = mark;
  }

  confirmAssignment(): void {
    // Perform assignment logic here
    this.submissionSuccess = true; // Show submission success message after assignment
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}

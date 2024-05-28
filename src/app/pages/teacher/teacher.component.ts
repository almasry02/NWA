import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { UserService } from '../../Model/user.service'; // Import UserService

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
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
  loggedInUser:  string ; // Add loggedInUser variable
  loggedInUserSubject: string; // Add loggedInUserSubject variable

  constructor(private router: Router, private userService: UserService) { // Inject UserService
    const loggedInUserInfo = this.userService.getLoggedInUser(); // Get loggedInUser and loggedInUserSubject from UserService
    this.loggedInUser = loggedInUserInfo.user;
    this.loggedInUserSubject = loggedInUserInfo.subject; }

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

  assignMark(): void {
    // Check if the selected subject is the same as the logged in user's subject
    if (this.selectedSubject !== this.loggedInUserSubject) {
      console.error('You can only assign marks for your own subject.');
      return;
    }

    // Assign the mark (selectedMark) to the selected student for the selected subject
    // You can add the logic to save the mark to a database or send it to a server here
    console.log(`Assigned mark ${this.selectedMark} to ${this.selectedStudent} for ${this.selectedSubject}`);
    // Implement your logic to save the mark
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}

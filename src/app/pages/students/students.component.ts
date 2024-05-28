import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../Model/user.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  subjects: string[] = ['Mathematik', 'Naturwissenschaften', 'Geschichte', 'Englisch'];
  selectedSubject: string | null = null;

  loggedInUser: string; // Add loggedInUser variable
  loggedInUserSubject: string; // Add loggedInUserSubject variable

  constructor(private router: Router, private userService: UserService) { // Inject UserService
    const loggedInUserInfo = this.userService.getLoggedInUser(); // Get loggedInUser and loggedInUserSubject from UserService
    this.loggedInUser = loggedInUserInfo.user;
    this.loggedInUserSubject = loggedInUserInfo.subject;
  }

  ngOnInit(): void {
  }

  viewGrades(subject: string): void {
    this.selectedSubject = subject;
    // Fetch and display grades for the selected subject
    // You can add the logic to fetch grades from a service or API here
  }

  logout(): void {
    // Implement your logout logic here
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}

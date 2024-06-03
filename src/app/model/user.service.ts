// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser: string = '';
  private loggedInUserSubject: string = ''; // Add loggedInUserSubject variable

  setLoggedInUser(user: string, subject: string) { // Update method to accept subject
    this.loggedInUser = user;
    this.loggedInUserSubject = subject; // Set loggedInUserSubject
  }

  getLoggedInUser() {
    return {
      user: this.loggedInUser,
      subject: this.loggedInUserSubject // Return loggedInUserSubject
    };
  }
}

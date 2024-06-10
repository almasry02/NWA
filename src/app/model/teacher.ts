import { Person } from './person';
import {View} from "./view";
import {UserService} from "./user.service";
export class Teacher extends Person {
  constructor( email: String,  password: String,  userType: String, gegenstand: String) {
    super(email, password, userType, '' ,gegenstand);
  }
  addWarning(student: string, warning: string, userService: UserService): void {
    userService.addWarning(student, warning);
  }
}



const Teachers:Teacher[]=[
  new Teacher("teacher1@htl.at","11", 'teacher', 'Netzwerktechnik'),
  new Teacher("teacher2@htl.at","22", 'teacher', 'Naturwissenschaften'),
  new Teacher("teacher3@htl.at","33", 'teacher', 'Geschichte'),
]
export {Teachers};

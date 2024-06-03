import { Person } from './person';
import {View} from "./view";
export class Teacher extends Person {
  constructor( email: String,  password: String,  userType: String, gegenstand: String) {
    super(email, password, userType, '' ,gegenstand);
  }
}



const Teachers:Teacher[]=[
  new Teacher("teacher1@test.at","password2024!", 'teacher', 'Mathematik'),
  new Teacher("teacher2@test.at","password2024!", 'teacher', 'Naturwissenschaften'),
  new Teacher("teacher3@test.at","password2024!", 'teacher', 'Geschichte'),
]
export {Teachers};

import { Person } from './person';
import {View} from "./view";
export class Student extends Person {
  constructor( email: String,  password: String,  userType: String, klasse: String) {
    super(email, password, userType, klasse, '');
  }
}



const Students:Student[]=[
  new Student("student1@test.at","password2024!", 'student','4AHITN'),
  new Student("student2@test.at","password2024!", 'student','4AHITM'),
  new Student("student3@test.at","password2024!", 'student','3AHITN'),
  new Student("student4@test.at","password2024!", 'student','3AHITM')
]
export {Students};

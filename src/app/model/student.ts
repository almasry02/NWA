import { Person } from './person';
import {View} from "./view";
export class Student extends Person {
  constructor( email: String,  password: String,  userType: String, klasse: String) {
    super(email, password, userType, klasse, '');
  }
}



const Students:Student[]=[
  new Student("student1@htl.at","11", 'student','5AHITN'),
  new Student("student2@htl.at","22", 'student','4AHITN'),
  new Student("student3@htl.at","33", 'student','2AHIT'),
  new Student("student4@htl.at","44", 'student','1AHIT')
]
export {Students};

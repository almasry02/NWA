import {Person} from "./person";
export class Students {

  constructor(name:string, fullName:string, email:string, password:string) {
    super(name, fullName, email, password);
  }

  export const STUDENT: Student[]=[
    new Student("Andrew", "Ibrahim", "200003@studierende.htl-donaustadt.at", "1234"),
    new Student("Emil", "Trzebin", "220478@studierende.htl-donaustadt.at", "1234"),
  ]

}

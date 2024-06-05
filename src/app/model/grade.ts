// Model/grade.ts
export class Grade {
  constructor(
    public studentEmail: string,
    public subject: string,
    public grade: number
  ) {}
}

const Grades: Grade[] = [];
export { Grades };

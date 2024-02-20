export abstract class Person {
  static id: number;

  constructor(private vorName:string, private nachName:string, private alter: number) {
    this.vorName = vorName;
    this.nachName = nachName;
    this.alter = alter;
  }

  public getVorName(): string{
    return this.vorName;
  }

  public getNachName(): string{
    return this.nachName;
  }

  public getAlter(): number {
    return this.alter;
  }



}

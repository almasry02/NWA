export abstract class Person {

  static id: number;

  constructor(private name: string, private fullName: string, private _email: string, private password: string) {


    this.name = name;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.setId();
  }

  public getFullName(): string {
    return this.fullName;
  }
  private setId(): void {
    Person.id++;
  }

  public getPassword(): string {
    return this.password;
  }

  public getUrlImage(): string {
    return this.email;
  }
  public getName(): string {
    return this.name;
  }
}

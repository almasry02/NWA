export abstract class Person {
  static id: number;
  constructor(private email: String, private password: String, private userType: String, private klasse: String, private gegenstand: String) {
    this.email = email;
    this.password = password;
    this.userType = userType;
    this.klasse = klasse;
    this.gegenstand = gegenstand;

  }
  public getGegenstand(): String {
    return this.gegenstand;
  }

  public getEmail(): String {
    return this.email;
  }
  public getPassword(): String {
    return this.password;
  }
  public getUserType(): String {
    return this.userType;
  }

  public getKlasse(): String {
    return this.klasse;
  }
}




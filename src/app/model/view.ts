export abstract class View {
  static id: number; //static field [Klassenvariable]
//Constructor with non-static fields [Instanzvariablen]

  constructor(private vname: string, private nname: string, private userType: string, private klasse: string, private warnung: boolean) {
    this.vname = vname;
    this.nname = nname;
    this.userType = userType;
    this.klasse = klasse;
    this.warnung = warnung;
    this.setId();
  }

//Getter-, Setter-Methods
  public getNName(): string {
    return this.nname;
  }

  public getVName(): string {
    return this.vname;
  }

  public getKlasse(): string {
    return this.klasse;
  }

  public getUserType(): string {
    return this.userType;
  }

  private setId() {
    View.id++;
  }

}



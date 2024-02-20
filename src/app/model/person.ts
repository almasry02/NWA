<<<<<<< HEAD
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
=======
export interface Framework {
  title:string,
  caption: string,
  link: string,
  type: string,
  imagePath: string
}
export let FRAMEWORKS: Framework[];
FRAMEWORKS = [
  {
    "title": "Angular",
    "caption": "Angular (also referred to as \"Angular 2+\")[4] is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a
    community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
    "link": "https://angular.io",
    "type": "web-application framework",
    "imagePath": "/assets/logos/angular_logo.svg",
  },
  {
    "title": "Node.js",
    "caption": "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and
    executes JavaScript code outside a web browser.",
    "link": "https://nodejs.org/en",
    "type": "JavaScript runtime environment",
    "imagePath": "/assets/logos/node.js_logo.svg",
  },
  {
    "title": "Typescript",
    "caption": "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is
    designed for the development of large applications and transpiles to JavaScript.[6] Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript,
    but they can fail to type-check for safety reasons.",
    "link": "https://www.typescriptlang.org",
    "type": "Programming language",
    "imagePath": "/assets/logos/typescript_logo.svg",
  },
];
>>>>>>> 522808cf08faf3eb2533ddb680517429c91ff7cd

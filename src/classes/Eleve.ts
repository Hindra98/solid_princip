import Human from "./Human";

class Eleve extends Human {
  id: number = 0;
  name: string = "";
  lastName: string = "";
  age: number = 0;
  style: string = "";
  fonction: string = "";
  points: number = 0;

  constructor(id: number, name: string, lastName: string, age: number, classe: string,
    points: number, style: string = "bg-red-400 font-bold") {
    super();
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.style = style;
    this.fonction = classe;
    this.points = points;
    this.points = points;
  }
  fullName(): string {
    return this.name + " " + this.lastName;
  }
}
export default Eleve;

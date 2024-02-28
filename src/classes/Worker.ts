import Human from "./Human";

class TWorker extends Human {
  id: number = 0;
  name: string = "";
  lastName: string = "";
  age: number = 0;
  style: string = "";
  fonction: string = "";

  constructor(id: number, name: string, lastName: string, age: number, domaine: string, style: string) {
    super();
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.fonction = domaine;
    this.style = style;
  }
  fullName(): string {
    return this.name + " " + this.lastName;
  }
}
export default TWorker;

import Human from "./Human";

class Etudiant extends Human {
  id: number = 0;
  name: string = "";
  lastName: string = "";
  age: number = 0;
  style: string = "";
  fonction: string = "";

  constructor(id: number, name: string, lastName: string, age: number, filiere: string, style: string = "bg-red-500 font-bold") {
    super();
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.style = style;
    this.fonction = filiere;
  }
  fullName(): string {
    return this.name + " " + this.lastName;
  }
}

export default Etudiant;

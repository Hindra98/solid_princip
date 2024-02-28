import OneTypeHumanInterface from "./OneTypeHumanInterface";

class OneHuman implements OneTypeHumanInterface {

    id: number;
    fullName: string;
    age: number;
    fonction: string;
    points: number;
    style: string;

  constructor( id: number, fullName: string, age: number, fonction: string, points: number, style: string) {
      this.id = id,
      this.fullName = fullName,
      this.age = age,
      this.fonction = fonction,
      this.points = points,
      this.style = style
  }

}

export default OneHuman;

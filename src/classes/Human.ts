abstract class Human {
  abstract fullName(): string;

  id: number = 0;
  name: string = "";
  lastName: string = "";
  age: number = 0;
  style: string = "";
  fonction: string = "";
}

export default Human;

interface IPerson {
    name: string;
    lastName: string;
    age?: number;
    gender?: string;
  }

  export class Person implements IPerson {
    name = "";
    lastName = "";
    age?: number;
    gender = "";
  }
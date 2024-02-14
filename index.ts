let firstname: string = "This is my string!";

let age: string | number;

let array: (string | number | boolean)[] = ['string', 100, true];

let tuple: [string, number, boolean] = ['string', 100, true];

let object: {
    string: string;
    number: number;
    boolean: boolean;
}

object = {
    string: 'string',
    number: 100,
    boolean: true
}

interface Interface {
    string: string;
    number: number;
    boolean: boolean;
}

let newObject: Interface = {
    string: 'string',
    number: 100,
    boolean: true
}

function circle(diam: number): string {
    return 'The circumference is ' + Math.PI * diam;
  }

console.log(circle(50));

const circleArrow =(diam: number, optional?: number | string): string => {
    return 'The circumference is ' + Math.PI * diam;
}

class Person {
    constructor(
    public name: string,
    private isCool: boolean,
    protected email: string,
    ) {}
  
    sayHello() {
      return `Hi, my name is ${this.name} and I have ${this.email} pets`;
    }
  }

const person1 = new Person('Name', true, 'hi';

let people: Person[] = [person1];

class Programmer extends Person {
    programmingLanguages: string[];
  
    constructor(
      name: string,
      isCool: boolean,
      email: string,
      pL: string[]
    ) {
      super(name, isCool, email);
      this.programmingLanguages = pL;
    }
  }

  const addID = <T extends {name: string}>(obj: T) => {
    let id = Math.floor(Math.random() * 1000);
  
    return { ...obj, id };
  };
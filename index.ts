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
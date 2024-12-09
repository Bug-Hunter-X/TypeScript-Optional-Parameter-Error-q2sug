function printName(person: { firstName: string; lastName?: string }) {
  console.log(person.firstName + ' ' + person.lastName);
}

const person1 = { firstName: 'John', lastName: 'Doe' };
const person2 = { firstName: 'Jane' };

printName(person1); // Works fine
printName(person2); // Error: Object is possibly 'undefined'
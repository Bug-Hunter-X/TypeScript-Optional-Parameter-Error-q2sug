function printName(person: { firstName: string; lastName?: string }) {
  console.log(person.firstName + ' ' + person.lastName);
}

function printNameSafe(person: { firstName: string; lastName?: string }) {
  console.log(person.firstName + ' ' + (person.lastName ?? ''));
}

const person1 = { firstName: 'John', lastName: 'Doe' };
const person2 = { firstName: 'Jane' };

printNameSafe(person1); // John Doe
printNameSafe(person2); // Jane 

//Using optional chaining (?.)
function printNameOptionalChaining(person: { firstName: string; lastName?: string }) {
  console.log(person.firstName + ' ' + person?.lastName);
}

printNameOptionalChaining(person1); // John Doe
printNameOptionalChaining(person2); // John undefined 
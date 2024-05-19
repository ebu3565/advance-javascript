class person {
  constructor(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}

const heroPerson = new person('Hero', 'Balam', 2000);
console.log(heroPerson);

const friendlyPerson = new person('Friendly', 'Sakib', 2300);
console.log(friendlyPerson);


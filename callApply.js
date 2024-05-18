const normalPerson = {
  firstName: 'Rahim',
  lastname: 'Uddin',
  salary: 15000,
  getFullName: function(){
    console.log(this.firstName, this.lastname);
  },
  chargeBill: function(amount, tips, tax){
    console.log(this);
    this.salary = this.salary - amount - tips - tax;
    return this.salary;
  }
}
// normalPerson.chargeBill(1500);
// normalPerson.chargeBill(20);
// console.log(normalPerson.salary);
// console.log(normalPerson.firstName);

const heroPerson = {
  firstName: 'balam',
  lastname: 'Uddin',
  salary: 15000
}

const friendlyPerson = {
  firstName: 'Golam',
  lastname: 'Uddin',
  salary: 25000
}
// normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1000);
// friendlyChargeBill(1000);

// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);
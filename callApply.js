const normalPerson = {
  firstName: 'Rahim',
  lastname: 'Uddin',
  salary: 15000,
  getFullName: function(){
    console.log(this.firstName, this.lastname);
  },
  chargeBill: function(amount){
    console.log(this);
    this.salary = this.salary - amount;
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
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1000);
friendlyChargeBill(1000);

console.log(friendlyPerson.salary);

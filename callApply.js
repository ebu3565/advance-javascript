const normalPerson = {
  firstName: 'Rahim',
  lastname: 'Uddin',
  salary: 15000,
  getFullName: function(){
    console.log(this.firstName, this.lastname);
  },
  chargeBill: function(amount){
    this.salary = this.salary - amount;
    return this.salary;
  }
}
normalPerson.chargeBill(1500);
normalPerson.chargeBill(20);
console.log(normalPerson.salary);
// console.log(normalPerson.firstName);
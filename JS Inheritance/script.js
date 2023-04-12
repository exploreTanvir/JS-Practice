alert("Go to your browser console :)");

class person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  gretting() {
    return `Hello ${this.firstName} ${this.lastName} !`;
  }
}

class customer extends person {
  constructor(fname, lname, phone, member) {
    super(fname, lname);
    this.phone = phone;
    this.member = member;
  }
}

let person1 = new person("tanvir", "hossen");
console.log(person1.gretting());

let customer1 = new customer("tanvir", "Hossen", "01312491010", "3");
console.log(customer1);
console.log(customer1.gretting());

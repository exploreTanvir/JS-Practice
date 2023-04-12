// object Literals

const person = {
  firstName: "Tanvir",
  lastName: "Hossen",
  DOB: 12 - 11 - 2002,
  age: 20,
  email: "tanvirhossen853@gmail.com",
  address: { city: "jhenaidah", village: "kala" },
  color: ["black", "red", "white", "blue"],
};

// array
const people = [
  { name: "tanvir", Age: 20 },
  { name: "raju", Age: 15 },
  { name: "rohim", Age: 30 },
];
for (i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// output
value = person;
value = person["firstName"];
value = person.age;
value = person.address.city;

console.log(value);

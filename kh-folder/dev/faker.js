const { faker } = require("@faker-js/faker");

const frist = faker.person.firstName();
const lastname = faker.person.lastName();
const fullname = faker.person.fullName();
const email = faker.internet.email();
const phone = faker.phone.number();
const address = faker.location.streetAddress(); 

console.log({ frist, lastname, fullname, email, phone, address });
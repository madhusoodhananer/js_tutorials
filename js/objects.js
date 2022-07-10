let userData = {
    name: "John",
    age: 30,
    isMarried: false,
    contact: {
        phone: "123-456-789",
        email: "john@gmail.com",
        address: "123 Main St"
    },
    work: {
        company: "Google",
        position: "Software Engineer"
    },
    hobbies: ["Sports", "Cooking"],
    cars: ['BMW', 'Audi', 'Mercedes', 'Maruti suzuki', 'TATA'],
    parents: {
        mother: "Jane",
        father: "John Doe"
    }
}

console.log(userData.name);
console.log(userData.age);
console.log(userData.isMarried);
console.log(userData.contact);
console.log(userData.contact.phone);
console.log(userData.cars);
console.log(userData.cars[1]);
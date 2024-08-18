const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const PORT = 8085;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}/`)
)
app.get('/', (req, res) => {
    res.status(200).send({ message: "Welcome to node-fakerjs project" });
});
app.get('/users', (req, res) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const mockData = {
        firstName,
        lastName,
        email: faker.internet.email({ firstName, lastName }),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        zipcode: faker.location.zipCode("######")
    };
    res.status(200).send({ data: mockData });
});

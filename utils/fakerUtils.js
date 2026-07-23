const { faker } = require('@faker-js/faker')

module.exports = {

    getFirstName() {
        return faker.person.firstName();

    },

    getLastName() {
        return faker.person.lastName();

    },
    
    getPostalCode() {
        return faker.location.zipCode()

    }


}
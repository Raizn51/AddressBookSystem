/*
UC1: Ability to create an Address Book Contact with first and last names, address, city, state, zip, phone number, and email.
*/

class Contact {
    #firstName;
    #lastName;
    #address;
    #city;
    #state;
    #zip;
    #phoneNumber;
    #email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#address = address;
        this.#city = city;
        this.#state = state;
        this.#zip = zip;
        this.#phoneNumber = phoneNumber;
        this.#email = email;
    }

    displayContact() {
        console.log(`Name: ${this.#firstName} ${this.#lastName}`);
        console.log(`Address: ${this.#address}, ${this.#city}, ${this.#state} - ${this.#zip}`);
        console.log(`Phone: ${this.#phoneNumber}, Email: ${this.#email}`);
    }
}

let contact1 = new Contact("John", "Doe", "123 Street", "New York", "NY", "10001", "9876543210", "john.doe@example.com");
contact1.displayContact();

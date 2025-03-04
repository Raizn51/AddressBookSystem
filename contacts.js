/*
UC2: Ability to ensure valid contacts are added.
- First Name and Last Name should start with a capital letter and have a minimum of 3 characters.
- Address, City, and State should have a minimum of 4 characters.
- Zip, Phone Number, and Email should be validated using regex.
- Throw an error if validation fails.
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
        if (!this.#validateName(firstName) || !this.#validateName(lastName)) {
            throw new Error("First Name and Last Name must start with a capital letter and have at least 3 characters.");
        }
        if (!this.#validateAddress(address) || !this.#validateAddress(city) || !this.#validateAddress(state)) {
            throw new Error("Address, City, and State must have at least 4 characters.");
        }
        if (!this.#validateZip(zip)) {
            throw new Error("Invalid Zip Code.");
        }
        if (!this.#validatePhone(phoneNumber)) {
            throw new Error("Invalid Phone Number.");
        }
        if (!this.#validateEmail(email)) {
            throw new Error("Invalid Email Address.");
        }

        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#address = address;
        this.#city = city;
        this.#state = state;
        this.#zip = zip;
        this.#phoneNumber = phoneNumber;
        this.#email = email;
    }

    #validateName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    #validateAddress(address) {
        return /^[a-zA-Z0-9\s]{4,}$/.test(address);
    }

    #validateZip(zip) {
        return /^[1-9][0-9]{5}$/.test(zip);
    }

    #validatePhone(phone) {
        return /^[7-9][0-9]{9}$/.test(phone);
    }

    #validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    displayContact() {
        console.log(`Name: ${this.#firstName} ${this.#lastName}`);
        console.log(`Address: ${this.#address}, ${this.#city}, ${this.#state} - ${this.#zip}`);
        console.log(`Phone: ${this.#phoneNumber}, Email: ${this.#email}`);
    }
}


try {
    let contact2 = new Contact("John", "Doe", "123 Street", "New York", "Bhopal", "100001", "9876543210", "john.doe@example.com");
    contact2.displayContact();
} catch (error) {
    console.error(error.message);
}

console.error(":::::::::::::::::::::::::::::::::::::");


try {
    let contact2 = new Contact("John", "Doe", "123 Street", "New York", "NY", "100001", "9876543210", "john.doe@example.com");
    contact2.displayContact();
} catch (error) {
    console.error(error.message);
}
console.error(":::::::::::::::::::::::::::::::::::::");


try {
    let invalidContact = new Contact("jo", "doe", "12 St", "NY", "NY", "1000", "12345678", "john.doe@com");
} catch (error) {
    console.error(error.message);
}


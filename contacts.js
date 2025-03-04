/*
UC3: Ability to create a New Address Book array and add new Contacts to it
- Create an AddressBook class to store multiple contacts.
- Each contact should have firstName, lastName, address, city, state, zip, phoneNumber, and email.
- Use private fields to ensure encapsulation.
- Validate input data using regular expressions.
- Provide methods to add contacts to the AddressBook.
- Throw an error if invalid data is entered.
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
        // Validate all inputs before assigning
        this.#validateFirstName(firstName);
        this.#validateLastName(lastName);
        this.#validateAddress(address);
        this.#validateCity(city);
        this.#validateState(state);
        this.#validateZip(zip);
        this.#validatePhoneNumber(phoneNumber);
        this.#validateEmail(email);

        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#address = address;
        this.#city = city;
        this.#state = state;
        this.#zip = zip;
        this.#phoneNumber = phoneNumber;
        this.#email = email;
    }

    // Validation Methods
    #validateFirstName(name) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(name)) {
            throw new Error("Invalid First Name! Must start with a capital letter and have at least 3 characters.");
        }
    }

    #validateLastName(name) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(name)) {
            throw new Error("Invalid Last Name! Must start with a capital letter and have at least 3 characters.");
        }
    }

    #validateAddress(address) {
        if (!/^[a-zA-Z0-9\s]{4,}$/.test(address)) {
            throw new Error("Invalid Address! Must have at least 4 characters.");
        }
    }

    #validateCity(city) {
        if (!/^[a-zA-Z\s]{4,}$/.test(city)) {
            throw new Error("Invalid City! Must have at least 4 characters.");
        }
    }

    #validateState(state) {
        if (!/^[a-zA-Z\s]{4,}$/.test(state)) {
            throw new Error("Invalid State! Must have at least 4 characters.");
        }
    }

    #validateZip(zip) {
        if (!/^\d{6}$/.test(zip)) {
            throw new Error("Invalid Zip! Must be a 6-digit number.");
        }
    }

    #validatePhoneNumber(phone) {
        if (!/^\d{10}$/.test(phone)) {
            throw new Error("Invalid Phone Number! Must be a 10-digit number.");
        }
    }

    #validateEmail(email) {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error("Invalid Email! Must be in a valid format (e.g., abc@domain.com).");
        }
    }

    getDetails() {
        return `        Name: ${this.#firstName} ${this.#lastName}, 
        Address: ${this.#address}, ${this.#city}, ${this.#state}, 
        Zip: ${this.#zip}, 
        Phone: ${this.#phoneNumber}, Email: ${this.#email} 
        ::::::::::::::::::::::::::::::::::::::::`;
    }
}

class AddressBook {
    #contacts = [];

    addContact(contact) {
        this.#contacts.push(contact);
    }

    displayContacts() {
        if (this.#contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("Address Book Contacts:");
            this.#contacts.forEach(contact => console.log(contact.getDetails()));
            
        }
       
    }
}


try {
    let addressBook = new AddressBook();
    let contact1 = new Contact("John", "Doe", "123 Main St", "New York", "Bhopal", "100001", "1234567890", "john.doe@example.com");
    let contact2 = new Contact("Alice", "Smith", "456 Elm St", "Los Angeles", "Canda", "900002", "9876543210", "alice.smith@example.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    addressBook.displayContacts();
} 
catch (error) 
{
    console.error(error.message);
}


try 
{
    let invalidContact = new Contact("jo", "Doe", "12", "NY", "NY", "12345", "9876543", "john.doe@");
} catch (error) {
    console.error(error.message);
}

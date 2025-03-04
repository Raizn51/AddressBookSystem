/*
UC5: Ability to find a person with name delete it from the array
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

    getFirstName() { return this.#firstName; }
    getLastName() { return this.#lastName; }

    updateContact(updatedFields)
    {
        for (const key in updatedFields) 
            {
            switch (key) 
            {
                case "firstName":
                    this.#validateFirstName(updatedFields[key]);
                    this.#firstName = updatedFields[key];
                    break;
                case "lastName":
                    this.#validateLastName(updatedFields[key]);
                    this.#lastName = updatedFields[key];
                    break;
                case "address":
                    this.#validateAddress(updatedFields[key]);
                    this.#address = updatedFields[key];
                    break;
                case "city":
                    this.#validateCity(updatedFields[key]);
                    this.#city = updatedFields[key];
                    break;
                case "state":
                    this.#validateState(updatedFields[key]);
                    this.#state = updatedFields[key];
                    break;
                case "zip":
                    this.#validateZip(updatedFields[key]);
                    this.#zip = updatedFields[key];
                    break;
                case "phoneNumber":
                    this.#validatePhoneNumber(updatedFields[key]);
                    this.#phoneNumber = updatedFields[key];
                    break;
                case "email":
                    this.#validateEmail(updatedFields[key]);
                    this.#email = updatedFields[key];
                    break;
                default:
                    console.log("Cannot update field: ${key}");
            }
        }
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
    
    findContact(firstName, lastName) {
        return this.#contacts.find(contact => contact.getFirstName() === firstName && contact.getLastName() === lastName);
    }

    // 🔹 UC4: Edit Contact by Name
    editContact(firstName, lastName, updatedFields) {
        let contact = this.findContact(firstName, lastName);
        if (contact) {
            contact.updateContact(updatedFields);
            console.log(`Contact ${firstName} ${lastName} updated successfully.`);
        } else {
            console.log(`Contact ${firstName} ${lastName} not found.`);
        }
    }

    deleteContact(firstName, lastName) {
        const index = this.#contacts.findIndex(contact => 
            contact.getFirstName() === firstName && contact.getLastName() === lastName
        );
    
        if (index !== -1) {
            this.#contacts.splice(index, 1);
            console.log(`Contact ${firstName} ${lastName} deleted successfully.`);
        } else {
            console.log(`Contact ${firstName} ${lastName} not found.`);
        }
    }

    getContactCount() {
        return this.#contacts.reduce(count => count + 1, 0);
    }
    
}

let addressBook = new AddressBook();

try {
    
    let contact1 = new Contact("John", "Doe", "123 Main St", "New York", "Bhopal", "100001", "1234567890", "john.doe@example.com");
    let contact2 = new Contact("Alice", "Smith", "456 Elm St", "Los Angeles", "Canda", "900002", "9876543210", "alice.smith@example.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    addressBook.displayContacts();
    console.log("Number of Contacts:", addressBook.getContactCount());
} 
catch (error) 
{
    console.error(error.message);
}


try {
    addressBook.editContact("John", "Doe", { address: "789 Park Ave", city: "Chicago" });

    addressBook.displayContacts();

} 
catch (error) 
{
    console.error(error.message);
}

try {
    addressBook.deleteContact("Alice", "Smith");

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



console.log("Number of Contacts:", addressBook.getContactCount());
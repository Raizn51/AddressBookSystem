export class Contact {
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
        ------------------------------------`;
    }

    getFirstName() { return this.#firstName; }
    getLastName() { return this.#lastName; }
    getCity() { return this.#city; }
    getState() { return this.#state; }
    getZip() { return this.#zip; }



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

    toString() {
        return `🔹 Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, Zip: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
    

}

import { Contact } from './Contact.js';

export class AddressBook {
    #contacts = [];

    addContact(contact) {
        let duplicateExists = this.#contacts.find(c => 
            c.getFirstName() === contact.getFirstName() && c.getLastName() === contact.getLastName()
        );

        if (duplicateExists) {
            console.log("Duplicate Contact Found! Cannot add:", contact.getFirstName(), contact.getLastName());
        } else {
            this.#contacts.push(contact);
            console.log("Contact Added Successfully:", contact.getFirstName(), contact.getLastName());
        }
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

    findByCity(city) {
        let people = this.#contacts.filter(contact => contact.getCity() === city);
        if (people.length === 0) {
            console.log(`No contacts found in ${city}.`);
        } else {
            console.log(`Contacts in ${city}:`);
            people.forEach(contact => console.log(contact.getDetails()));
        }
    }

    findByState(state) {
        let people = this.#contacts.filter(contact => contact.getState() === state);
        if (people.length === 0) {
            console.log(`No contacts found in ${state}.`);
        } else {
            console.log(`Contacts in ${state}:`);
            people.forEach(contact => console.log(contact.getDetails()));
        }
    }


    viewByCity() 
    {
        if (this.#contacts.length === 0) {
            console.log("Address Book is empty.");
            return;
        }
        
        let cityMap = new Map();
        
        this.#contacts.forEach(contact => {
            let city = contact.getCity();
            if (!cityMap.has(city)) {
                cityMap.set(city, []);
            }
            cityMap.get(city).push(contact.getDetails());
        });

        console.log("🔹 Persons Grouped by City:");
        cityMap.forEach((contacts, city) => {
            console.log(`${city}:`);
            contacts.forEach(contact => console.log(contact));
            console.log("------------------------------------");
        });
    }

    viewByState() {
        if (this.#contacts.length === 0) {
            console.log("Address Book is empty.");
            return;
        }
        
        let stateMap = new Map();
        
        this.#contacts.forEach(contact => {
            let state = contact.getState();
            if (!stateMap.has(state)) {
                stateMap.set(state, []);
            }
            stateMap.get(state).push(contact.getDetails());
        });

        console.log("🔹 Persons Grouped by State:");
        stateMap.forEach((contacts, state) => {
            console.log(`${state}:`);
            contacts.forEach(contact => console.log(contact));
            console.log("------------------------------------");
        });
    }


    countByCity() {
        let cityCount = this.#contacts.reduce((countMap, contact) => {
            countMap[contact.getCity()] = (countMap[contact.getCity()] || 0) + 1;
            return countMap;
        }, {});

        console.log("\n📊 Count of Contacts by Each City:", cityCount);
        return cityCount;
    }

   
    countByState() {
        let stateCount = this.#contacts.reduce((countMap, contact) => {
            countMap[contact.getState()] = (countMap[contact.getState()] || 0) + 1;
            return countMap;
        }, {});

        console.log("\n📊 Count of Contacts by Each State:", stateCount);
        return stateCount;
    }
}
/*
UC9: Ability to view Persons by City or State
*/

import { AddressBook } from './AddressBook.js';
import { Contact } from './Contact.js';

let addressBook = new AddressBook();

try {
    
        let contact1 = new Contact("Amit", "Sharma", "101 MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "amit.sharma@example.com");
        let contact2 = new Contact("Neha", "Verma", "202 Park Street", "Delhi", "Delhi", "110002", "8765432109", "neha.verma@example.com");
        let contact3 = new Contact("Rahul", "Singh", "303 Green Valley", "Bangalore", "Karnataka", "560003", "7654321098", "rahul.singh@example.com");
        let contact4 = new Contact("Priya", "Gupta", "404 Lotus Tower", "Mumbai", "Maharashtra", "400004", "6543210987", "priya.gupta@example.com");
        let contact5 = new Contact("Vikas", "Yadav", "505 Silver Oak", "Kolkata", "West Bengal", "700005", "5432109876", "vikas.yadav@example.com");
        let contact6 = new Contact("Pooja", "Reddy", "606 Gachibowli", "Hyderabad", "Telangana", "500006", "4321098765", "pooja.reddy@example.com");
        let contact7 = new Contact("Anil", "Kumar", "707 JP Nagar", "Bangalore", "Karnataka", "560007", "3210987654", "anil.kumar@example.com");
        let contact8 = new Contact("Swati", "Mishra", "808 Banjara Hills", "Hyderabad", "Telangana", "500008", "2109876543", "swati.mishra@example.com");
        let contact9 = new Contact("Rohan", "Das", "909 Esplanade", "Kolkata", "West Bengal", "700009", "1098765432", "rohan.das@example.com");
        let contact10 = new Contact("Deepa", "Joshi", "1010 Indira Nagar", "Delhi", "Delhi", "110010", "9988776655", "deepa.joshi@example.com");
    
        addressBook.addContact(contact1);
        addressBook.addContact(contact2);
        addressBook.addContact(contact3);
        addressBook.addContact(contact4);
        addressBook.addContact(contact5);
        addressBook.addContact(contact6);
        addressBook.addContact(contact7);
        addressBook.addContact(contact8);
        addressBook.addContact(contact9);
        addressBook.addContact(contact10);
    
    
    console.log("Number of Contacts:", addressBook.getContactCount());
} 
catch (error) 
{
    console.error(error.message);
}


try {
    addressBook.editContact("Deepa", "Joshi", { zip: "504933"});

    addressBook.displayContacts();

} 
catch (error) 
{
    console.error(error.message);
}


addressBook.findByCity('Mumbai');

addressBook.findByState('Maharashtra');

try {
    addressBook.deleteContact("Rohan", "Das");

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

addressBook.viewByCity();
addressBook.viewByState();
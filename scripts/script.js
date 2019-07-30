"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }

//array.splice to add or remove specific items from an array.
//const drinks = ['tea', 'coffee', 'soda', 'water']
//drinks.splice(2, 1, 'pop') - will start at index two and remove soda.

  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }

  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }
  }
}
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.add("Max", "maxtilk@gmail.com", "734-777-7777", "Brother");
addressBook.add("Mom", "ljlanesthesia@yahoo.com", "734-666-6666", "Mother");
addressBook.delete("Mom");
addressBook.print();


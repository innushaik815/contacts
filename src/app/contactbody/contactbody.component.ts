import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Contact } from '../module/contact';
import { CONTACTS } from '../module/contactList';
@Component({
  selector: 'app-contactbody',
  templateUrl: './contactbody.component.html',
  styleUrls: ['./contactbody.component.css']
})
export class ContactbodyComponent {
  contact:Contact[]= CONTACTS;
  selectedContact: Contact | undefined;

  displayContact(contact: Contact) {
    this.selectedContact = contact;
  }
  getFirstCharacter(firstName: any){
    return firstName.charAt(0)
  }



}

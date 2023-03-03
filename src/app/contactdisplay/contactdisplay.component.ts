import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../module/contact';
@Component({
  selector: 'app-contactdisplay',
  templateUrl: './contactdisplay.component.html',
  styleUrls: ['./contactdisplay.component.css']
})
export class ContactdisplayComponent {
  @Input() selectedContact: Contact | undefined;
}

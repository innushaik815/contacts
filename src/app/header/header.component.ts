import { Component } from '@angular/core';
import { CONTACTS } from '../module/contactList';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // title='Contact Gallery'
  contacts = CONTACTS;
  searchText:string="";
  isSearching = false;
  search()
  {
    this.contacts=CONTACTS;
    this.contacts=this.contacts.filter(f=>f.email?.startsWith(this.searchText.toLowerCase()))
    this.isSearching = true;

  }
  reset()
  {
    this.contacts=CONTACTS;
    this.searchText="";
    this.isSearching = false;
  }
  toggleSearch() {
    if (this.isSearching) {
      this.reset();
    } else {
      this.search();
    }
  }



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  btnClassList = "btn btn--primary";
  path = "";
  btn_text= "Neues Produkt";

  ngOnInit() {
    // if this path is on detail page, then the button changes
    this.path = ""; 

    if(this.path == "detail") {
      this.btn_text = "Zurück zur Übersicht";
    }
  }
}
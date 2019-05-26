import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-nopagefoud',
  templateUrl: './nopagefoud.component.html',
  styles: []
})
export class NopagefoudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}

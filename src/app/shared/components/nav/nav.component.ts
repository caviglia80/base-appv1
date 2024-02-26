import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public sidenavOpened = true;
  public icono: any = '';
  public username: string = '';
  public rolName: string = '';

  constructor(
  ) {
  }

  async ngOnInit() {
  }


  public toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}





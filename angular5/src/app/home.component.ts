import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public users;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._homeService.getUsers().subscribe(
      data => { this.users = data},
      err => console.error(err),
      () => console.log('done loading users')
    );
  }
}

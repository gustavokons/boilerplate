import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public users;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._appService.getUsers().subscribe(
      data => { this.users = data},
      err => console.error(err),
      () => console.log('done loading users')
    );
  }
}

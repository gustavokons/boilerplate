import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: './about.component.html'
})
export class AboutComponent {
  public posts;
  show: boolean;

  constructor(private _appService: AppService) {
    this.show = false;
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._appService.getPosts().subscribe(
      data => { this.posts = data},
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }

  toggleShow() {
    console.log('toggle');
    this.show = !this.show;
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'rd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() theme: string;
  title: string;

  constructor() {
    this.title = 'Click over here';
  }
}

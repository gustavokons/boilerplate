import { Component, Input } from '@angular/core';

@Component({
  selector: 'cta',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() col: string;

  constructor() {
    this.theme = 'Another value';
  }
}

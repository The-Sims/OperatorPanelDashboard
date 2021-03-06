import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent {
  @Input() message: string;
  @Input() title: string;
  constructor() { }

}

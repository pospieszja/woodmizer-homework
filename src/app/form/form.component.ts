import { Component, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() person !: Person;
}

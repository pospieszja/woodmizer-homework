import { Component, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() person !: Person;
}

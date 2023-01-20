import { Component } from '@angular/core';
import { Person } from '../app/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person:Person = {name: 'Jacek', lastName: 'Pospieszyński', age: 37, gender: 'Male'};
}

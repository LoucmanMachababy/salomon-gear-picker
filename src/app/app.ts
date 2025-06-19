import { Component } from '@angular/core';
import { Questionnaire } from './components/questionnaire/questionnaire';

@Component({
  selector: 'app-root',
  imports: [Questionnaire],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'salomon-gear-picker';
}

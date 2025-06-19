import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Questionnaire } from './components/questionnaire/questionnaire';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Questionnaire],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Salomon Gear Picker';
}

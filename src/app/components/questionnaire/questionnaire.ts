import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GEAR_LIST, Gear } from '../../gear-data';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionnaire.html',
  styleUrl: './questionnaire.scss'
})
export class Questionnaire {
  step = 0;
  answers = {
    activity: '' as '' | 'Trail' | 'Ski' | 'Randonnée',
    season: '' as '' | 'Été' | 'Hiver',
    level: '' as '' | 'Débutant' | 'Intermédiaire' | 'Expert',
    terrain: '' as '' | 'Rocheux' | 'Neige' | 'Forêt'
  };
  recommendedGear: Gear | null = null;

  questions = [
    {
      label: 'Quelle est votre activité ?',
      key: 'activity',
      options: ['Trail', 'Ski', 'Randonnée']
    },
    {
      label: 'Quelle saison ?',
      key: 'season',
      options: ['Été', 'Hiver']
    },
    {
      label: 'Votre niveau ?',
      key: 'level',
      options: ['Débutant', 'Intermédiaire', 'Expert']
    },
    {
      label: 'Type de terrain ?',
      key: 'terrain',
      options: ['Rocheux', 'Neige', 'Forêt']
    }
  ];

  selectOption(option: string) {
    const key = this.questions[this.step].key as keyof typeof this.answers;
    this.answers[key] = option as any;
    if (this.step < this.questions.length - 1) {
      this.step++;
    } else {
      this.recommend();
    }
  }

  recommend() {
    if (this.answers.activity && this.answers.season && this.answers.level && this.answers.terrain) {
      this.recommendedGear = GEAR_LIST.find(g =>
        g.activity === this.answers.activity &&
        g.season === this.answers.season &&
        g.level === this.answers.level &&
        g.terrain === this.answers.terrain
      ) || null;
    }
  }

  restart() {
    this.step = 0;
    this.answers = {
      activity: '',
      season: '',
      level: '',
      terrain: ''
    };
    this.recommendedGear = null;
  }
}

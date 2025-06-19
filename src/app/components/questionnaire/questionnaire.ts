import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Gear {
  name: string;
  activity: 'Trail' | 'Ski' | 'Randonnée';
  season: 'Été' | 'Hiver';
  level: 'Débutant' | 'Intermédiaire' | 'Expert';
  terrain: 'Rocheux' | 'Neige' | 'Forêt';
  image: string;
  description: string;
}

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
      label: 'Quel est votre niveau ?',
      key: 'level',
      options: ['Débutant', 'Intermédiaire', 'Expert']
    },
    {
      label: 'Sur quel terrain pratiquez-vous ?',
      key: 'terrain',
      options: ['Rocheux', 'Neige', 'Forêt']
    }
  ];

  gearList: Gear[] = [
    {
      name: 'S/LAB PHANTASM',
      activity: 'Trail',
      season: 'Été',
      level: 'Expert',
      terrain: 'Rocheux',
      image: 'assets/slab-phantasm.jpg',
      description: 'Chaussure de trail running ultra-légère pour la compétition'
    },
    {
      name: 'CROSS HIKE MID GTX',
      activity: 'Randonnée',
      season: 'Été',
      level: 'Intermédiaire',
      terrain: 'Forêt',
      image: 'assets/cross-hike.jpg',
      description: 'Chaussure de randonnée polyvalente et imperméable'
    },
    {
      name: 'S/PRO ALPHA 120',
      activity: 'Ski',
      season: 'Hiver',
      level: 'Expert',
      terrain: 'Neige',
      image: 'assets/spro-alpha.jpg',
      description: 'Chaussure de ski haute performance pour le tout-terrain'
    }
  ];

  selectAnswer(answer: string) {
    const currentQuestion = this.questions[this.step];
    this.answers[currentQuestion.key as keyof typeof this.answers] = answer as any;
    
    if (this.step < this.questions.length - 1) {
      this.step++;
    } else {
      this.findRecommendation();
    }
  }

  findRecommendation() {
    this.recommendedGear = this.gearList.find(gear => 
      gear.activity === this.answers.activity &&
      gear.season === this.answers.season &&
      gear.level === this.answers.level &&
      gear.terrain === this.answers.terrain
    ) || null;
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
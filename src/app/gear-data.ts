export interface Gear {
  activity: 'Trail' | 'Ski' | 'Randonnée';
  season: 'Été' | 'Hiver';
  level: 'Débutant' | 'Intermédiaire' | 'Expert';
  terrain: 'Rocheux' | 'Neige' | 'Forêt';
  name: string;
  image: string;
  description: string;
}

export const GEAR_LIST: Gear[] = [
  {
    activity: 'Trail',
    season: 'Été',
    level: 'Débutant',
    terrain: 'Forêt',
    name: 'Salomon Sense Ride 5',
    image: 'https://i.imgur.com/YqH8Tgl.png',
    description: 'Chaussure de trail polyvalente idéale pour les sentiers forestiers et les débutants.'
  },
  {
    activity: 'Ski',
    season: 'Hiver',
    level: 'Expert',
    terrain: 'Neige',
    name: 'Salomon S/Max 12',
    image: 'https://i.imgur.com/2X8wXjP.png',
    description: 'Ski haute performance pour skieurs experts sur pistes enneigées.'
  },
  {
    activity: 'Randonnée',
    season: 'Été',
    level: 'Intermédiaire',
    terrain: 'Rocheux',
    name: 'Salomon X Ultra 4 Mid GTX',
    image: 'https://i.imgur.com/QZwlcks.png',
    description: 'Chaussure de randonnée robuste pour les sentiers rocheux en été.'
  },
  {
    activity: 'Trail',
    season: 'Hiver',
    level: 'Expert',
    terrain: 'Neige',
    name: 'Salomon Snowcross 2',
    image: 'https://i.imgur.com/L5kYDPN.png',
    description: 'Chaussure de trail hivernale avec crampons pour la course sur neige.'
  },
  {
    activity: 'Randonnée',
    season: 'Hiver',
    level: 'Débutant',
    terrain: 'Neige',
    name: 'Salomon Quest Winter GTX',
    image: 'https://i.imgur.com/nWzk8Dw.png',
    description: 'Botte de randonnée chaude et confortable pour les débutants en hiver.'
  },
  {
    activity: 'Ski',
    season: 'Hiver',
    level: 'Débutant',
    terrain: 'Neige',
    name: 'Salomon E Force Sport',
    image: 'https://i.imgur.com/VmxqG5R.png',
    description: 'Ski facile et stable pour débuter sur les pistes.'
  },
  {
    activity: 'Trail',
    season: 'Été',
    level: 'Expert',
    terrain: 'Rocheux',
    name: 'Salomon S/Lab Ultra 3',
    image: 'https://i.imgur.com/K9H8Z6M.png',
    description: 'Chaussure de trail technique pour les experts sur terrain accidenté.'
  },
  {
    activity: 'Randonnée',
    season: 'Été',
    level: 'Expert',
    terrain: 'Forêt',
    name: 'Salomon Quest Element GTX',
    image: 'https://i.imgur.com/1XpD2vL.png',
    description: 'Chaussure de randonnée légère et respirante pour les longues randonnées en forêt.'
  }
];

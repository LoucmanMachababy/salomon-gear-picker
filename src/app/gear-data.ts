export interface Gear {
  name: string;
  activity: 'Trail' | 'Ski' | 'Randonnée';
  season: 'Été' | 'Hiver';
  level: 'Débutant' | 'Intermédiaire' | 'Expert';
  terrain: 'Rocheux' | 'Neige' | 'Forêt';
  image: string;
  description: string;
}

export const GEAR_LIST: Gear[] = [
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
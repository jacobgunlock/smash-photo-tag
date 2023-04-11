const characterLocation = [
  {
    name: 'Mario',
    X: 48,
    Y: 63,
  },
  {
    name: 'Luigi',
    X: 70,
    Y: 61,
  },
  {
    name: 'Peach',
    X: 64,
    Y: 36,
  },
  {
    name: 'Bowser',
    X: 92,
    Y: 8,
  },
  {
    name: 'Dr. Mario',
    X: 75,
    Y: 97,
  },
  {
    name: 'Rosalina & Luma',
    X: 25,
    Y: 36,
  },
  {
    name: 'Bowser Jr.',
    X: 5,
    Y: 6,
  },
  {
    name: 'Yoshi',
    X: 34,
    Y: 39,
  },
  {
    name: 'Donkey Kong',
    X: 60,
    Y: 62,
  },
  {
    name: 'Diddy Kong',
    X: 94,
    Y: 46,
  },
  {
    name: 'Link',
    X: 39,
    Y: 60,
  },
  {
    name: 'Zelda',
    X: 61,
    Y: 6,
  },
  {
    name: 'Sheik',
    X: 76,
    Y: 66,
  },
  {
    name: 'Ganondorf',
    X: 41,
    Y: 33,
  },
  {
    name: 'Young Link',
    X: 25,
    Y: 47,
  },
  {
    name: 'Toon Link',
    X: 37,
    Y: 95,
  },
  {
    name: 'Samus',
    X: 69,
    Y: 52,
  },
  {
    name: 'Zero Suit Samus',
    X: 55,
    Y: 84,
  },
  {
    name: 'Kirby',
    X: 61,
    Y: 44,
  },
  {
    name: 'Meta Knight',
    X: 95,
    Y: 39,
  },
  {
    name: 'King Dedede',
    X: 8,
    Y: 24,
  },
  {
    name: 'Fox',
    X: 46,
    Y: 42,
  },
  {
    name: 'Falco',
    X: 84,
    Y: 49,
  },
  {
    name: 'Wolf',
    X: 84,
    Y: 82,
  },
  {
    name: 'Pikachu',
    X: 28,
    Y: 60,
  },
  {
    name: 'Jigglypuff',
    X: 47,
    Y: 73,
  },
  {
    name: 'Mewtwo',
    X: 7,
    Y: 77,
  },
  {
    name: 'Pichu',
    X: 95,
    Y: 62,
  },
  {
    name: 'The Pokemon Trainer',
    X: 56,
    Y: 21,
  },
  {
    name: 'Squirtle',
    X: 63,
    Y: 23,
  },
  {
    name: 'Ivysaur',
    X: 56,
    Y: 27,
  },
  {
    name: 'Charizard',
    X: 48,
    Y: 19,
  },
  {
    name: 'Lucario',
    X: 19,
    Y: 29,
  },
  {
    name: 'Greninja',
    X: 87,
    Y: 15,
  },
  {
    name: 'Captain Falcon',
    X: 55,
    Y: 36,
  },
  {
    name: 'Ness',
    X: 38,
    Y: 48,
  },
  {
    name: 'Lucas',
    X: 84,
    Y: 41,
  },
  {
    name: 'Ice Climbers',
    X: 81,
    Y: 59,
  },
  {
    name: 'Marth',
    X: 17,
    Y: 54,
  },
  {
    name: 'Roy',
    X: 19,
    Y: 19,
  },
  {
    name: 'Ike',
    X: 32,
    Y: 75,
  },
  {
    name: 'Robin (Male)',
    X: 7,
    Y: 44,
  },
  {
    name: 'Robin (Female)',
    X: 89,
    Y: 75,
  },
  {
    name: 'Lucina',
    X: 35,
    Y: 85,
  },
  {
    name: 'Corrin',
    X: 95,
    Y: 19,
  },
  {
    name: 'Mr. Game & Watch',
    X: 35,
    Y: 68,
  },
  {
    name: 'Pit',
    X: 76,
    Y: 5,
  },
  {
    name: 'Palutena',
    X: 31,
    Y: 29,
  },
  {
    name: 'Dark Pit',
    X: 25,
    Y: 5,
  },
  {
    name: 'Wario',
    X: 95,
    Y: 30,
  },
  {
    name: 'Olimar',
    X: 85,
    Y: 68,
  },
  {
    name: 'R.O.B.',
    X: 84,
    Y: 26,
  },
  {
    name: 'Villager',
    X: 95,
    Y: 81,
  },
  {
    name: 'Wii Fit Trainer',
    X: 45,
    Y: 26,
  },
  {
    name: 'Little Mac',
    X: 65,
    Y: 80,
  },
  {
    name: 'Shulk',
    X: 6,
    Y: 61,
  },
  {
    name: 'Duck Hunt',
    X: 27,
    Y: 94,
  },
  {
    name: 'Snake',
    X: 70,
    Y: 73,
  },
  {
    name: 'Sonic',
    X: 68,
    Y: 16,
  },
  {
    name: 'Mega Man',
    X: 5,
    Y: 53,
  },
  {
    name: 'Pac-Man',
    X: 7,
    Y: 93,
  },
  {
    name: 'Ryu',
    X: 72,
    Y: 29,
  },
  {
    name: 'Cloud',
    X: 76,
    Y: 41,
  },
  {
    name: 'Bayonetta',
    X: 93,
    Y: 54,
  },
  {
    name: 'Mii Brawler',
    X: 81,
    Y: 34,
  },
  {
    name: 'Mii Swordfighter',
    X: 95,
    Y: 69,
  },
  {
    name: 'Mii Gunner',
    X: 25,
    Y: 13,
  },
  {
    name: 'Daisy',
    X: 33,
    Y: 18,
  },
  {
    name: 'Piranha Plant',
    X: 37,
    Y: 4,
  },
  {
    name: 'King K. Rool',
    X: 9,
    Y: 86,
  },
  {
    name: 'Ridley',
    X: 50,
    Y: 4,
  },
  {
    name: 'Dark Samus',
    X: 9,
    Y: 68,
  },
  {
    name: 'Incineroar',
    X: 50,
    Y: 94,
  },
  {
    name: 'Chrom',
    X: 18,
    Y: 92,
  },
  {
    name: 'Byleth (Male)',
    X: 77,
    Y: 19,
  },
  {
    name: 'Byleth (Female)',
    X: 17,
    Y: 9,
  },
  {
    name: 'Isabelle',
    X: 37,
    Y: 24,
  },
  {
    name: 'Pyra',
    X: 43,
    Y: 80,
  },
  {
    name: 'Mythra',
    X: 58,
    Y: 70,
  },
  {
    name: 'Inkling',
    X: 64,
    Y: 94,
  },
  {
    name: 'Min Min',
    X: 75,
    Y: 12,
  },
  {
    name: 'Ken',
    X: 6,
    Y: 34,
  },
  {
    name: 'Sephiroth',
    X: 17,
    Y: 38,
  },
  {
    name: 'Simon',
    X: 77,
    Y: 78,
  },
  {
    name: 'Richter',
    X: 22,
    Y: 72,
  },
  {
    name: 'Joker',
    X: 27,
    Y: 23,
  },
  {
    name: 'Hero',
    X: 46,
    Y: 12,
  },
  {
    name: 'Banjo & Kazooie',
    X: 80,
    Y: 91,
  },
  {
    name: 'Terry',
    X: 94,
    Y: 91,
  },
  {
    name: 'Steve',
    X: 68,
    Y: 10,
  },
  {
    name: 'Kazuya',
    X: 22,
    Y: 82,
  },
  {
    name: 'Sora',
    X: 36,
    Y: 11,
  }
]

export default characterLocation;

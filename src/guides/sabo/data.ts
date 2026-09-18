import { saboDeck, saboFlexCards } from '../../data/sabo';

export const saboGroupIds: Readonly<Record<string, string>> = {
  'OP13-004': 'leader',
  'OP01-016': 'search-setup',
  'ST01-011': 'search-setup',
  'OP17-084': 'elbaph-bodies',
  'OP17-086': 'search-setup',
  'OP17-080': 'search-setup',
  'OP17-082': 'search-setup',
  'OP17-083': 'elbaph-bodies',
  'OP17-087': 'elbaph-bodies',
  'OP17-095': 'elbaph-bodies',
  'OP17-089': 'elbaph-bodies',
  'OP15-088': 'replay-counters',
  'OP17-119': 'elbaph-bodies',
  'OP17-093': 'elbaph-bodies',
  'OP04-016': 'replay-counters',
  'OP14-096': 'replay-counters',
};

export const saboNavigation = (_lang?: 'en') => [
  { id: 'deck', label: 'Deck', path: '/' },
  { id: 'pilot', label: 'Pilot', path: '/pilot/' },
  { id: 'matchups', label: 'Matchups', path: '/matchups/' },
];

export const saboGroups = [
  { id: 'leader', label: 'Leader' },
  { id: 'search-setup', label: 'Search / hand setup' },
  { id: 'elbaph-bodies', label: 'Elbaph bodies' },
  { id: 'replay-counters', label: 'Replay & counters' },
];

export const localizedSaboDeck = (_lang?: 'en') => saboDeck;

export const localizedSaboFlexCards = (_lang?: 'en') => saboFlexCards;

export const saboEffectBoard = {
  title: '4 DON!! · Saul → 6K board',
  labels: {
    previous: 'Previous',
    next: 'Next',
    reset: 'Reset',
    step: 'Step',
    opponent: 'Opponent',
    player: 'Player',
    zones: { leader: 'Leader', characters: 'Characters', hand: 'Hand', life: 'Life', trash: 'Trash', don: 'DON!!' },
    activeDon: 'Active',
    restedDon: 'Rested',
    empty: 'No steps',
  },
  steps: [
    {
      moveLabel: '4 DON!!',
      action: 'Play Jaguar.D.Saul for 4 DON!!.',
      snapshot: {
        player: { leader: ['OP13-004'], characters: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'], donActive: 1, donRested: 4 },
        opponent: { leader: [], characters: [], hand: [], life: [], trash: [], donActive: 0, donRested: 0 },
        highlight: ['OP17-089'],
      },
    },
    {
      moveLabel: 'Saul effect',
      action: 'Use Saul’s effect to look at the top 3 cards.',
      snapshot: {
        player: { leader: ['OP13-004'], characters: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'], donActive: 1, donRested: 4 },
        opponent: { leader: [], characters: [], hand: [], life: [], trash: [], donActive: 0, donRested: 0 },
        highlight: ['OP17-089'],
      },
    },
    {
      moveLabel: 'Add to hand',
      action: 'Add an Elbaph card to your hand.',
      snapshot: {
        player: { leader: ['OP13-004'], characters: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'], hand: ['OP17-086'], donActive: 1, donRested: 4 },
        opponent: { leader: [], characters: [], hand: [], life: [], trash: [], donActive: 0, donRested: 0 },
        highlight: ['OP17-089', 'OP17-086'],
      },
    },
    {
      moveLabel: 'Keep the board',
      action: 'Keep Usopp, Jinbe, Robin, and Zoro on the board.',
      snapshot: {
        player: { leader: ['OP13-004'], characters: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'], hand: ['OP17-086'], donActive: 1, donRested: 4 },
        opponent: { leader: [], characters: [], hand: [], life: [], trash: [], donActive: 0, donRested: 0 },
        highlight: ['OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'],
      },
    },
    {
      moveLabel: 'Sabo boost',
      action: 'Use 1 DON!! on Sabo when your cost-8-or-more Character is live. Saul qualifies. The four small bodies become 6K.',
      snapshot: {
        player: { leader: ['OP13-004'], characters: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'], hand: ['OP17-086'], donActive: 0, donRested: 4 },
        opponent: { leader: [], characters: [], hand: [], life: [], trash: [], donActive: 0, donRested: 0 },
        highlight: ['OP13-004', 'OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'],
      },
    },
  ],
} as const;

export const saboCardName = (_id: string, fallback = _id) => fallback;

export const saboCardAlt = (id: string, langOrFallback?: 'en' | string, fallback?: string) => {
  const englishFallback = fallback ?? (langOrFallback === 'en' ? undefined : langOrFallback);
  return englishFallback ?? `${id} card`;
};

export const saboGuideBase = '/elbaph-sabo';

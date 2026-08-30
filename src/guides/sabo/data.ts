import type { Locale } from '../../i18n/ui';
import { thaiCardMetadataById } from '../../data/cards-th';
import { saboDeck, saboFlexCards } from '../../data/sabo';
import { saboThaiDeckRoleLabels, saboThaiFlexRoleLabels, saboThaiNavigation, saboThaiCardAlt } from '../../content/sabo/th';

const thaiCardNames: Readonly<Record<string, { readonly name: string }>> = thaiCardMetadataById;

export const saboGroupIds: Readonly<Record<string, string>> = {
  'OP13-004': 'leader',
  'OP01-016': 'search-setup',
  'ST01-011': 'search-setup',
  'OP11-012': 'search-setup',
  'OP17-084': 'elbaph-bodies',
  'OP17-086': 'search-setup',
  'OP17-080': 'search-setup',
  'OP17-083': 'elbaph-bodies',
  'OP17-087': 'elbaph-bodies',
  'OP17-095': 'elbaph-bodies',
  'OP17-089': 'elbaph-bodies',
  'OP15-088': 'replay-counters',
  'OP17-119': 'elbaph-bodies',
  'OP17-093': 'elbaph-bodies',
  'OP04-016': 'replay-counters',
  'OP17-098': 'replay-counters',
};

export const saboNavigation = (lang: Locale) => lang === 'th'
  ? saboThaiNavigation.map((item) => ({ id: item.key, label: item.label, path: item.key === 'deck' ? '/' : `/${item.key}/` }))
  : [
      { id: 'deck', label: 'Deck', path: '/' },
      { id: 'pilot', label: 'Pilot', path: '/pilot/' },
    ];

export const saboGroups = (lang: Locale) => lang === 'th'
  ? [
      { id: 'leader', label: 'ลีดเดอร์' },
      { id: 'search-setup', label: 'ค้นหา / ตั้งเกม' },
      { id: 'elbaph-bodies', label: 'ตัว Elbaph' },
      { id: 'replay-counters', label: 'เล่นซ้ำและเคาน์เตอร์' },
    ]
  : [
      { id: 'leader', label: 'Leader' },
      { id: 'search-setup', label: 'Search / setup' },
      { id: 'elbaph-bodies', label: 'Elbaph bodies' },
      { id: 'replay-counters', label: 'Replay & counters' },
    ];

export const localizedSaboDeck = (lang: Locale) => lang === 'th'
  ? saboDeck.map((card) => ({ ...card, role: saboThaiDeckRoleLabels[card.id as keyof typeof saboThaiDeckRoleLabels] ?? card.role }))
  : saboDeck;

export const localizedSaboFlexCards = (lang: Locale) => lang === 'th'
  ? saboFlexCards.map((card) => ({ ...card, role: saboThaiFlexRoleLabels[card.id as keyof typeof saboThaiFlexRoleLabels] ?? card.role }))
  : saboFlexCards;

export const saboEffectBoard = {
  title: '4 DON!! · Saul → sixes',
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
        opponent: {},
        highlight: ['OP17-089'],
      },
    },
    {
      moveLabel: 'Saul effect',
      action: 'Use Saul’s effect to look at the top 3 cards.',
      snapshot: {
        player: { leader: ['OP13-004'], characters: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'], donActive: 1, donRested: 4 },
        opponent: {},
        highlight: ['OP17-089'],
      },
    },
    {
      moveLabel: 'Add to hand',
      action: 'Add an Elbaph card to your hand.',
      snapshot: {
        player: { leader: ['OP13-004'], characters: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'], hand: ['OP17-086'], donActive: 1, donRested: 4 },
        opponent: {},
        highlight: ['OP17-089', 'OP17-086'],
      },
    },
    {
      moveLabel: 'Keep the board',
      action: 'Keep Usopp, Jinbe, Robin, and Zoro on the board.',
      snapshot: {
        player: { leader: ['OP13-004'], characters: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'], hand: ['OP17-086'], donActive: 1, donRested: 4 },
        opponent: {},
        highlight: ['OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'],
      },
    },
    {
      moveLabel: 'Sabo boost',
      action: 'Use 1 DON!! on Sabo when your cost-8-or-more Character is live. Saul qualifies. The four small bodies become 6K.',
      snapshot: {
        player: { leader: ['OP13-004'], characters: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'], hand: ['OP17-086'], donActive: 0, donRested: 4 },
        opponent: {},
        highlight: ['OP13-004', 'OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'],
      },
    },
  ],
} as const;

export const saboCardName = (id: string, lang: Locale, fallback = id) => lang === 'th'
  ? thaiCardNames[id]?.name ?? fallback
  : fallback;

export const saboCardAlt = (id: string, lang: Locale, fallback?: string) => lang === 'th'
  ? `${saboThaiCardAlt(id)}${thaiCardNames[id]?.name ? ` ${thaiCardNames[id].name}` : ''}`
  : fallback ?? `${id} card`;

export const saboGuideBase = (lang: Locale) => lang === 'th' ? '/th/elbaph-sabo' : '/elbaph-sabo';

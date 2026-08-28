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

export const saboCardName = (id: string, lang: Locale, fallback = id) => lang === 'th'
  ? thaiCardNames[id]?.name ?? fallback
  : fallback;

export const saboCardAlt = (id: string, lang: Locale, fallback?: string) => lang === 'th'
  ? `${saboThaiCardAlt(id)}${thaiCardNames[id]?.name ? ` ${thaiCardNames[id].name}` : ''}`
  : fallback ?? `${id} card`;

export const saboGuideBase = (lang: Locale) => lang === 'th' ? '/th/elbaph-sabo' : '/elbaph-sabo';

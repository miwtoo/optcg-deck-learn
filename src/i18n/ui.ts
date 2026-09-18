export type Locale = 'en';

export interface UiLabels {
  readonly openCard: string;
  readonly cardDetails: string;
  readonly closeCard: string;
  readonly parallelArt: string;
  readonly baseArt: string;
  readonly cardText: string;
  readonly cardDetailsSource: string;
  readonly cards: string;
  readonly guidePages: string;
  readonly navigation: Readonly<Record<string, string>>;
  readonly groups: Readonly<Record<string, string>>;
}

const labels: UiLabels = {
  openCard: 'Open',
  cardDetails: 'details',
  closeCard: 'Close card details',
  parallelArt: 'Parallel art',
  baseArt: 'Base',
  cardText: 'Card text',
  cardDetailsSource: 'Details use the local card data. Count and role use the deck list.',
  cards: 'cards',
  guidePages: 'Guide pages',
  navigation: { deck: 'Deck', pilot: 'Pilot', combos: 'Combos' },
  groups: {},
};

export type UiLabelOverrides = Partial<Omit<UiLabels, 'navigation' | 'groups'>> & {
  readonly navigation?: Readonly<Record<string, string>>;
  readonly groups?: Readonly<Record<string, string>>;
};

export function getUiLabels(_locale: string | undefined, overrides: UiLabelOverrides = {}): UiLabels {
  const definedOverrides = Object.fromEntries(Object.entries(overrides).filter(([, value]) => value !== undefined)) as UiLabelOverrides;
  return {
    ...labels,
    ...definedOverrides,
    navigation: { ...labels.navigation, ...definedOverrides.navigation },
    groups: { ...labels.groups, ...definedOverrides.groups },
  };
}

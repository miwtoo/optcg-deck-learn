export type Locale = 'en' | 'th';

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
  readonly languageSwitcher: string;
  readonly english: string;
  readonly thai: string;
  readonly navigation: Readonly<Record<string, string>>;
  readonly groups: Readonly<Record<string, string>>;
}

const labels: Record<Locale, UiLabels> = {
  en: {
    openCard: 'Open',
    cardDetails: 'details',
    closeCard: 'Close card details',
    parallelArt: 'Parallel art',
    baseArt: 'Base',
    cardText: 'Card text',
    cardDetailsSource: 'Details use the local card data. Count and role use the deck list.',
    cards: 'cards',
    guidePages: 'Guide pages',
    languageSwitcher: 'Language',
    english: 'English',
    thai: 'ไทย',
    navigation: { deck: 'Deck', pilot: 'Pilot', combos: 'Combos' },
    groups: {},
  },
  th: {
    openCard: 'เปิด',
    cardDetails: 'รายละเอียด',
    closeCard: 'ปิดรายละเอียดการ์ด',
    parallelArt: 'ภาพ Parallel',
    baseArt: 'ภาพปกติ',
    cardText: 'ข้อความการ์ด',
    cardDetailsSource: 'รายละเอียดใช้ข้อมูลการ์ดในเครื่อง จำนวนและบทบาทใช้รายการเด็ค',
    cards: 'ใบ',
    guidePages: 'หน้าไกด์',
    languageSwitcher: 'ภาษา',
    english: 'English',
    thai: 'ไทย',
    navigation: { deck: 'เด็ค', pilot: 'ไกด์การเล่น', combos: 'คอมโบ' },
    groups: {},
  },
};

export type UiLabelOverrides = Partial<Omit<UiLabels, 'navigation' | 'groups'>> & {
  readonly navigation?: Readonly<Record<string, string>>;
  readonly groups?: Readonly<Record<string, string>>;
};

export function getUiLabels(locale: string | undefined, overrides: UiLabelOverrides = {}): UiLabels {
  const selected = locale === 'th' ? labels.th : labels.en;
  const definedOverrides = Object.fromEntries(Object.entries(overrides).filter(([, value]) => value !== undefined)) as UiLabelOverrides;
  return {
    ...selected,
    ...definedOverrides,
    navigation: { ...selected.navigation, ...definedOverrides.navigation },
    groups: { ...selected.groups, ...definedOverrides.groups },
  };
}

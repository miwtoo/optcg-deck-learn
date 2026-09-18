export interface ComboNote {
  readonly cardId?: string;
  readonly text: string;
}

export interface ComboPowerState {
  readonly cardId: string;
  readonly label: string;
  readonly value: string;
}

export interface SaboCombo {
  readonly slug: string;
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly cards: readonly string[];
  readonly steps: readonly string[];
  readonly prerequisites: readonly ComboNote[];
  readonly result: readonly ComboNote[];
  readonly powerStates: readonly ComboPowerState[];
}

export const saboCombos: readonly SaboCombo[] = [
  {
    slug: 'luffy-helper',
    number: 'LINE 01',
    title: 'Luffy → finish',
    summary: 'Use Luffy to attack now and recover the 2-cost card the turn needs.',
    cards: ['OP17-093', 'ST01-011'],
    steps: [
      'Keep a 12+ Character on your board.',
      'Play Monkey.D.Luffy for 8 DON!!.',
      'Draw 1 card.',
      'Play a 2-cost-or-less Character from your trash.',
      'Prefer Brook for leader DON!!. Choose Robin for a key reduction, Jinbe for defense, or Chopper for the finish.',
    ],
    prerequisites: [
      { cardId: 'OP17-093', text: 'You need 8 DON!! for Luffy.' },
      { text: 'A 12+ Character gives Luffy Rush.' },
      { text: 'A 2-cost-or-less Character must be in your trash.' },
    ],
    result: [
      { cardId: 'OP17-093', text: 'Luffy draws 1 and gets Rush.' },
      { cardId: 'ST01-011', text: 'Brook can put up to 2 rested DON!! on your Leader or a Character.' },
    ],
    powerStates: [
      { cardId: 'OP17-093', label: 'Luffy', value: '8K + Rush' },
      { cardId: 'ST01-011', label: 'Brook', value: '3K · up to 2 rested DON!!' },
    ],
  },
  {
    slug: 'docking-six-helper',
    number: 'LINE 02',
    title: 'Docking Six → recovery',
    summary: 'Use Docking Six to replay the small body that fixes the board.',
    cards: ['OP15-088', 'OP17-080'],
    steps: [
      'Play Pirates Docking Six for 5 DON!!.',
      'Trash the top 3 cards of your deck.',
      'Play a 2-cost-or-less Straw Hat Crew Character from your trash.',
      'Choose Usopp or Sanji for value and trash setup.',
      'Choose Zoro for protection, Robin for a key reduction, Brook for leader DON!!, Jinbe for defense, or Chopper for the finish.',
    ],
    prerequisites: [
      { cardId: 'OP15-088', text: 'Docking Six needs 5 DON!!.' },
      { text: 'A 2-cost-or-less Straw Hat Crew Character must be in your trash.' },
      { text: 'A 12+ Character is not needed for replay or search. It is needed only for related power bonuses.' },
    ],
    result: [
      { cardId: 'OP15-088', text: 'Docking Six becomes an 11-cost, 7K Character. It does not turn on the 12+ effects.' },
      { cardId: 'OP17-080', text: 'Usopp looks at the top 3 cards, adds an Elbaph card, and trashes the rest.' },
    ],
    powerStates: [
      { cardId: 'OP15-088', label: 'Docking Six', value: '7K · cost 11' },
      { cardId: 'OP17-080', label: 'Usopp', value: '2K → 5K with 12+ → 6K with Sabo +1K' },
    ],
  },
  {
    slug: 'saul-sixes',
    number: 'LINE 03',
    title: 'Saul → 6K board',
    summary: 'Play Saul to turn on the 12+ threshold and the wide board.',
    cards: ['OP17-089', 'OP17-080', 'OP17-083', 'OP17-087', 'OP17-095'],
    steps: [
      'Play Jaguar.D.Saul for 4 DON!!.',
      'Use Saul’s effect to look at the top 3 cards.',
      'Add an Elbaph card to your hand.',
      'Keep Usopp, Jinbe, Robin, and Zoro on the board.',
      'Use 1 DON!! on Sabo when your cost-8-or-more Character is live. Saul qualifies.',
    ],
    prerequisites: [
      { cardId: 'OP17-089', text: 'Saul costs 4 DON!!. He gains +12 cost and becomes cost 16.' },
      { text: 'Saul is cost 8 or more. He enables Sabo’s 1 DON!! boost.' },
    ],
    result: [
      { cardId: 'OP17-089', text: 'Saul is a 6K, cost-16 Character. Saul turns on the 12+ effects.' },
      { cardId: 'OP17-080', text: 'Usopp becomes a 5K body with a 12+ Character.' },
      { cardId: 'OP17-083', text: 'Jinbe becomes a 5K Blocker with a 12+ Character.' },
      { cardId: 'OP17-087', text: 'If you choose Robin, replay her. She becomes a 5K body and gives −3K on play.' },
      { cardId: 'OP17-095', text: 'Zoro becomes a 5K body and has 2K counter.' },
    ],
    powerStates: [
      { cardId: 'OP17-089', label: 'Saul', value: '6K · cost 16' },
      { cardId: 'OP17-080', label: 'Usopp', value: '2K → 5K with 12+ → 6K with Sabo +1K' },
      { cardId: 'OP17-083', label: 'Jinbe', value: '2K → 5K Blocker with 12+ → 6K with Sabo +1K' },
    ],
  },
];

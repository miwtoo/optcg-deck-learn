/**
 * Purple Enel OP15-058 deck data.
 *
 * Card metadata is copied from the local English official card-data snapshot.
 */

export interface EnelDeckEntry {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly quantity: number;
}

export interface EnelCardMetadata {
  readonly id: string;
  readonly packId: string;
  readonly name: string;
  readonly rarity: string;
  readonly category: string;
  readonly cost: number | null;
  readonly attributes: readonly string[];
  readonly power: number | null;
  readonly counter: number | null;
  readonly colors: readonly string[];
  readonly blockNumber: number;
  readonly types: readonly string[];
  readonly effect: string;
  readonly trigger: string | null;
}

export const enelDeck = [
  {
    "id": "OP15-058",
    "name": "Enel",
    "role": "Leader",
    "quantity": 1
  },
  {
    "id": "OP12-071",
    "name": "Charlotte Pudding",
    "role": "Search",
    "quantity": 3
  },
  {
    "id": "OP15-061",
    "name": "Ohm",
    "role": "Draw / −1 DON!!",
    "quantity": 4
  },
  {
    "id": "OP15-066",
    "name": "Satori",
    "role": "Draw / top-deck setup",
    "quantity": 3
  },
  {
    "id": "OP15-067",
    "name": "Shura",
    "role": "Rush / draw",
    "quantity": 4
  },
  {
    "id": "OP09-072",
    "name": "Franky",
    "role": "Blocker / draw",
    "quantity": 1
  },
  {
    "id": "OP12-063",
    "name": "Vinsmoke Reiju",
    "role": "Blocker",
    "quantity": 4
  },
  {
    "id": "OP10-067",
    "name": "Senor Pink",
    "role": "Event recovery",
    "quantity": 2
  },
  {
    "id": "OP15-118",
    "name": "Enel",
    "role": "Protection / search",
    "quantity": 4
  },
  {
    "id": "OP13-076",
    "name": "Divine Departure",
    "role": "−8000 power removal",
    "quantity": 2
  },
  {
    "id": "OP15-075",
    "name": "El Thor",
    "role": "Power boost / K.O.",
    "quantity": 4
  },
  {
    "id": "OP15-076",
    "name": "Lightning Beast Kiten",
    "role": "Draw / −1K",
    "quantity": 4
  },
  {
    "id": "OP15-077",
    "name": "Lightning Dragon",
    "role": "Draw / rest lock",
    "quantity": 4
  },
  {
    "id": "OP15-078",
    "name": "Mamaragan",
    "role": "Draw / rest",
    "quantity": 4
  },
  {
    "id": "OP15-074",
    "name": "Varie",
    "role": "Draw / cost boost",
    "quantity": 3
  },
  {
    "id": "OP05-077",
    "name": "Gamma Knife",
    "role": "−5K power reduction",
    "quantity": 3
  },
  {
    "id": "OP09-077",
    "name": "Gum-Gum Lightning",
    "role": "K.O.",
    "quantity": 1
  },
] as const satisfies readonly EnelDeckEntry[];

export const enelCardMetadata = [
  {
    "id": "OP15-058",
    "packId": "569115",
    "name": "Enel",
    "rarity": "Leader",
    "category": "Leader",
    "cost": 5,
    "attributes": [
      "Special"
    ],
    "power": 5000,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island"
    ],
    "effect": "Under the rules of this game, your DON!! deck consists of 6 cards. [Activate: Main] [Once Per Turn] If it is your second turn or later, add up to 1 DON!! card from your DON!! deck and set it as active, and add up to 4 additional DON!! cards and rest them. Then, give up to 4 rested DON!! cards to 1 of your Characters.",
    "trigger": null
  },
  {
    "id": "OP12-071",
    "packId": "569112",
    "name": "Charlotte Pudding",
    "rarity": "Rare",
    "category": "Character",
    "cost": 1,
    "attributes": [
      "Wisdom"
    ],
    "power": 2000,
    "counter": 1000,
    "colors": [
      "Purple"
    ],
    "blockNumber": 3,
    "types": [
      "Big Mom Pirates"
    ],
    "effect": "[On Play] Look at 4 cards from the top of your deck; reveal up to 1 [Sanji] or Event card and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
    "trigger": null
  },
  {
    "id": "OP15-061",
    "packId": "569115",
    "name": "Ohm",
    "rarity": "Rare",
    "category": "Character",
    "cost": 1,
    "attributes": [
      "Slash"
    ],
    "power": 2000,
    "counter": 1000,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island",
      "Vassals"
    ],
    "effect": "[On Play] DON!! −1: Draw 1 card. [When Attacking] If you have 6 or less DON!! cards on your field, give up to 1 of your opponent's Characters −1000 power during this turn.",
    "trigger": null
  },
  {
    "id": "OP15-066",
    "packId": "569115",
    "name": "Satori",
    "rarity": "Rare",
    "category": "Character",
    "cost": 1,
    "attributes": [
      "Strike"
    ],
    "power": 2000,
    "counter": 1000,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island",
      "Vassals"
    ],
    "effect": "[On Play] DON!! −1: Draw 1 card. [When Attacking] If you have 6 or less DON!! cards on your field, look at 2 cards from the top of your deck and place them at the top or bottom of your deck in any order.",
    "trigger": null
  },
  {
    "id": "OP15-067",
    "packId": "569115",
    "name": "Shura",
    "rarity": "Rare",
    "category": "Character",
    "cost": 1,
    "attributes": [
      "Slash"
    ],
    "power": 2000,
    "counter": 1000,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island",
      "Vassals"
    ],
    "effect": "If you have 6 or less DON!! cards on your field, this Character gains [Rush]. (This card can attack on the turn in which it is played.) [On Play] DON!! −1: Draw 1 card.",
    "trigger": null
  },
  {
    "id": "OP09-072",
    "packId": "569109",
    "name": "Franky",
    "rarity": "SuperRare",
    "category": "Character",
    "cost": 4,
    "attributes": [
      "Strike"
    ],
    "power": 5000,
    "counter": 1000,
    "colors": [
      "Purple"
    ],
    "blockNumber": 3,
    "types": [
      "Straw Hat Crew"
    ],
    "effect": "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.) [On Play] DON!! −2, You may trash 1 card from your hand: Draw 2 cards.",
    "trigger": null
  },
  {
    "id": "OP12-063",
    "packId": "569112",
    "name": "Vinsmoke Reiju",
    "rarity": "SuperRare",
    "category": "Character",
    "cost": 4,
    "attributes": [
      "Special"
    ],
    "power": 5000,
    "counter": 1000,
    "colors": [
      "Purple"
    ],
    "blockNumber": 3,
    "types": [
      "The Vinsmoke Family",
      "GERMA 66"
    ],
    "effect": "If you have 4 or more Events in your trash, this Character gains +2000 power and +5 cost. [Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
    "trigger": null
  },
  {
    "id": "OP10-067",
    "packId": "569110",
    "name": "Senor Pink",
    "rarity": "Rare",
    "category": "Character",
    "cost": 5,
    "attributes": [
      "Special"
    ],
    "power": 6000,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 3,
    "types": [
      "Donquixote Pirates"
    ],
    "effect": "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Add up to 1 purple Event with a cost of 5 or less from your trash to your hand. Then, set up to 1 of your DON!! cards as active.",
    "trigger": null
  },
  {
    "id": "OP15-118",
    "packId": "569115",
    "name": "Enel",
    "rarity": "SecretRare",
    "category": "Character",
    "cost": 6,
    "attributes": [
      "Special"
    ],
    "power": 8000,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island"
    ],
    "effect": "If you have 6 or less DON!! cards on your field, this Character cannot be removed from the field by your opponent's effects and gains +2000 power. [On Play] DON!! −1: Look at 5 cards from the top of your deck and add up to 1 card to your hand. Then, place the rest at the bottom of your deck in any order, and trash 1 card from your hand.",
    "trigger": null
  },
  {
    "id": "OP13-076",
    "packId": "569113",
    "name": "Divine Departure",
    "rarity": "Rare",
    "category": "Event",
    "cost": null,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "King of the Pirates",
      "Roger Pirates"
    ],
    "effect": "[Main] You may rest 5 of your DON!! cards: If you have any DON!! cards given, give up to 1 of your opponent's Characters −8000 power during this turn. [Counter] You may trash 1 card from your hand: Up to 1 of your Leader or Character cards gains +3000 power during this battle.",
    "trigger": null
  },
  {
    "id": "OP15-075",
    "packId": "569115",
    "name": "El Thor",
    "rarity": "Uncommon",
    "category": "Event",
    "cost": null,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island"
    ],
    "effect": "[Main] DON!! −1: If your Leader is [Enel], up to 1 of your Leader or Character cards gains +1000 power during this turn. Then, K.O. up to 1 of your opponent's Characters with 3000 power or less. [Counter] Up to 1 of your [Enel] cards gains +2000 power during this battle.",
    "trigger": null
  },
  {
    "id": "OP15-076",
    "packId": "569115",
    "name": "Lightning Beast Kiten",
    "rarity": "Uncommon",
    "category": "Event",
    "cost": null,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island"
    ],
    "effect": "[Main] DON!! −1: If your Leader is [Enel], draw 1 card. Then, give up to 1 of your opponent's Characters −1000 power during this turn. [Counter] Up to 1 of your [Enel] cards gains +2000 power during this battle.",
    "trigger": null
  },
  {
    "id": "OP15-077",
    "packId": "569115",
    "name": "Lightning Dragon",
    "rarity": "Rare",
    "category": "Event",
    "cost": null,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island"
    ],
    "effect": "[Main] DON!! −1: Draw 1 card. Then, up to 1 of your opponent's rested Characters with 6000 power or less will not become active in your opponent's next Refresh Phase.",
    "trigger": null
  },
  {
    "id": "OP15-078",
    "packId": "569115",
    "name": "Mamaragan",
    "rarity": "SuperRare",
    "category": "Event",
    "cost": null,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island"
    ],
    "effect": "[Main] DON!! −2: Draw 1 card. Then, rest up to 1 of your opponent's Characters with 5000 power or less. [Counter] Up to 1 of your Leader or Character cards gains +1000 power during this battle. Then, if you have 6 or less DON!! cards on your field, draw 1 card.",
    "trigger": null
  },
  {
    "id": "OP15-074",
    "packId": "569115",
    "name": "Varie",
    "rarity": "Uncommon",
    "category": "Event",
    "cost": null,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 4,
    "types": [
      "Sky Island"
    ],
    "effect": "[Main] DON!! −1: If your Leader is [Enel], draw 1 card. Then, up to 1 of your Characters gains +2 cost until the end of your opponent's next End Phase. [Counter] Up to 1 of your [Enel] cards gains +2000 power during this battle.",
    "trigger": null
  },
  {
    "id": "OP05-077",
    "packId": "569105",
    "name": "Gamma Knife",
    "rarity": "Common",
    "category": "Event",
    "cost": 2,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 2,
    "types": [
      "Heart Pirates"
    ],
    "effect": "[Main] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Give up to 1 of your opponent's Characters −5000 power during this turn.",
    "trigger": "[Trigger] Add up to 1 DON!! card from your DON!! deck and set it as active."
  },
  {
    "id": "OP09-077",
    "packId": "569109",
    "name": "Gum-Gum Lightning",
    "rarity": "Uncommon",
    "category": "Event",
    "cost": 2,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Purple"
    ],
    "blockNumber": 3,
    "types": [
      "The Four Emperors",
      "Straw Hat Crew"
    ],
    "effect": "[Main] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with 6000 power or less.",
    "trigger": "[Trigger] Add up to 1 DON!! card from your DON!! deck and set it as active."
  },
] as const satisfies readonly EnelCardMetadata[];

export const enelCardMetadataById: Readonly<Record<string, EnelCardMetadata>> =
  Object.fromEntries(enelCardMetadata.map((card) => [card.id, card]));

export const enelDeckTotal = enelDeck.reduce(
  (total, card) => total + card.quantity,
  0,
);

export const enelCardArtVariants: Readonly<Record<string, readonly string[]>> = {
  'OP15-058': ['OP15-058_p1'],
  'OP15-118': ['OP15-118_p1', 'OP15-118_p2'],
};

export const enelCardImageUrl = (id: string): string =>
  `${import.meta.env.BASE_URL}/cards/${id}.png`;

// Kept as a local alias for components that use the default image helper name.
export const cardImageUrl = enelCardImageUrl;

export interface EnelCombo {
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly cards: readonly string[];
  readonly steps: readonly string[];
}

export const enelCombos = [
  {
    number: '01',
    title: 'Boost Shura',
    summary: 'Use the Leader effect to give rested DON!! to Shura while its Rush condition is active.',
    cards: ['OP15-067', 'OP15-058'],
    steps: [
      'Play Shura while you have 6 or less DON!! cards on your field.',
      'Use the Leader effect from your second turn onward.',
      'Add 1 active DON!! and up to 4 rested DON!! from your DON!! deck.',
      'Give up to 4 rested DON!! cards to Shura, then attack with Rush.',
    ],
  },
  {
    number: '02',
    title: 'Ohm into El Thor',
    summary: 'Draw with Ohm, then use El Thor for a power boost and a small K.O.',
    cards: ['OP15-061', 'OP15-075'],
    steps: [
      'Play Ohm and return 1 DON!! card to your DON!! deck to draw 1 card.',
      'Use El Thor and return 1 DON!! card to your DON!! deck.',
      'Give your Leader or Character +1000 power.',
      'K.O. up to 1 opposing Character with 3000 power or less.',
    ],
  },
  {
    number: '03',
    title: 'Satori sets the draw',
    summary: 'Use Satori to arrange the top of your deck before a draw Event.',
    cards: ['OP15-066', 'OP15-076'],
    steps: [
      'Play Satori and return 1 DON!! card to your DON!! deck to draw 1 card.',
      'Attack with Satori while you have 6 or less DON!! cards on your field.',
      'Look at the top 2 cards and place them at the top or bottom in any order.',
      'Use Lightning Beast Kiten to draw 1 card from the arranged top card.',
    ],
  },
  {
    number: '04',
    title: 'Lower, then K.O.',
    summary: 'Use Gamma Knife to lower a target, then let El Thor finish a small Character.',
    cards: ['OP05-077', 'OP15-075'],
    steps: [
      'Use Gamma Knife and return 1 DON!! card to your DON!! deck.',
      'Give up to 1 opposing Character −5000 power.',
      'Use El Thor and return 1 DON!! card to your DON!! deck.',
      'K.O. the lowered Character if its power is now 3000 or less.',
    ],
  },
  {
    number: '05',
    title: 'Lock the board',
    summary: 'Draw with two Events and keep opposing Characters from becoming active.',
    cards: ['OP15-078', 'OP15-077'],
    steps: [
      'Use Mamaragan and return 2 DON!! cards to your DON!! deck.',
      'Draw 1 card and rest an opposing Character with 5000 power or less.',
      'Use Lightning Dragon and return 1 DON!! card to your DON!! deck.',
      'Draw 1 card and stop that now-rested opposing Character with 6000 power or less from becoming active.',
    ],
  },
  {
    number: '06',
    title: 'Turn on Reiju',
    summary: 'Four Events in your trash give Reiju power, cost, and Blocker.',
    cards: ['OP12-063'],
    steps: [
      'Confirm that you have 4 or more Events in your trash.',
      'Play Vinsmoke Reiju.',
      'Apply its +2000 power and +5 cost effect.',
      'Use Reiju as a Blocker when your opponent attacks.',
    ],
  },
] as const satisfies readonly EnelCombo[];

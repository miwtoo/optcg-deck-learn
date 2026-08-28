/**
 * Verified Sabo deck data sourced from the Sabo pages and an English card-data snapshot.
 */

export interface SaboDeckEntry {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly quantity: number;
}

export interface SaboCardMetadata {
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

export const saboDeck = [
  {
    "id": "OP13-004",
    "name": "Sabo",
    "role": "Leader",
    "quantity": 1
  },
  {
    "id": "OP01-016",
    "name": "Nami",
    "role": "Search / draw",
    "quantity": 4
  },
  {
    "id": "ST01-011",
    "name": "Brook",
    "role": "DON!! utility",
    "quantity": 4
  },
  {
    "id": "OP11-012",
    "name": "Franky",
    "role": "Event payoff",
    "quantity": 2
  },
  {
    "id": "OP17-084",
    "name": "Tony Tony.Chopper",
    "role": "Unblockable finisher",
    "quantity": 2
  },
  {
    "id": "OP17-086",
    "name": "Nami",
    "role": "Hand fixer",
    "quantity": 4
  },
  {
    "id": "OP17-080",
    "name": "Usopp",
    "role": "Top-three searcher",
    "quantity": 4
  },
  {
    "id": "OP17-083",
    "name": "Jinbe",
    "role": "Blocker",
    "quantity": 2
  },
  {
    "id": "OP17-087",
    "name": "Nico Robin",
    "role": "−3K",
    "quantity": 4
  },
  {
    "id": "OP17-095",
    "name": "Roronoa Zoro",
    "role": "2K counter",
    "quantity": 4
  },
  {
    "id": "OP17-089",
    "name": "Jaguar.D.Saul",
    "role": "12+ activator",
    "quantity": 4
  },
  {
    "id": "OP15-088",
    "name": "Pirates Docking Six",
    "role": "Replay engine",
    "quantity": 4
  },
  {
    "id": "OP17-119",
    "name": "Loki",
    "role": "12+ activator · KO",
    "quantity": 4
  },
  {
    "id": "OP17-093",
    "name": "Monkey.D.Luffy",
    "role": "Rush payoff",
    "quantity": 4
  },
  {
    "id": "OP04-016",
    "name": "Bad Manners Kick Course",
    "role": "3K counter",
    "quantity": 2
  },
  {
    "id": "OP17-098",
    "name": "Gum-Gum Kong Gun",
    "role": "3K counter · KO two",
    "quantity": 2
  }
] as const satisfies readonly SaboDeckEntry[];

export const saboCardMetadata = [
  {
    "id": "OP13-004",
    "packId": "569113",
    "name": "Sabo",
    "rarity": "Leader",
    "category": "Leader",
    "cost": 5,
    "attributes": [
      "Special"
    ],
    "power": 5000,
    "counter": null,
    "colors": [
      "Red",
      "Black"
    ],
    "blockNumber": 4,
    "types": [
      "Dressrosa",
      "Revolutionary Army"
    ],
    "effect": "If you have 4 or more Life cards, give this Leader −1000 power. [DON!! x1] If you have a Character with a cost of 8 or more, your Leader and all of your Characters gain +1000 power.",
    "trigger": null
  },
  {
    "id": "OP01-016",
    "packId": "569101",
    "name": "Nami",
    "rarity": "Rare",
    "category": "Character",
    "cost": 1,
    "attributes": [
      "Special"
    ],
    "power": 2000,
    "counter": 1000,
    "colors": [
      "Red"
    ],
    "blockNumber": 1,
    "types": [
      "Straw Hat Crew"
    ],
    "effect": "[On Play] Look at 5 cards from the top of your deck; reveal up to 1 {Straw Hat Crew} type card other than [Nami] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
    "trigger": null
  },
  {
    "id": "ST01-011",
    "packId": "569001",
    "name": "Brook",
    "rarity": "Common",
    "category": "Character",
    "cost": 2,
    "attributes": [
      "Slash"
    ],
    "power": 3000,
    "counter": 2000,
    "colors": [
      "Red"
    ],
    "blockNumber": 1,
    "types": [
      "Straw Hat Crew"
    ],
    "effect": "[On Play] Give up to 2 rested DON!! cards to your Leader or 1 of your Characters.",
    "trigger": null
  },
  {
    "id": "OP11-012",
    "packId": "569111",
    "name": "Franky",
    "rarity": "Uncommon",
    "category": "Character",
    "cost": 4,
    "attributes": [
      "Strike"
    ],
    "power": 4000,
    "counter": 2000,
    "colors": [
      "Red"
    ],
    "blockNumber": 3,
    "types": [
      "Straw Hat Crew"
    ],
    "effect": "[Your Turn] [Once Per Turn] When your opponent activates an Event, all of your Characters gain +2000 power during this turn.",
    "trigger": null
  },
  {
    "id": "OP17-084",
    "packId": "569117",
    "name": "Tony Tony.Chopper",
    "rarity": "Uncommon",
    "category": "Character",
    "cost": 1,
    "attributes": [
      "Strike"
    ],
    "power": 2000,
    "counter": 2000,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Animal",
      "Elbaph",
      "Straw Hat Crew"
    ],
    "effect": "[On Play] If there is a Character with a cost of 12 or more, up to 1 of your Characters gains [Unblockable] during this turn. (This card cannot be blocked.)",
    "trigger": null
  },
  {
    "id": "OP17-086",
    "packId": "569117",
    "name": "Nami",
    "rarity": "Uncommon",
    "category": "Character",
    "cost": 1,
    "attributes": [
      "Special"
    ],
    "power": 2000,
    "counter": 1000,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Elbaph",
      "Straw Hat Crew"
    ],
    "effect": "[On Play] You may trash 1 {Elbaph} type card from your hand: Draw 2 cards.",
    "trigger": null
  },
  {
    "id": "OP17-080",
    "packId": "569117",
    "name": "Usopp",
    "rarity": "SuperRare",
    "category": "Character",
    "cost": 2,
    "attributes": [
      "Ranged"
    ],
    "power": 2000,
    "counter": 1000,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Elbaph",
      "Straw Hat Crew"
    ],
    "effect": "If there is a Character with a cost of 12 or more, this Character gains +3000 power. [On Play] Look at 3 cards from the top of your deck; reveal up to 1 {Elbaph} type card and add it to your hand. Then, trash the rest.",
    "trigger": null
  },
  {
    "id": "OP17-083",
    "packId": "569117",
    "name": "Jinbe",
    "rarity": "Common",
    "category": "Character",
    "cost": 2,
    "attributes": [
      "Strike"
    ],
    "power": 2000,
    "counter": 1000,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Fish-Man",
      "Elbaph",
      "Straw Hat Crew"
    ],
    "effect": "If there is a Character with a cost of 12 or more, this Character gains [Blocker] and +3000 power. (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
    "trigger": null
  },
  {
    "id": "OP17-087",
    "packId": "569117",
    "name": "Nico Robin",
    "rarity": "Rare",
    "category": "Character",
    "cost": 2,
    "attributes": [
      "Strike"
    ],
    "power": 2000,
    "counter": 1000,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Elbaph",
      "Straw Hat Crew"
    ],
    "effect": "If there is a Character with a cost of 12 or more, this Character gains +3000 power. [On Play] If there is a Character with a cost of 12 or more, give up to 1 of your opponent's Characters −3000 power during this turn.",
    "trigger": null
  },
  {
    "id": "OP17-095",
    "packId": "569117",
    "name": "Roronoa Zoro",
    "rarity": "Common",
    "category": "Character",
    "cost": 2,
    "attributes": [
      "Slash"
    ],
    "power": 2000,
    "counter": 2000,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Elbaph",
      "Straw Hat Crew"
    ],
    "effect": "If there is a Character with a cost of 12 or more, this Character gains +3000 power. If one of your Characters would be removed from the field by your opponent's effect, you may place 3 cards from your trash at the bottom of your deck in any order instead.",
    "trigger": null
  },
  {
    "id": "OP17-089",
    "packId": "569117",
    "name": "Jaguar.D.Saul",
    "rarity": "Rare",
    "category": "Character",
    "cost": 4,
    "attributes": [
      "Strike"
    ],
    "power": 6000,
    "counter": null,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Giant",
      "Elbaph",
      "Former Navy"
    ],
    "effect": "This Character gains +12 cost. [On Play] Look at 3 cards from the top of your deck; reveal up to 1 {Elbaph} type card and add it to your hand. Then, trash the rest.",
    "trigger": null
  },
  {
    "id": "OP15-088",
    "packId": "569115",
    "name": "Pirates Docking Six",
    "rarity": "Rare",
    "category": "Character",
    "cost": 5,
    "attributes": [
      "Strike"
    ],
    "power": 7000,
    "counter": null,
    "colors": [
      "Black"
    ],
    "blockNumber": 4,
    "types": [
      "Straw Hat Crew"
    ],
    "effect": "This Character gains +6 cost. [On Play] You may trash 3 cards from the top of your deck: Play up to 1 {Straw Hat Crew} type Character card with a cost of 2 or less from your trash.",
    "trigger": null
  },
  {
    "id": "OP17-119",
    "packId": "569117",
    "name": "Loki",
    "rarity": "SecretRare",
    "category": "Character",
    "cost": 6,
    "attributes": [
      "Strike"
    ],
    "power": 8000,
    "counter": null,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Giant",
      "Elbaph"
    ],
    "effect": "This Character gains +12 cost, and if it is your opponent's turn, this Character gains +3000 power. [On Play] K.O. your opponent's Characters with a total cost of 4 or less.",
    "trigger": null
  },
  {
    "id": "OP17-093",
    "packId": "569117",
    "name": "Monkey.D.Luffy",
    "rarity": "SuperRare",
    "category": "Character",
    "cost": 8,
    "attributes": [
      "Strike"
    ],
    "power": 8000,
    "counter": null,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Elbaph",
      "The Four Emperors",
      "Straw Hat Crew"
    ],
    "effect": "If there is a Character with a cost of 12 or more, this Character gains [Rush]. [On Play] Draw 1 card and play up to 1 Character card with a cost of 2 or less from your trash.",
    "trigger": null
  },
  {
    "id": "OP04-016",
    "packId": "569104",
    "name": "Bad Manners Kick Course",
    "rarity": "Rare",
    "category": "Event",
    "cost": null,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Red"
    ],
    "blockNumber": 1,
    "types": [
      "Alabasta",
      "Straw Hat Crew"
    ],
    "effect": "[Counter] You may trash 1 card from your hand: Up to 1 of your Leader or Character cards gains +3000 power during this battle.",
    "trigger": "[Trigger] Give up to 1 of your opponent's Leader or Character cards −3000 power during this turn."
  },
  {
    "id": "OP17-098",
    "packId": "569117",
    "name": "Gum-Gum Kong Gun",
    "rarity": "Common",
    "category": "Event",
    "cost": 1,
    "attributes": [],
    "power": null,
    "counter": null,
    "colors": [
      "Black"
    ],
    "blockNumber": 5,
    "types": [
      "Elbaph",
      "The Four Emperors",
      "Straw Hat Crew"
    ],
    "effect": "[Main] You may rest 6 of your DON!! cards: If there is a Character with a cost of 12 or more, K.O. up to 2 of your opponent's Characters with a cost of 6 or less. [Counter] Your Leader gains +3000 power during this battle.",
    "trigger": null
  }
] as const satisfies readonly SaboCardMetadata[];

export const saboFlexCards = [
  { id: 'OP17-081', name: 'Gerd', role: 'Flex · Tier 1', quantity: 0, effect: 'If your Leader has the {Elbaph} type, this Character gains +12 cost. [On Play] You may trash 1 card from your hand: Add up to 1 Character card with a cost of 8 or less other than [Gerd] from your trash to your hand.' },
  { id: 'OP17-082', name: 'Sanji', role: 'Flex · Tier 1', quantity: 0, effect: 'If there is a Character with a cost of 12 or more, this Character gains +3000 power. [On Play] Draw 2 cards and trash 2 cards from your hand.' },
  { id: 'EB04-007', name: 'Roronoa Zoro', role: 'Flex · Tier 2', quantity: 0, effect: '[On Play] Your Leader gains +2000 power until the end of your opponent’s next End Phase. [Activate: Main] [Once Per Turn] If your opponent has a Character with 8000 power or more, this Character gains [Rush: Character] during this turn.' },
  { id: 'OP17-096', name: 'I’m Luffy!! The Man Who Will Be King of the Pirates!!', role: 'Flex · Tier 2', quantity: 0, effect: '[Counter] If there is a Character with a cost of 12 or more, up to 1 of your Leader or Characters gains +4000 power during this battle.' },
  { id: 'OP15-092', name: 'Monkey.D.Luffy', role: 'Flex · Tier 3', quantity: 0, effect: 'Apply each of the following effects based on the number of cards in your trash: • If there are 10 or more cards, this Character’s base power becomes 9000 and it gains +10 cost. • If you have 20 or more cards, during your opponent’s turn, your Leader’s base power becomes 7000. • If you have 30 or more cards, this Character gains +1000 power.' },
  { id: 'OP17-091', name: 'Brook', role: 'Flex · Tier 3', quantity: 0, effect: 'If there is a Character with a cost of 12 or more, this Character gains +3000 power. [On Play] If there is a Character with a cost of 12 or more, your opponent trashes 1 card from their hand.' },
  { id: 'OP15-094', name: 'Roronoa Zoro', role: 'Flex · Tier 3', quantity: 0, effect: 'If your {Straw Hat Crew} type Character other than this Character would be removed from the field by your opponent’s effect, you may trash this Character instead. [Blocker]' },
  { id: 'ST21-003', name: 'Sanji', role: 'Flex · Tier 3', quantity: 0, effect: '[On Play] Select up to 1 of your {Straw Hat Crew} type Characters with 6000 power or more. If the selected Character attacks during this turn, your opponent cannot activate [Blocker].' },
] as const;

export const saboCardArtVariants: Readonly<Record<string, readonly string[]>> = {
  'OP13-004': ['OP13-004_p1', 'OP13-004_p2'],
  'OP01-016': ['OP01-016_p1', 'OP01-016_p2', 'OP01-016_p3', 'OP01-016_p4', 'OP01-016_p5', 'OP01-016_p7', 'OP01-016_p8', 'OP01-016_p9'],
  'ST01-011': ['ST01-011_p1', 'ST01-011_p2', 'ST01-011_p3', 'ST01-011_p4', 'ST01-011_p5'],
  'OP11-012': ['OP11-012_r1'],
  'OP04-016': ['OP04-016_p1', 'OP04-016_p3'],
  'OP17-080': ['OP17-080_p1'],
  'OP17-087': ['OP17-087_p1'],
  'OP17-093': ['OP17-093_p1'],
  'OP17-119': ['OP17-119_p1'],
};

export const saboCardMetadataById: Readonly<Record<string, SaboCardMetadata>> =
  Object.fromEntries(saboCardMetadata.map((card) => [card.id, card]));

export const saboDeckTotal = saboDeck.reduce(
  (total, card) => total + card.quantity,
  0,
);

export const saboPageNavigation = [
  { label: 'Deck', href: '/' },
  { label: 'Pilot', href: '/pilot/' },
  { label: 'Combos', href: '/combos/' },
] as const;

export const cardImageUrl = (id: string): string => `/cards/${id}.png`;

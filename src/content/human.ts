export interface HumanFact {
  emoji: string;
  text: string;
}

export interface HumanContent {
  heading: string;
  intro: string;
  facts: HumanFact[];
}

export const human: HumanContent = {
  heading: 'The human',
  intro: 'Software is the day job. Here is the rest of it.',
  facts: [
    { emoji: '🧒', text: 'Grew up one of five kids — chaos was the default setting.' },
    { emoji: '⚽', text: 'Played D1 college soccer.' },
    { emoji: '🌲', text: 'Catch me outside. Seriously — as much as humanly possible.' },
    {
      emoji: '🎨',
      text: 'Creative in tactile ways: spray-painting surfboards, custom-building shelves.',
    },
    {
      emoji: '🔄',
      text: 'I love being right, but I get even more joy from being proven wrong — especially on an assumption I thought was bulletproof.',
    },
    { emoji: '👶', text: 'Husband, and dad to two young boys.' },
    {
      emoji: '🏆',
      text: 'Will turn anything into a competition, armed with a potentially inflated belief that I can do pretty much anything.',
    },
  ],
};

export interface HumanCard {
  emoji: string;
  title: string;
  text: string;
}

export interface HumanContent {
  heading: string;
  intro: string;
  cards: HumanCard[];
}

export const human: HumanContent = {
  heading: 'The human',
  intro:
    'Software is the day job. The rest is family, curiosity, competition, and building things by hand.',
  cards: [
    {
      emoji: '👨‍👩‍👦',
      title: 'Family is the foundation.',
      text: 'Husband, dad of two young boys, and one of five siblings — I learned early how to listen, adapt, collaborate, and thrive in chaos.',
    },
    {
      emoji: '⚽',
      title: 'Competitive & coachable.',
      text: 'Former D1 soccer player, current pickleballer, occasional golfer and gamification enthusiast.',
    },
    {
      emoji: '🛠️',
      title: 'Tinkerer by nature.',
      text: 'From building custom shelves and spray-painting surfboards to taking apart childhood electronics. Curiosity, discovery, creativity, and building are fundamental to my nature.',
    },
    {
      emoji: '🌲',
      title: 'Better outside.',
      text: 'Travel, fresh air, movement, and family trips keep me energized and give my brain room to connect ideas.',
    },
    {
      emoji: '📚',
      title: 'Fiction-trained imagination.',
      text: 'Fantasy and sci-fi keep me curious about systems, people, and world-building.',
    },
    {
      emoji: '🧭',
      title: 'Calm, practical, optimistic.',
      text: 'I focus on what’s in our control, assume people are trying their best, and try to keep teams moving without losing perspective.',
    },
    {
      emoji: '🤝',
      title: 'People make the work matter.',
      text: 'I work for the people around me as much as the mission — good teams make hard work fun',
    },
  ],
};

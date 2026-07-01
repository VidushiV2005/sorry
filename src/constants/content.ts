// All photo/video paths point to /public/photos and /public/videos.
// Drop your real files there with these exact names (or edit the paths below).

export const PASSWORD = '25122024';

export const COUPLE_PHOTO = '/photos/us-01.jpg';

export interface Memory {
  id: string | number;
  date: string;
  title: string;
  description: string;
  photo: string;
  video?: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    date: 'our kind of usuals',
    title: 'We Had the Most Beautiful Dates Together ',
    description:
      "Every little moment with you became one of my favorite memories. From our laughter to our quiet moments, every date felt like home because I was with you.",
    photo: '/pics/IMG20250816145554.jpg',
  },
  {
    id: 2,
    date: 'just another day',
    title: 'A Random Weekday',
    description:
      "Nothing special was planned, yet it became one of the best moments because we are together.",
    photo: '/pics/random.jpg',
  },
  {
    id: 3,
    date: 'no plans, just us',
    title: 'The Unplanned Trip',
    description:
      "We didn't plan a thing, and enjoyed the most and loved the most.",
    photo: '/pics/IMG20251207114536.jpg',
  },
  {
    id: 4,
    date: 'past midnight',
    title: 'Late Night Calls',
    description:
      "Talking to you till 3am never felt tiring it felt like home.",
    photo: '/pics/1000126839.jpg.jpeg',
  },
  {
    id: 5,
    date: 'just you',
    title: 'Your Expressions',
    description:
      "The faces you make on video calls are my favorite thing in the world.",
    photo: '/pics/Screenshot_2026-04-15-14-57-08-01_6012fa4d4ddec268fc5c7112cbb265e7(1).jpg',
  },
  {
    id: 6,
    date: 'always',
    title: 'Just Us',
    description:
      "No caption needed just you, just me, just this.",
    photo: '/pics/IMG_9860.JPG',
  },
];

// constants/content.ts
export interface LoveThing {
  id: string;
  title: string;
  note: string;
}

export const thingsILove: LoveThing[] = [
  {
    id: 'passion',
    title: 'How Passionately You Lives',
    note: 'The way you throw yourself fully into whatever you love no half measures, ever.',
  },
  {
    id: 'hotwheels',
    title: 'The Hot Wheels',
    note: 'The way your eyes light up over a tiny car like it\'s the best thing in the world.',
  },
  {
    id: 'spiderman',
    title: 'Spider-Man is your first love',
    note: 'You never grew out of it, and honestly, I hope you never do.',
  },
  {
    id: 'oats',
    title: 'Your Love For Oats',
    note: 'A bowl of oats and you\'re genuinely happy there\'s something so pure about that. ps: i can\'t eat that.',
  },
  {
    id: 'jumps',
    title: 'How You Jumps When You are Excited',
    note: 'That little jump when something thrills you I could watch it on repeat forever.',
  },
  {
    id: 'small-things',
    title: 'How Small Things Excite You',
    note: 'You find joy in the tiniest things, and somehow that makes everything more joyful for me too.',
  },
  {
    id: 'concerts',
    title: 'Your Love For Concerts and Music',
    note: 'The way you light up at the name of Travis Scott— pure fanboy energy.',
  },
  {
    id: 'sincerity',
    title: 'How Sincerely You Do Things',
    note: 'Whatever you do, you do it with your whole heart, no shortcuts, no half-effort.',
  },
  {
    id: 'patience',
    title: 'Your Patience With My Blunders',
    note: 'You\'ve never made me feel small for my mistakes just patient, every single time.',
  },
];

export interface LoveNote {
  id: string;
  message: string;
}

// constants/content.ts
export const loveNotes = [
  { id: 1, message: "I'll choose you, every single day. No matter what life throws at us, my heart will always find its way back to you. Rapid se aajaungi jldii.." },
  { id: 2, message: "I'm not going anywhere. You're officially stuck with me. Lifetime subscription. No cancellation policy." },
  { id: 3, message: "I'll always listen to you. Your stories, your dreams, your rants, your excitement. I want to hear it all because every part of you matters to me." },
  { id: 4, message: "I'll always be there for you. Whether you're celebrating your biggest win or having your worst day, you'll never have to face it alone." },
  { id: 5, message: "Your personal skincare manager. Yes, I'll take care of your skincare routine because my handsome boy deserves to glow." },
  { id: 6, message: "I'll keep making you laugh, by saying adangii bhadangii cheeezi , your smile will always be worth it." },
  { id: 7, message: "I'll never stop flirting with you. Prepare yourself for random compliments, surprise kisses, and endless \"you're so cute\" moments." },
  { id: 8, message: "I'll keep falling in love with you. Not just once, but over and over again in every little version of you." },
  { id: 9, message: "I'll make ordinary days feel special. A random date, a walk together, or simply sitting beside you with a pizza puff... with you, everything becomes my favorite memory." },
  { id: 10, message: "I'll be your biggest supporter. When you doubt yourself, I'll remind you how capable, talented, and amazing you really are." },
  { id: 11, message: "I'll share my food... sometimes. Only because I love you. But if you steal my last bite without asking... we're negotiating." },
  { id: 12, message: "I'll remind you to rest. Because even superheroes need sleep, and I need my favorite person healthy and happy." },
  { id: 13, message: "I'll keep making memories with you. More photos, more adventures, more late night calls, more laughs, and more stories we'll tell forever." },
  { id: 14, message: "I'll stay through the hard days too. Love isn't just about the easy moments. I want to hold your hand through every storm until the sunshine comes back." },
  { id: 15, message: "I'll always apologize when I'm wrong. Because loving you is far more important than winning an argument." },
  { id: 16, message: "I'll remind you how handsome you are. Every single day. Even when your hair is messy, you're sleepy, or you insist you \"look terrible.\" (You don't.)" },
  { id: 17, message: "I'll always save a little extra love just for you. Extra hugs, extra forehead kisses, extra cuddles, and a whole lot of \"I love you\"s." },
  { id: 18, message: "I'll keep choosing \"us.\" No matter how busy life gets, you'll always be one of my biggest priorities." },
  { id: 19, message: "I'll always be your little troublemaker. I'll annoy you, steal your hoodie, make fun of you a little, then cuddle you until you forgive me." },
  { id: 20, message: "My favorite place will always be with you. At the end of every day, every adventure, and every dream... if you're there, I'm already home." },
];

export interface ReasonCard {
  id: string;
  text: string;
}

export const reasons: ReasonCard[] = [
  { id: 'r1', text: "I let my frustration speak louder than my love, and that wasn't fair to you." },
  { id: 'r2', text: "I didn't listen the way you needed me to, and I should have." },
  { id: 'r3', text: "I made you doubt how much you mean to me, when you should never have to wonder." },
  { id: 'r4', text: "I was careless with something precious — us — and I know better." },
];

export const promises: string[] = [
  "I won't lie.",
  "I'll listen better.",
  "I'll communicate better.",
  "I'll cherish us.",
  "I'll protect what we have.",
  "I'll never stop choosing you.",
];



export const MUSIC_SRC = '/music/teenage-dreams.mp3';

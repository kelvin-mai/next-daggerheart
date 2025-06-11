import { CardDetails } from '@/lib/types';

export const communities = [
  {
    type: 'community',
    name: 'Highborne',
    image: '/assets/images/srd/community/highborne.jpg',
    text: `<p><em>Being part of a higbhborne community means you're accustomed to a life of elegance, opulance, and prestige within the upper echelons of society.</em></p>
           <p><em><strong>Privlege:</strong></em> You have advantage on rolls to consort with nobles, negotiate prices, or leverage your reputation to get what you want.</p>`,
    artist: 'Julia Metzger',
  },
  {
    type: 'community',
    name: 'Loreborne',
    image: '/assets/images/srd/community/loreborne.jpg',
    text: `<p><em>Being part of a loreborne community means you're from a society that favors strong academic or political prowess.</em></p>
           <p><em><strong>Well-Read:</strong></em> You have advantage on rolls that involve the history, culture, or politics of a prominent person or place.</p>`,
    artist: 'Juan Gutierrez',
  },
  {
    type: 'community',
    name: 'Orderborne',
    image: '/assets/images/srd/community/orderborne.jpg',
    text: `<p><em>Being part of an orderborne community means you're from a collective that focuses on a discipline or faith, and you uphold a set of principles that reflect your experience there.</em></p>
           <p><em><strong>Dedicated:</strong></em> Record three sayings or values your upbringing instilled in you. Once per rest, when you describe how you're embodying one of these principles through your current action, you can roll a d20 as your Hope Die.</p>`,
    artist: 'Rafater',
  },
  {
    type: 'community',
    name: 'Ridgeborne',
    image: '/assets/images/srd/community/ridgeborne.jpg',
    text: `<p><em>Being part of a ridgeborne community means you've called the rocky peaks and sharp cliffs of the mountainside home.</em></p>
           <p><em><strong>Steady:</strong></em> You have advantage on rolls to traverse dangerous cliffs and ledges, navigate harsh environments, and use your survival knowledge.</p>`,
    artist: 'Daarken',
  },
  {
    type: 'community',
    name: 'Seaborne',
    image: '/assets/images/srd/community/seaborne.jpg',
    text: `<p><em>Being part of a seaborne community means you lived on or near a large body of water.</em></p>
           <p><em><strong>Know the Tide:</strong></em> You can sense the ebb and flow of life. When you roll with Fear, ylace a token on this card. You can hold a number of tokens equal to your level. Before you make an action roll, you can spend any number of these tokens to gain a +1 bonus tothe roll of each token spent. At the end of each Session, clear all unspent tokens.</p>`,
    artist: 'Sam Key',
  },
  {
    type: 'community',
    name: 'Slyborne',
    image: '/assets/images/srd/community/slyborne.jpg',
    text: `<p><em>Being part of a slyborne community means you come from a group that operates outside the law, including all manner of criminals, grifters and con artists.</em></p>
           <p><em><strong>Scoundrel:</strong></em> You have advantage on rolls to negotiate with criminals, detect lies, or find a safe place to hide.</p>`,
    artist: 'Paul Scott Canavan',
  },
  {
    type: 'community',
    name: 'Underborne',
    image: '/assets/images/srd/community/underborne.jpg',
    text: `<p><em>Being part of an underborne community means you're from a subterranean society.</em></p>
           <p><em><strong>Low-Light Living:</strong></em> When you're in an area with low light or heavy shadow, you have advantage on rolls to hide, investigate, or perceive details within that area.</p>`,
    artist: 'Irina Nordsol',
  },
  {
    type: 'community',
    name: 'Wanderborne',
    image: '/assets/images/srd/community/wanderborne.jpg',
    text: `<p><em>Being part of a wanderborne community means you've lived as a nomad, forgoing a premanent home and experiencing a wide variety of cultures.</em></p>
           <p><em><strong>Nomadic Pack:</strong></em> Add a Nomadic Pack to your inventory. Once per session , you can spend a Hope to reach into this pack and pull out a mundane item that's useful to your situation. Work with the GM to figure out what item you take out.</p>`,
    artist: 'Paul Scott Canavan',
  },
  {
    type: 'community',
    name: 'Wildborne',
    image: '/assets/images/srd/community/wildborne.jpg',
    text: `<p><em>Being part of a wildborne community means you lived deep within the forest.</em></p>
           <p><em><strong>Lightfoot:</strong></em> Your movement is naturally silennt. You have advantage on rolls to move without being heard.</p>`,
    artist: 'Andreas Rocha',
  },
].map((c) => ({
  ...c,
  credits: 'Daggerheart™ Compatible. Terms at Daggerheart.com',
})) as CardDetails[];

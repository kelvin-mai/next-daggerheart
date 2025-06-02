import type {
  AdversaryDetails,
  AdversaryFeature,
} from '@/lib/types/adversary-creation';
import { capitalize } from '@/lib/utils';

type PreAdversaryDetails = Omit<AdversaryDetails, 'text' | 'type'> & {
  features: (AdversaryFeature & { extra?: string })[];
};

const preEnvironments: PreAdversaryDetails[] = [
  {
    name: 'Abandoned Grove',
    tier: 1,
    description:
      'A former druidic grove lying fallow and fully reclaimed by nature.',
    subDescription: 'Draw in the curious, echo in the past',
    subtype: 'Exploration',
    difficulty: '11',
    potential:
      'Beasts (Bear, Dire Wolf, Glass Snake), Grove Guardians (Minor Treant, Sylvan Soldier, Young Dryad)',
    features: [
      {
        name: 'Overgrown Battlefield',
        type: 'passive',
        description:
          'There has been a battle here. A PC can make an Instinct Roll to identify evidence of that fight. On a success with Hope, learn all three pieces of information below. On a success with Fear, learn two. On a failure, a PC can mark a Stress to learn one and gain advantage on the next action roll to investigate this environment. A PC with an appropriate background or Experience can learn an additional detail and ask a follow-up question about the scene and get a truthful (if not always complete) answer.',
        extra: `<ul class="list-outside list-disc pl-4">
        <li>Traces of a battle (broken weapons and branches, gouges in the ground) litter the ground.</li>
        <li>A moss-covered tree trunk is actually the corpse of a treant.</li>
        <li>Still-standing trees are twisted in strange ways, as if by powerful magic.</li>
        </ul>`,
        flavor:
          'Why did these groups come to blows? Why is the grove unused now?',
      },
      {
        name: 'Barbed Vines',
        type: 'action',
        description:
          "Pick a point within the grove. All targets within Very Close range of that point must succeed on an Agility Reaction Roll or take 1d8+3 physical damage and become Restrained by barbed vines. Restrained creatures until they're freed with a successful Finesse or Strength roll or by dealing at least 6 damage to the vines.",
        flavor:
          'How many vines are there? Where do they grab you? Do they pull you down or lift you off the ground?',
      },
      {
        name: 'You Are Not Welcome Here',
        type: 'action',
        description:
          'A Yound Dryad, two Sylvan Soldiers, and a number of Minor Treants equal to the number of PCs appear to confront the party for their intrusion.',
        flavor:
          'What are the grove guardians concealing? What threat to the forest could the PCs confront to appease the Dryad?',
      },
      {
        name: 'Defiler',
        type: 'action',
        description:
          'Spend a Fear to summon a Minor Chaos Elemental drawn to the echoes of violence and discord. They appear within Far Range of a chosen PC and immediately take the spotlight.',
        flavor:
          'What color does the grass turn as the elementals appears? How does the chaos wrap insects and small wildlife within the grove?',
      },
    ],
  },
  {
    name: 'Ambushed',
    tier: 1,
    description: 'An ambush is set to catch an unsuspecting party off-guard',
    subDescription: 'Overwhelmp, scatter, surround',
    subtype: 'Event',
    difficulty: 'Special (see "Relative Strength")',
    features: [
      {
        name: 'Relative Strength',
        type: 'passive',
        description:
          'The Difficulty of this environment equals that of the adversary with the highest Difficulty.',
        flavor: "Who cues the ambush? What makes it clear they're in charge?",
      },
      {
        name: 'Surprise!',
        type: 'action',
        description:
          'The ambushers reveal themselves to the party, you gain 2 Fear, and the spotlight immediately shifts to one of the ambushing adversaries.',
        flavor:
          'What do the ambushers want from the party? How do their tactics in the ambush reflect that?',
      },
    ],
  },
  {
    name: 'Ambushers',
    tier: 1,
    subtype: 'Event',
    description:
      'An ambush isset by the PCs to catch unsuspecting adversaries off-guard.',
    subDescription: 'Escape, group up, protect the most vulnerable',
    difficulty: 'Special (see "Relative Strength")',
    features: [
      {
        name: 'Relative Strength',
        type: 'passive',
        description:
          'The Difficulty of this environment equals that of the adversary with the highest Difficulty.',
        flavor: 'Which adversary is the least prepared? Which one is the most?',
      },
      {
        name: 'Where Did They Come From?',
        type: 'reaction',
        description:
          'When a PC starts the ambush on unsuspecting adversaries, you lose 2 Fear and the first attack roll a PC makes has advantage.',
        flavor:
          'What are the adversaries in the middle of doing when the ambush starts? How does this impact their approach to the fight?',
      },
    ],
  },
  {
    name: 'Bustling Marketplace',
    tier: 1,
    subtype: 'Social',
    description:
      'The economic heart of the settlement, with local artisans, traveling merchants, and patrons across social classes.',
    subDescription:
      'Buy low, and sell high, tempt and tantalize the wares from near and far',
    difficulty: '10',
    potential: 'Guards (Bladed Guard, Head Guard), Masked Thief, Merchant',
    features: [
      {
        name: 'Tip The Scales',
        type: 'passive',
        description:
          'PCs can gain advantage on a Presence Roll by offering a handful of gold as part of the interaction.',
        flavor:
          'Will any coin be accepted, or only local currency? How overt are the PCs in offering this bribe?',
      },
      {
        name: 'Unexpected Find',
        type: 'action',
        description:
          'Reveal to the PCs that one of the merchants has something they want or need, such as food from their home, a rare book, magical components, a dubious treasure map, or a magical key.',
        flavor:
          'What cost beyond gold will the merchant ask for in exchange for this rarity?',
      },
      {
        name: 'Sticky Fingers',
        type: 'action',
        description:
          "A thief tries to steal something from a PC. The PC must succeed on an Instinct Roll to notice the thieef or lose an item of the GM's choice as the thief escapes to a Close distance. To retrieve the stolen item, the PCs must complete a Progress Countdown (6) to chase down the thief before the thief completes a Consequence Countdown (4) and escapes to their hideout.",
        flavor:
          "What drove thsi person to pickpocketing? Where is the thief's hideout andhow has it avoided notice?",
      },
      {
        name: 'Crowd Closes In',
        type: 'reaction',
        description:
          'When one of the PCs splits from the group, the crowds shift and cut them off from the party.',
        flavor:
          "Where does the crowd's movement carry them? How do they feel about being alone but surrounded?",
      },
    ],
  },
  {
    name: 'Cliffside Ascent',
    tier: 1,
    subtype: 'traversal',
    description:
      'A steep, rocky cliffside tall enough to make traversal dangerous',
    subDescription:
      'Cast the unready down to a rocky doom, draw people in with promise of what lies at the top',
    difficulty: '12',
    potential: 'Construct, Deeproot Defender, Giant Scorpion, Glass Snake',
    features: [
      {
        name: 'The Climb',
        type: 'passive',
        description:
          'Climbing up the cliffside uses a Progress Countdowwn (12). It ticks down according to the following criteria when the PCs make an action roll to climb:',
        extra: `<ul class="list-outside list-disc pl-4">
        <li>Critical Success: Tick down 3</li>
        <li>Success with Hope: Tick down 2</li>
        <li>Success with Fear: Tick down 1</li>
        <li>Failure with Hope: No Advancement</li>
        <li>Failure with Fear: Tick up 1</li>
        </ul>
        <p>When the countdown triggers, the party has made it to the top of the cliff.</p>`,
        flavor:
          'What strange formations are the stones arranged in? What ominious warnings did previous adventurers leave?',
      },
      {
        name: 'Pitons Left Behind',
        type: 'passive',
        description:
          'Previous climbers left behind large metal rods that climbers can use to aid tehir ascent. If a PC using the pitons fails an action roll to climb, they can mark a Stress instead of ticking the countdown up.',
        flavor:
          'What do the shape and material of these pitons tell you about the previous climbers? How far apart are they from one another?',
      },
      {
        name: 'Fall',
        type: 'action',
        description:
          "Spend a Fear to have a PC's handhold fail, plummeting them toward the ground and tick up the countdown by 2. The PC takes 1d12 physical damage if the countdown is between 8 and 12, 2d12 between 4 and 7, and 3d12 at 3 or lower.",
        flavor:
          'How can you tell many others have fallen here before? What lives in these walls thatmight try to scare adventurers into falling for an easy meal?',
      },
    ],
  },
  {
    name: 'Local Tavern',
    tier: 1,
    subtype: 'social',
    description: 'A lively tavern that serves as the social hub for its town.',
    subDescription: 'Provide opportunities for adventurers, nurture community',
    difficulty: '10',
    potential:
      'Guards (Bladed Guard, Head Guard), Mercenaries (Harrier, Sellsword, Spellblade, Weaponmaster), Merchant',
    features: [
      {
        name: "What's the Talk of the Town?",
        type: 'passive',
        description:
          'A PC can ask the bartender, staff, or patrons about local events, rumors, and potential work with a Presence Roll. On a success, they can pick two of the below details to learn — or three if they critically succeed. On a failure, they can pick one and mark a Stress as the local carries on about something irrelevant.',
        extra: `<ul class="list-outside list-disc pl-4">
        <li>A fascinating rumor with a connection to a PC's background</li>
        <li>A promising job for the party involving a nearby threat or situation</li>
        <li>Local folklore that relates to something they've seen</li>
        <li>Town gossip that hints at a community problem</li>
        </ul>`,
        flavor:
          'Who has what kind of information? What gossip do the locals start spreading about the PCs?',
      },
      {
        name: 'Sing For Your Supper',
        type: 'passive',
        description:
          'A PC can perform one time for the guests by making a Presence Roll. On a success, they earn 1d4 handfuls of gold (2d4 if they critically succeed). On a failure, they mark a Stress.',
        flavor:
          "What piece do you perform? What does that piece mean to you? When's the lasttime you performed it for a crowd?",
      },
      {
        name: 'Mysterious Stranger',
        type: 'action',
        description:
          'Reveal a stranger concealing their identity, lurking  in a shaded booth.',
        flavor:
          "What do they want? What's their impression of the PCs? What mannerisms or accessories do they have?",
      },
      {
        name: 'Someone Comes to Town',
        type: 'action',
        description:
          "Introduce a significant NPC who wants to hire the party for something or who relates to a PC's background",
        flavor:
          'Did they know the PCs were here? What do they want in this town?',
      },
      {
        name: 'Bar Fight!',
        type: 'action',
        description:
          'Spend a Fear to have a bar fight erupt in the tavern. When a PC tries to move through the tavern while the fight persists, they must succeed on an Agility or Presence Roll or take 1d6+2 physical damage from a wild swing or thrown object. A PC cantry to activate this feature by succeeding on an action roll that would provoke tavern patrons.',
        flavor: 'Who started the fight? What will it take to stop it?',
      },
    ],
  },
  {
    name: 'Outpost Town',
    tier: 1,
    subtype: 'social',
    description:
      'A small town on the outskirts of a nation or region, close to a dungeon, tombs, or other adventuring destinations.',
    subDescription:
      'Drive the desperate to a certain doom, profit off of ragged hope',
    difficulty: '12',
    potential:
      'Jagged Knife Bandits (Hexer, Kneebreaker, Lackey, Lieutenant, Shadow, Sniper), Masked Thief, Merchant',
    features: [
      {
        name: 'Rumors Abound',
        type: 'passive',
        description:
          'Gossip is the fastest-traveling currency in the realm. A PC can inquire about major events by making a Presence Roll. What they learn depends on the outcome of their roll, basedon the following criteria:',
        extra: `<ul class="list-outside list-disc pl-4">
        <li>Critical Success: Learn about two major events. The PC can ask one follow-up question about one of the rumors and get a truthful (if not always complete) answer.</li>
        <li>Success with Hope: Learn about two events, at least one of which is relevant to the character's background</li>
        <li>Success with Fear: Learn an alarming rumor related to the character's background.</li>
        <li>Any Failure: The locals respond poorly to their inquirie. The PC must mark a Stress to learn one relevant rumor.</li>
        </ul>`,
        flavor:
          'What news do the PCs have that they colud pass along to curious travelers? What do the locals think about these events?',
      },
      {
        name: 'Society of the Broken Compass',
        type: 'passive',
        description:
          'An adventuring society maintains a chapterhouse here, where heroes trade boasts and rumors, drink to their imagined successes, and sceme to undermine their rivals.',
        flavor:
          'What boasts do the adventurers here make, andwhich do you think are true?',
      },
      {
        name: 'Rival Party',
        type: 'passive',
        description:
          'Another adventuring party is here, seeking the same treasure or leads as the PCs.',
        flavor:
          'Which PC has a connection to one of the rival party members? Do they approach the PC first or do they wait for the PC to move?',
      },
      {
        name: "It'd Be a Shame If Something Happened to Your Store",
        type: 'action',
        description:
          'The PCs witness as agents of a local crime boss shake down a general goods store.',
        flavor: 'What trouble does it cause if the PCs intervene?',
      },
      {
        name: 'Wrong Place, Wrong Time',
        type: 'reaction',
        description:
          'At night, or when the party is alone in a back alley, you can spend a Fear to introduce a group of thieves who try to rob them. The thieves appear at Close range of a chosen PC and include a Jagged Knife Kneebreaker, as many Lackeys as there are PCs, and a Lieutenant. For a larger party, add a Hexer or Sniper.',
        flavor:
          'What details show the party that these people are desperate former adventurers?',
      },
    ],
  },
  {
    name: 'Raging River',
    tier: 1,
    subtype: 'traversal',
    description:
      'A swift-moving river without a bridge crossing, deep enough to sweep away most people.',
    subDescription: 'Bar crossing, carry away the unready, divide the land',
    difficulty: '10',
    potential:
      'Beasts (Bear, Glass Snake), Jagged Knife Bandits (Hexer, Kneebreaker, Lackey, Lieutenant, Shadow, Sniper)',
    features: [
      {
        name: 'Dangerous Crossing',
        type: 'passive',
        description:
          'Crossing the river requires the party to complete a Progress Countdown (4). A PC who rolls a failure with Fear is immediately targeted by the "Undertow" action without requiring a Fear to be spent on the feature.',
        flavor:
          'Have any of the PCs forded rivers like this before? Are any of them afraid of drowning?',
      },
      {
        name: 'Undertow',
        type: 'action',
        description:
          'Spend a Fear to catch a PC in the undertow. They must make an Agility Reaction Roll. On a failure, they take 1d6+1 physical damage and are moved a Close distance down the river, becoming Vulnerable until they get out of the river. On a success, they must mark a Stress.',
        flavor:
          'What trinkets and baubles lie along the bottom of the riverbed? Do predators swim these rivers? ',
      },
      {
        name: 'Patient Hunter',
        type: 'action',
        description:
          'Spend a Fear to summon a Glass Snake within Close range of a chosen PC. The Snake appears in or near the river and immediately takes the spotlight to use their "Spinning Serpent" action.',
        flavor:
          'What treasures does the beast have in their burrow? What travelers have already fallen victim to this predator?',
      },
    ],
  },

  {
    name: 'Cult Ritual',
    tier: 2,
    subtype: 'event',
    description:
      'A Fallen cult assembles arounda sigil of the defeated gods and a bonfire that burns a sickly shade of green.',
    subDescription:
      'Profane the land, unite the Mortal Realm with the Circles Below',
    difficulty: '14',
    potential:
      'Cult of the Fallen (Cult Adept, Cult Fang, Cult Initiate, Secret-Keeper)',
    features: [
      {
        name: 'Desecrated Ground',
        type: 'passive',
        description: `Cultists dedicated this place to
the Fallen Gods, and their foul infl uence seeps into it. Reduce
the PCs' Hope Die to a d10 while in this environment. The
desecration can be removed with a Progress Countdown (6).`,
        flavor: `
How do the PCs fi rst notice that something is wrong about this place?
What fears resurface while hope is kept at bay?`,
      },
      {
        name: 'Blasphemous Might',
        type: 'action',
        description: `A portion of the ritual's power is
diverted into a cult member to fi ght off interlopers. Choose one
adversary to become Imbued with terrible magic until the scene
ends or they're defeated. An Imbued adversary immediately
takes the spotlight and gains one of the following benefi ts, or all
three if you spend a Fear:`,
        extra: `<ul class="list-outside list-disc pl-4">
<li>They gain advantage on all attacks.</li>
<li>They deal an extra 1d10 damage on a successful attack.</li>
<li>They gain the following feature:
<p><em><strong>Relentless (2) - Passive.</em></strong> This adversary can be spotlighted
up to two times per GM turn. Spend Fear as usual to
spotlight them.</p></li></ul>`,
        flavor:
          'How does th eenemy change in appearance? What fears do their blows bring to the surface?',
      },
      {
        name: 'The Summoning',
        type: 'reaction',
        description: `Countdown (6). When the PCs enter
the scene or the cult begins the ritual to summon a demon,
activate the countdown. Designate one adversary to lead
the ritual. The countdown ticks down when a PC rolls with
Fear. When it triggers, summon a Minor Demon within Very
Close range of the ritual's leader. If the leader is defeated, the
countdown ends with no eff ect as the ritual fails.`,
        flavor:
          'What will the cult do with this leashed demon if they succeed? What will they try to summon next?',
      },
      {
        name: 'Complete the Ritual',
        type: 'reaction',
        description: `If the ritual's leader is targeted by
an attack or spell, an ally within Very Close range of them can
mark a Stress to be targeted by that attack or spell instead.`,
        flavor:
          'What does it feel like to see such devotion turned to the pursuit of fear and domination?',
      },
    ],
  },
  {
    name: 'Hallowed Temple',
    tier: 2,
    subtype: 'social',
    description:
      'A bustling but well-kept temple that provides healing and hosts regular services, overseen by a priest or seraph.',
    subDescription:
      'Connect the Mortal Realm with the Hallows Above, display the power of the divine, provide aid and succor to the faithful',
    difficulty: '13',
    potential: 'Guards (Archer Guard, Bladed Guard, Head Guard)',
    features: [
      {
        name: 'A Place of Healing',
        type: 'passive',
        description:
          'A PC who takes a rest in the Hallowed Temple automatically clears all HP.',
        flavor:
          'What does the incense smell like? What kinds of songs do the acolytes sing?',
      },
      {
        name: 'Divine Guidance',
        type: 'passive',
        description: `A PC who prays to a deity while in the
Hallowed Temple can make an Instinct Roll to receive answers.
If the god they beseech isn't welcome in this temple, the roll is
made with disadvantage.`,
        extra: `<ul class="list-outside list-disc pl-4">
<li>Critical Success: The PC gains clear information. Additionally,
they gain 1d4 Hope, which can be distributed between the
party if they share the vision and guidance they received.</li>
<li>Success with Hope: The PC receives clear information.</li>
<li>Success with Fear: The PC receives brief fl ashes of insight
and an emotional impression conveying an answer.</li>
<li>Any Failure: The PC receives only vague flashes. They can
mark a Stress to receive one clear image without context.</li></ul>`,
        flavor:
          'What does it feel like as you are touched by this vision? What feeling lingers after the images have passed?',
      },
      {
        name: 'Relentless Hope',
        type: 'reaction',
        description:
          'Once per scene, each PC can mark a Stress to turn a result with Fear into a result with Hope.',
        flavor:
          'What emotions or memories do you connect with when fear presses in?',
      },
      {
        name: 'Divine Censure',
        type: 'reaction',
        description:
          'When the PCs have trespassed, blasphemed, or offended the clergy, you can spend a Fear to summon a High Seraph and 1d4 Bladed Guards within Close range of the senior priests to reinforce their will.',
        flavor:
          'What symbols or icons do they bear that signal they are anointed agents of the divinity? Who leads the group and what led them to this calling?',
      },
    ],
  },
  {
    name: 'Haunted City',
    tier: 2,
    subtype: 'exploration',
    description:
      'An abandoned city populated by the restless spirits of eras past.',
    subDescription:
      'Misdirect and disorient, replay apocalypses both public and personal',
    difficulty: '14',
    potential:
      'Ghosts (Spectral Archer, Spectral Captain, Spectral Guardian), ghostly versions of other adversaries (see "Ghostly Form")',
    features: [
      {
        name: 'Buried Knowledge',
        type: 'passive',
        description:
          'The city has countless mysteries to unfold. A PC who seeks knowledge about the fallen city can make an Instinct or Knowledge Roll to learn about this place and discover (potentially haunted) loot.',
        extra: `<ul class="list-outside list-disc pl-4">
<li>Critical Success: Gain valuable information and a related useful item.</li>
<li>Success with Hope: Gain valuable information.</li>
<li>Success with Fear: Uncover vague or incomplete information.</li>
<li>Any Failure: Mark a Stress to fi nd a lead after an exhaustive search.</li>
</ul>`,
        flavor:
          'What greater secrets does the city contain? Why have so many ghosts lingered here? What doomed adventurers have met a bad fate here already?',
      },
      {
        name: 'Ghostly Form',
        type: 'passive',
        description:
          'Adversaries who appear here are of a ghostly form. They have resistance to physical damage and can mark a Stress to move up to Close range through solid objects.',
        flavor:
          'What injuries to their physical form speak to their cause of death? What unfulfilled purpose holds them in the Mortal Plane',
      },
      {
        name: 'Death Ends',
        type: 'action',
        description:
          'The ghosts of an earlier era manifest scenes from their bygone era, such as a street festival, a revolution, or a heist. These hauntings change the layout of the city around the PCs, blocking the way behind them, forcing a detour, or presenting them with a challenge, such as mistaking them for rival thieves during the heist.',
        flavor: 'What do the ghosts want from you? What do you need from them?',
      },
      {
        name: 'Apocolypse Then',
        type: 'action',
        description:
          'Spend a Fear to manifest the echo of a past disaster that ravaged the city. Activate a Progress Countdown (5) as the disaster replays around the PCs. To complete the countdown and escape the catastrophe, the PCs must overcome threats such as rampaging fi res, stampeding civilians, collapsing buildings, or crumbling streets, while recalling history and fi nding clues to escape the inevitable.',
        flavor:
          'Is this the disaster that led the city to be abandoned? What is known about this disaster, and how could that help the PCs escape?',
      },
    ],
  },
  {
    name: 'Mountain Pass',
    tier: 2,
    subtype: 'traversal',
    description:
      'Stony peaks that pierce the clouds, with a twisting path winding its way up and over through many switchbacks.',
    subDescription:
      'Exact a chilling toll in supplies and stamina, reveal magical tampering, slow down travel',
    difficulty: '15',
    potential:
      'Beasts (Bear, Giant Eagle, Glass Snake), Chaos Skull, Minotaur Wrecker, Mortal Hunter',
    features: [
      {
        name: 'Engraved Sigils',
        type: 'passive',
        description: `
Large markings and engravings
have been made in the mountainside. A PC with a relevant
background or Experience identifi es them as weather magic
increasing the power of the icy winds. A PC who succeeds on a
Knowledge Roll can recall information about the sigils, potential
information about their creators, and the knowledge of how to
dispel them. If a PC critically succeeds, they recognize that the
sigils are of a style created by ridgeborne enchanters and they
gain advantage on a roll to dispel the sigils.
        `,
        flavor:
          'Who laid this enchantment? Are they nearby? Why did they want the weather to be more daunting?',
      },
      {
        name: 'Avalanche',
        type: 'action',
        description: `
Spend a Fear to carve the mountain with
an icy torrent, causing an avalanche. All PCs in its path must
succeed on an Agility or Strength Reaction Roll or be bowled
over and carried down the mountain. A PC using rope, pitons, or
other climbing gear gains advantage on this roll. Targets who fail
are knocked down the mountain to Far range, take 2d20 physical
damage, and must mark a Stress. Targets who succeed must
mark a Stress.
        `,
        flavor:
          'How do the PCs try to weather the avalanche? What approach do the characters take to find one another when their companions go hurtling down the mountainside?',
      },
      {
        name: 'Raptor Nest',
        type: 'reaction',
        description: `
When the PCs enter the raptors' hunting
grounds, two Giant Eagles appear at Very Far range of a chosen
PC, identifying the PCs as likely prey.
        `,
        flavor:
          'How long has it been since the eagles last found prey? Do they have eggs in their nest, or unfledged young?',
      },
      {
        name: 'Icy Winds',
        type: 'reaction',
        description: `
Countdown (Loop 4). When the PCs enter
the mountain pass, activate the countdown. When it triggers,
all characters traveling through the pass must succeed on a
Strength Reaction Roll or mark a Stress. A PC wearing clothes
appropriate for extreme cold gains advantage on these rolls.`,
        flavor:
          "What parts of the PC's bodies go numb first? How do they try to keep warm as they press forward?",
      },
    ],
  },
];

export const environments: AdversaryDetails[] = preEnvironments.map(
  (environment) => ({
    ...environment,
    type: 'environment',
    text: `${environment.features
      .map(
        (feat) =>
          `<p><strong><em>${capitalize(feat.name)} - ${capitalize(feat.type)}: </em></strong> ${feat.description}</p>
      ${feat.extra ? feat.extra : ''}
      ${feat.flavor ? `<p><em>${feat.flavor}</em></p>` : ''}`,
      )
      .join('')}`,
  }),
);

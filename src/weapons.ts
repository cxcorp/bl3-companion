import { flatMap } from 'lodash-es'

export type Tier = 'S' | 'A' | 'B' | 'C' | 'D' | 'E'
export const tiers: Tier[] = ['S', 'A', 'B', 'C', 'D', 'E']

export interface Weapon {
  name: string
  url?: string
  tier: Tier
}

const weaponMap: Record<
  Tier,
  {
    name: string
    url?: string
  }[]
> = {
  S: [
    {
      name: 'Anarchy',
      url: 'https://borderlands.fandom.com/wiki/Anarchy_(shotgun)',
    },
    { name: 'Cutsman', url: 'https://borderlands.fandom.com/wiki/Cutsman' },
    { name: 'Hellshock', url: 'https://borderlands.fandom.com/wiki/Hellshock' },
    { name: 'Krakatoa', url: 'https://borderlands.fandom.com/wiki/Krakatoa' },
    {
      name: "Kyb's Worth",
      url: 'https://borderlands.fandom.com/wiki/Kyb%27s_Worth',
    },
    { name: 'The Lob', url: 'https://borderlands.fandom.com/wiki/The_Lob' },
    {
      name: 'Projectile Recursion',
      url: 'https://borderlands.fandom.com/wiki/Projectile_Recursion',
    },
    {
      name: 'Redistributor',
      url: 'https://borderlands.fandom.com/wiki/Redistributor',
    },
    {
      name: 'Sickle',
      url: 'https://borderlands.fandom.com/wiki/Sickle_(assault_rifle)',
    },
    {
      name: 'Unseen Threat',
      url: 'https://borderlands.fandom.com/wiki/Unseen_Threat',
    },
    {
      name: 'Wedding Invitation',
      url: 'https://borderlands.fandom.com/wiki/Wedding_Invitation',
    },
    {
      name: 'Scourge',
      url: 'https://borderlands.fandom.com/wiki/Scourge_(rocket_launcher)',
    },
  ],
  A: [
    {
      name: 'Breath of the Dying',
      url: 'https://borderlands.fandom.com/wiki/Breath_of_the_Dying',
    },
    {
      name: 'Brainstormer',
      url: 'https://borderlands.fandom.com/wiki/Brainstormer',
    },
    { name: 'Carrier', url: 'https://borderlands.fandom.com/wiki/Carrier' },
    {
      name: 'Clairvoyance',
      url: 'https://borderlands.fandom.com/wiki/Clairvoyance',
    },
    {
      name: 'Conference Call',
      url:
        'https://borderlands.fandom.com/wiki/Conference_Call_(Borderlands_3)',
    },
    {
      name: 'Dictator',
      url: 'https://borderlands.fandom.com/wiki/The_Dictator',
    },
    {
      name: 'The Garcia',
      url: 'https://borderlands.fandom.com/wiki/The_Garcia',
    },
    {
      name: 'Hyperfocus XZ41',
      url: 'https://borderlands.fandom.com/wiki/XZ41',
    },
    { name: 'Insider', url: 'https://borderlands.fandom.com/wiki/Insider' },
    { name: 'ION LASER', url: 'https://borderlands.fandom.com/wiki/ION_LASER' },
    {
      name: 'Little Yeeti',
      url: 'https://borderlands.fandom.com/wiki/Little_Yeeti',
    },
    {
      name: 'Lyuda',
      url: 'https://borderlands.fandom.com/wiki/Lyuda_(Borderlands_3)',
    },
    {
      name: 'Nothingness',
      url: 'https://borderlands.fandom.com/wiki/Nothingness',
    },
    {
      name: 'Seventh Sense',
      url: 'https://borderlands.fandom.com/wiki/Seventh_Sense',
    },
    { name: 'Shocker', url: 'https://borderlands.fandom.com/wiki/Shocker' },
    {
      name: 'Soulrender',
      url: 'https://borderlands.fandom.com/wiki/Soulrender',
    },
    {
      name: 'Star Helix',
      url: 'https://borderlands.fandom.com/wiki/Star_Helix',
    },
    { name: 'Storm', url: 'https://borderlands.fandom.com/wiki/Storm' },
    {
      name: 'Wagon Wheel',
      url: 'https://borderlands.fandom.com/wiki/Wagon_Wheel',
    },
    {
      name: 'Cocky Bastard',
      url: 'https://borderlands.fandom.com/wiki/Cocky_Bastard',
    },
    {
      name: 'Maggie',
      url: 'https://borderlands.fandom.com/wiki/Maggie_(Borderlands_3)',
    },
    {
      name: 'ION CANNON',
      url: 'https://borderlands.fandom.com/wiki/ION_CANNON',
    },
    {
      name: 'Skullsmasher',
      url: 'https://borderlands.fandom.com/wiki/Skullmasher_(Borderlands_3)',
    },
    { name: 'Moonfire', url: 'https://borderlands.fandom.com/wiki/Moonfire' },
    { name: 'Scoville', url: 'https://borderlands.fandom.com/wiki/Scoville' },
    {
      name: 'Night Hawkin',
      url: 'https://borderlands.fandom.com/wiki/Night_Hawkin',
    },
    {
      name: 'Bekah',
      url: 'https://borderlands.fandom.com/wiki/Bekah_(Borderlands_3)',
    },
    {
      name: "Lucian's Call",
      url: 'https://borderlands.fandom.com/wiki/Lucian%27s_Call',
    },
    { name: 'Lucky 7', url: 'https://borderlands.fandom.com/wiki/Lucky_7' },
    {
      name: 'Nukem',
      url: 'https://borderlands.fandom.com/wiki/Nukem_(Borderlands_3)',
    },
    {
      name: "Rowan's Call",
      url: 'https://borderlands.fandom.com/wiki/Rowan%27s_Call',
    },
    {
      name: 'Flakker',
      url: 'https://borderlands.fandom.com/wiki/Flakker_(Borderlands_3)',
    },
    {
      name: 'Love Drill',
      url: 'https://borderlands.fandom.com/wiki/Love_Drill',
    },
    { name: 'Good Juju', url: 'https://borderlands.fandom.com/wiki/Good_Juju' },
  ],
  B: [
    {
      name: "Crader's EM-P5",
      url: 'https://borderlands.fandom.com/wiki/Crader%27s_EM-P5',
    },
    {
      name: "Starou's Burn",
      url: 'https://borderlands.fandom.com/wiki/Stauros%27_Burn',
    },
    {
      name: 'Nimble Jack',
      url: 'https://borderlands.fandom.com/wiki/Nimble_Jack',
    },
    {
      name: 'Flama Diddle',
      url: 'https://borderlands.fandom.com/wiki/Flama_Diddle',
    },
    {
      name: 'One Pump Chump',
      url: 'https://borderlands.fandom.com/wiki/One_Pump_Chump',
    },
    { name: 'Oldridion', url: 'https://borderlands.fandom.com/wiki/Oldridian' },
    {
      name: 'Woodblocker',
      url: 'https://borderlands.fandom.com/wiki/Woodblocker',
    },
    {
      name: 'Hydrafrost',
      url: 'https://borderlands.fandom.com/wiki/Hydrafrost',
    },
    { name: 'Crossroad', url: 'https://borderlands.fandom.com/wiki/Crossroad' },
    { name: 'Warlord', url: 'https://borderlands.fandom.com/wiki/Warlord' },
    {
      name: "Tigg's Boom",
      url: 'https://borderlands.fandom.com/wiki/Tiggs%27_Boom',
    },
    { name: 'AAA', url: 'https://borderlands.fandom.com/wiki/AAA' },
    { name: 'Alchemist', url: 'https://borderlands.fandom.com/wiki/Alchemist' },
    { name: 'Butcher', url: 'https://borderlands.fandom.com/wiki/Butcher' },
    { name: 'The Duc', url: 'https://borderlands.fandom.com/wiki/The_Duc' },
    { name: 'Faisor', url: 'https://borderlands.fandom.com/wiki/Faisor' },
    { name: 'Firestorm', url: 'https://borderlands.fandom.com/wiki/Firestorm' },
    {
      name: 'Headsplosion',
      url: 'https://borderlands.fandom.com/wiki/Headsplosion',
    },
    {
      name: 'Hellwalker',
      url: 'https://borderlands.fandom.com/wiki/Hellwalker',
    },
    {
      name: "Juliet's Dazzle",
      url: 'https://borderlands.fandom.com/wiki/Juliet%27s_Dazzle',
    },
    { name: 'Kaos', url: 'https://borderlands.fandom.com/wiki/Kaos' },
    {
      name: "Kill-o'-the-Wisp",
      url: 'https://borderlands.fandom.com/wiki/Kill-o%27-the-Wisp',
    },
    {
      name: 'Laser Sploder',
      url: 'https://borderlands.fandom.com/wiki/Laser-Sploder',
    },
    { name: 'Linoge', url: 'https://borderlands.fandom.com/wiki/Linoge' },
    { name: 'Nemesis', url: 'https://borderlands.fandom.com/wiki/Nemesis' },
    {
      name: "Queen's Call",
      url: 'https://borderlands.fandom.com/wiki/Queen%27s_Call',
    },
    {
      name: "King's Call",
      url: 'https://borderlands.fandom.com/wiki/King%27s_Call',
    },
    { name: 'Redline', url: 'https://borderlands.fandom.com/wiki/Redline' },
    {
      name: "Roisen's Thorns",
      url: 'https://borderlands.fandom.com/wiki/Roisen%27s_Thorns',
    },
    {
      name: 'Seeryul Killer',
      url: 'https://borderlands.fandom.com/wiki/Seeryul_Killur',
    },
    { name: 'SkekSil', url: 'https://borderlands.fandom.com/wiki/SkekSil' },
    {
      name: "Tankman's Shield",
      url: 'https://borderlands.fandom.com/wiki/Tankman%27s_Shield',
    },
    {
      name: 'Trevonator',
      url: 'https://borderlands.fandom.com/wiki/Trevonator',
    },
    {
      name: 'Tsunami',
      url: 'https://borderlands.fandom.com/wiki/Tsunami_(Borderlands_3)',
    },
    {
      name: "Zheitsev's Eruption",
      url: 'https://borderlands.fandom.com/wiki/Zheitsev%27s_Eruption',
    },
    { name: 'Damned', url: 'https://borderlands.fandom.com/wiki/Damned' },
    { name: 'Craps', url: 'https://borderlands.fandom.com/wiki/Craps' },
    {
      name: 'Lead Sprinkler',
      url: 'https://borderlands.fandom.com/wiki/Lead_Sprinkler',
    },
    {
      name: 'Shredifier',
      url: 'https://borderlands.fandom.com/wiki/Shredifier_(Borderlands_3)',
    },
  ],
  C: [
    { name: 'The Flood', url: 'https://borderlands.fandom.com/wiki/The_Flood' },
    {
      name: 'Creamer',
      url: 'https://borderlands.fandom.com/wiki/Creamer_(Borderlands_3)',
    },
    {
      name: 'Sleeping Giant',
      url: 'https://borderlands.fandom.com/wiki/Sleeping_Giant',
    },
    { name: '9-Volt', url: 'https://borderlands.fandom.com/wiki/9-Volt' },
    {
      name: 'Baby Maker',
      url: 'https://borderlands.fandom.com/wiki/Baby_Maker_(Borderlands_3)',
    },
    {
      name: 'Barrage',
      url: 'https://borderlands.fandom.com/wiki/Barrage_(assault_rifle)',
    },
    {
      name: 'The Boring Gun',
      url: 'https://borderlands.fandom.com/wiki/The_Boring_Gun',
    },
    {
      name: 'Cheap Tips',
      url: 'https://borderlands.fandom.com/wiki/Cheap_Tips',
    },
    {
      name: 'Cloud Kill',
      url: 'https://borderlands.fandom.com/wiki/Cloud_Kill_(SMG)',
    },
    {
      name: 'Companion',
      url: 'https://borderlands.fandom.com/wiki/The_Companion',
    },
    {
      name: "Vosk's Deathgrip",
      url: 'https://borderlands.fandom.com/wiki/Vosk%27s_Deathgrip',
    },
    {
      name: 'Destructo Spinner',
      url: 'https://borderlands.fandom.com/wiki/Destructo_Spinner',
    },
    {
      name: 'Devastator',
      url: 'https://borderlands.fandom.com/wiki/Devastator_(Borderlands_3)',
    },
    { name: 'Devoted', url: 'https://borderlands.fandom.com/wiki/Devoted' },
    {
      name: "Devil's Forsum",
      url: 'https://borderlands.fandom.com/wiki/Devils_Foursum',
    },
    {
      name: 'Embrace the Pain',
      url:
        'https://borderlands.fandom.com/wiki/Embrace_the_Pain_(assault_rifle)',
    },
    {
      name: 'S3RV-80S-EXECUTE',
      url: 'https://borderlands.fandom.com/wiki/S3RV-80S-EXECUTE',
    },
    {
      name: 'Fearmonger',
      url: 'https://borderlands.fandom.com/wiki/Fearmonger',
    },
    {
      name: 'Gatling Gun',
      url: 'https://borderlands.fandom.com/wiki/Gatling_Gun_(Borderlands_3)',
    },
    {
      name: 'Handsome Jackhammer',
      url: 'https://borderlands.fandom.com/wiki/Handsome_Jackhammer',
    },
    {
      name: 'Heart Breaker',
      url: 'https://borderlands.fandom.com/wiki/Heart_Breaker_(Borderlands_3)',
    },
    {
      name: 'Hellfire',
      url: 'https://borderlands.fandom.com/wiki/Hellfire_(Borderlands_3)',
    },
    {
      name: 'Hive',
      url: 'https://borderlands.fandom.com/wiki/Hive_(Borderlands_3)',
    },
    { name: 'Horizon', url: 'https://borderlands.fandom.com/wiki/The_Horizon' },
    {
      name: 'Hornet',
      url: 'https://borderlands.fandom.com/wiki/Hornet_(Borderlands_3)',
    },
    { name: 'Linc', url: 'https://borderlands.fandom.com/wiki/Linc' },
    {
      name: 'Pain Is Power',
      url: 'https://borderlands.fandom.com/wiki/Pain_is_Power_(assault_rifle)',
    },
    {
      name: 'Masterwork Crossbow',
      url: 'https://borderlands.fandom.com/wiki/Masterwork_Crossbow',
    },
    { name: 'Monocle', url: 'https://borderlands.fandom.com/wiki/Monocle' },
    {
      name: 'Mind Killer',
      url: 'https://borderlands.fandom.com/wiki/Mind-Killer',
    },
    { name: 'Mutant', url: 'https://borderlands.fandom.com/wiki/Mutant' },
    {
      name: 'Pestilence',
      url: 'https://borderlands.fandom.com/wiki/Pestilence',
    },
    { name: 'Phebert', url: 'https://borderlands.fandom.com/wiki/Phebert' },
    { name: 'Sellout', url: 'https://borderlands.fandom.com/wiki/Sellout' },
    { name: 'SF Force', url: 'https://borderlands.fandom.com/wiki/SF_Force' },
    {
      name: 'Slow Hand',
      url: 'https://borderlands.fandom.com/wiki/Slow_Hand_(Borderlands_3)',
    },
    {
      name: 'Thunderball Fists',
      url:
        'https://borderlands.fandom.com/wiki/Thunderball_Fists_(Borderlands_3)',
    },
    {
      name: 'Tidal Wave',
      url: 'https://borderlands.fandom.com/wiki/The_Tidal_Wave_(Borderlands_3)',
    },
    { name: 'Try-Bolt', url: 'https://borderlands.fandom.com/wiki/Try-Bolt' },
    {
      name: 'Unforgiven',
      url: 'https://borderlands.fandom.com/wiki/Unforgiven_(Borderlands_3)',
    },
    { name: 'Westergun', url: 'https://borderlands.fandom.com/wiki/Westergun' },
    { name: 'Freeman', url: 'https://borderlands.fandom.com/wiki/Freeman' },
    {
      name: 'Ogre',
      url: 'https://borderlands.fandom.com/wiki/Ogre_(Borderlands_3)',
    },
    {
      name: 'Polyaimorous',
      url: 'https://borderlands.fandom.com/wiki/Polyaimourous',
    },
    {
      name: "Ruby's Wrath",
      url: 'https://borderlands.fandom.com/wiki/Ruby%27s_Wrath',
    },
    {
      name: 'Face Puncher',
      url: 'https://borderlands.fandom.com/wiki/Face-puncher',
    },
  ],
  D: [
    {
      name: 'Amazing Grace',
      url: 'https://borderlands.fandom.com/wiki/Amazing_Grace',
    },
    {
      name: 'AutoAimè',
      url: 'https://borderlands.fandom.com/wiki/AutoAim%C3%A8',
    },
    { name: 'Bangarang', url: 'https://borderlands.fandom.com/wiki/Bangarang' },
    { name: 'Boomer', url: 'https://borderlands.fandom.com/wiki/Boomer_(SMG)' },
    { name: 'Breeder', url: 'https://borderlands.fandom.com/wiki/Breeder' },
    { name: 'Echo', url: 'https://borderlands.fandom.com/wiki/Echo' },
    {
      name: "Ember's Purge",
      url: 'https://borderlands.fandom.com/wiki/Ember%27s_Purge',
    },
    {
      name: 'Gunerang',
      url: 'https://borderlands.fandom.com/wiki/Gunerang_(Borderlands_3)',
    },
    {
      name: 'Infinity',
      url: 'https://borderlands.fandom.com/wiki/Infinity_(Borderlands_3)',
    },
    {
      name: 'Jericho',
      url: 'https://borderlands.fandom.com/wiki/Jericho_(rocket_launcher)',
    },
    {
      name: "Malak's Bane",
      url: 'https://borderlands.fandom.com/wiki/Malak%27s_Bane',
    },
    {
      name: 'Magnificient',
      url: 'https://borderlands.fandom.com/wiki/Magnificient',
    },
    {
      name: 'Long Musket',
      url: 'https://borderlands.fandom.com/wiki/Long_Musket',
    },
    {
      name: 'Night Flyer',
      url: 'https://borderlands.fandom.com/wiki/Night_Flyer',
    },
    { name: 'Occultist', url: 'https://borderlands.fandom.com/wiki/Occultist' },
    { name: 'Polybius', url: 'https://borderlands.fandom.com/wiki/Polybius' },
    {
      name: 'Predatory Lending',
      url: 'https://borderlands.fandom.com/wiki/Predatory_Lending',
    },
    {
      name: 'Psycho Stabber',
      url: 'https://borderlands.fandom.com/wiki/Psycho_Stabber',
    },
    {
      name: 'Quadomizer',
      url: 'https://borderlands.fandom.com/wiki/Quadomizer',
    },
    {
      name: 'Rebel Yell',
      url: 'https://borderlands.fandom.com/wiki/Rebel_Yell',
    },
    {
      name: "Sledge's Shotgun",
      url:
        'https://borderlands.fandom.com/wiki/Sledge%27s_Shotgun_(Borderlands_3)',
    },
    {
      name: 'Tunguska',
      url: 'https://borderlands.fandom.com/wiki/Tunguska_(Borderlands_3)',
    },
    {
      name: 'Ten Gallon',
      url: 'https://borderlands.fandom.com/wiki/Ten_Gallon',
    },
    {
      name: 'Frozen Devil',
      url: 'https://borderlands.fandom.com/wiki/Frozen_Devil',
    },
    {
      name: 'Bitch',
      url: 'https://borderlands.fandom.com/wiki/Bitch_(Borderlands_3)',
    },
    { name: 'Smart-Gun', url: 'https://borderlands.fandom.com/wiki/Smart-Gun' },
  ],
  E: [
    { name: 'ASMD', url: 'https://borderlands.fandom.com/wiki/ASMD' },
    {
      name: 'Bearcat',
      url: 'https://borderlands.fandom.com/wiki/Bearcat_(Borderlands_3)',
    },
    {
      name: 'Creeping Death',
      url: 'https://borderlands.fandom.com/wiki/Creeping_Death',
    },
    {
      name: 'Girth Blaster Elite',
      url: 'https://borderlands.fandom.com/wiki/Girth_Blaster_Elite',
    },
    {
      name: 'Hyper-Hydrator',
      url: 'https://borderlands.fandom.com/wiki/Hyper-Hydrator',
    },
    {
      name: 'Hand of Glory',
      url: 'https://borderlands.fandom.com/wiki/Hand_of_Glory',
    },
    {
      name: 'Sawbar',
      url: 'https://borderlands.fandom.com/wiki/Sawbar_(Borderlands_3)',
    },
    {
      name: "T.K's Wave",
      url: 'https://borderlands.fandom.com/wiki/T.K%27s_Wave_(Borderlands_3)',
    },
    {
      name: 'Scorpio',
      url: 'https://borderlands.fandom.com/wiki/Scorpio_(pistol)',
    },
    {
      name: 'Vanquisher',
      url: 'https://borderlands.fandom.com/wiki/Vanquisher_(Borderlands_3)',
    },
    { name: 'Ripper', url: 'https://borderlands.fandom.com/wiki/Ripper' },
    { name: 'Superball', url: 'https://borderlands.fandom.com/wiki/Superball' },
    {
      name: 'Vault Hero',
      url: 'https://borderlands.fandom.com/wiki/Vault_Hero',
    },
  ],
}

const weapons: Weapon[] = flatMap(
  Object.entries(weaponMap),
  ([tier, weapons]) =>
    weapons.map((weapon) => ({
      ...weapon,
      tier: tier as Tier,
    }))
).sort((a, b) => a.name.localeCompare(b.name))

export default weapons

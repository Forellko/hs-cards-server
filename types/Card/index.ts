import TAddition from '../Addition';
import TCardType from '../CardType';
import TClassHero from '../ClassHero';
import TCost from '../Cost';
import TCreationType from '../CreationType';
import TRarity from '../Rarity';
import TSpellsSchool from '../SpellsSchool';

interface ICard {
  id?: number;
  name: string;
  imageURL: string;
  addition: TAddition;
  cardType: TCardType;
  classHero: TClassHero;
  cost: TCost;
  creationType: TCreationType;
  rarity: TRarity;
  spellsSchool: TSpellsSchool;
}

export default ICard;

import { PrismaClient } from '@prisma/client';
import ICard from './types/Card';

const prisma = new PrismaClient();

export async function addCard({
  addition,
  cardType,
  classHero,
  cost,
  creationType,
  id,
  name,
  rarity,
  spellsSchool,
  imageURL,
}: ICard) {
  const card = await prisma.card.create({
    data: {
      addition,
      cardType,
      classHero,
      cost,
      creationType,
      name,
      rarity,
      spellsSchool,
      imageURL,
    },
  });
  console.log(card);
}

export async function GetAllCards() {
  const cards = await prisma.card.findMany();
  console.log(cards);
  return cards;
}

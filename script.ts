import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const card = await prisma.card.create({data: {addition: ''}})
}

async function addCard () {
  const card = await prisma.card.create({data: {addition: }})
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

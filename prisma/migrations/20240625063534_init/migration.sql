-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "addition" TEXT NOT NULL,
    "cardType" TEXT NOT NULL,
    "classHero" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "creationType" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "spellsSchool" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_name_key" ON "Card"("name");

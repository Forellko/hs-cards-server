/*
  Warnings:

  - Added the required column `imageURL` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "addition" TEXT NOT NULL,
    "cardType" TEXT NOT NULL,
    "classHero" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "creationType" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "spellsSchool" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL
);
INSERT INTO "new_Card" ("addition", "cardType", "classHero", "cost", "creationType", "id", "name", "rarity", "spellsSchool") SELECT "addition", "cardType", "classHero", "cost", "creationType", "id", "name", "rarity", "spellsSchool" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
CREATE UNIQUE INDEX "Card_name_key" ON "Card"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

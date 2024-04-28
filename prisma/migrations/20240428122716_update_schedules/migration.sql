/*
  Warnings:

  - You are about to alter the column `time` on the `schedules` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" INTEGER NOT NULL
);
INSERT INTO "new_schedules" ("client", "date", "id", "time") SELECT "client", "date", "id", "time" FROM "schedules";
DROP TABLE "schedules";
ALTER TABLE "new_schedules" RENAME TO "schedules";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

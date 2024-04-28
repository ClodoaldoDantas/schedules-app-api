-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" TEXT NOT NULL
);

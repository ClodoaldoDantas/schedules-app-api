-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

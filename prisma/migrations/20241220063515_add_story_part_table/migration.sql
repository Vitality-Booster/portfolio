-- CreateTable
CREATE TABLE "StoryPart" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "StoryPart_pkey" PRIMARY KEY ("id")
);

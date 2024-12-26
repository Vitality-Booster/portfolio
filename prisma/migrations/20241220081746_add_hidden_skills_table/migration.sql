-- CreateTable
CREATE TABLE "HiddenSkill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "HiddenSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HiddenSkillToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_HiddenSkillToProject_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "HiddenSkill_name_key" ON "HiddenSkill"("name");

-- CreateIndex
CREATE INDEX "_HiddenSkillToProject_B_index" ON "_HiddenSkillToProject"("B");

-- AddForeignKey
ALTER TABLE "_HiddenSkillToProject" ADD CONSTRAINT "_HiddenSkillToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "HiddenSkill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HiddenSkillToProject" ADD CONSTRAINT "_HiddenSkillToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

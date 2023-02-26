import { Prisma } from "@prisma/client";

const trainingProgramWithDays = Prisma.validator<Prisma.TrainingProgramArgs>()({
  include: {
    days: true
  }
})
export type TrainingProgramWithDays = Prisma.TrainingProgramGetPayload<typeof trainingProgramWithDays>


export function test() {
  return "asdf"
}

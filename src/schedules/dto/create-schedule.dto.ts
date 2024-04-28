import { z } from 'zod'

export const createScheduleSchema = z.object({
  client: z.string(),
  time: z.string(),
  date: z.string(),
})

export type CreateScheduleDto = z.infer<typeof createScheduleSchema>

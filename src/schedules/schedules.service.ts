import { Injectable } from '@nestjs/common'
import { CreateScheduleDto } from './dto/create-schedule.dto'
import { PrismaService } from 'src/database/prisma.service'
import { convertHourToMinutes } from 'src/utils/convert-hour-to-minutes'
import * as dayjs from 'dayjs'

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  findByDate(date: string) {
    return this.prisma.scheduling.findMany({
      where: {
        date: dayjs(date).toDate(),
      },
      orderBy: {
        time: 'asc',
      },
    })
  }

  async create(payload: CreateScheduleDto) {
    await this.prisma.scheduling.create({
      data: {
        client: payload.client,
        date: dayjs(payload.date).toDate(),
        time: convertHourToMinutes(payload.time),
      },
    })
  }

  async delete(id: string) {
    await this.prisma.scheduling.delete({
      where: {
        id,
      },
    })
  }
}

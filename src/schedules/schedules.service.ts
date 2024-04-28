import { Injectable } from '@nestjs/common'
import { CreateScheduleDto } from './dto/create-schedule.dto'

@Injectable()
export class SchedulesService {
  find() {
    return []
  }

  create(data: CreateScheduleDto) {
    return data
  }
}

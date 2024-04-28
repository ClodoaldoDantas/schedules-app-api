import { Controller, Get } from '@nestjs/common'
import { SchedulesService } from './schedules.service'

@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) {}

  @Get()
  findByDate() {
    return this.schedulesService.findByDate()
  }
}

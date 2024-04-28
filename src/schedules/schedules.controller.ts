import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common'
import { SchedulesService } from './schedules.service'
import { CreateScheduleDto } from './dto/create-schedule.dto'

@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) {}

  @Get()
  find() {
    return this.schedulesService.find()
  }

  @Post()
  @HttpCode(201)
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto)
  }
}

import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common'
import { SchedulesService } from './schedules.service'
import { CreateScheduleDto } from './dto/create-schedule.dto'

@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) {}

  @Get()
  findByDate(@Query() query: { date: string }) {
    return this.schedulesService.findByDate(query.date)
  }

  @Post()
  @HttpCode(201)
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto)
  }
}

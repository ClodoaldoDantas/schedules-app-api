import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common'

import { SchedulesService } from './schedules.service'

import {
  CreateScheduleDto,
  createScheduleSchema,
} from './dto/create-schedule.dto'

import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'

@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) {}

  @Get()
  findByDate(@Query('date') date: string) {
    return this.schedulesService.findByDate(date)
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createScheduleSchema))
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto)
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.schedulesService.delete(id)
  }
}

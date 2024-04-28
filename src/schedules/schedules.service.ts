import { Injectable } from '@nestjs/common'

@Injectable()
export class SchedulesService {
  private readonly schedules: any[] = []

  findByDate(): any[] {
    return this.schedules
  }
}

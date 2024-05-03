import * as request from 'supertest'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { SchedulesModule } from '../../src/schedules/schedules.module'
import { DatabaseModule } from '../../src/database/database.module'
import { PrismaService } from '../../src/database/prisma.service'
import * as dayjs from 'dayjs'

describe('Schedules', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [SchedulesModule, DatabaseModule],
    }).compile()

    app = moduleRef.createNestApplication()
    prisma = moduleRef.get(PrismaService)
    await app.init()
  })

  it(`/GET schedules`, async () => {
    await prisma.scheduling.createMany({
      data: [
        { client: 'Allison', date: dayjs('2024-04-29').toDate(), time: 480 },
        { client: 'Angelina', date: dayjs('2024-04-30').toDate(), time: 540 },
        { client: 'Paul', date: dayjs('2024-04-30').toDate(), time: 600 },
      ],
    })

    const response = await request(app.getHttpServer())
      .get('/schedules')
      .query({ date: '2024-04-30' })
      .send()

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveLength(2)
  })

  it(`/POST schedules`, async () => {
    const response = await request(app.getHttpServer())
      .post('/schedules')
      .send({
        client: 'John Doe',
        date: '2024-05-10',
        time: '10:00',
      })

    expect(response.statusCode).toBe(201)

    const schedulingOnDatabase = prisma.scheduling.findFirst({
      where: {
        client: 'John Doe',
      },
    })

    expect(schedulingOnDatabase).toBeTruthy()
  })

  it(`/DELETE schedules`, async () => {
    const scheduling = await prisma.scheduling.create({
      data: {
        client: 'John Doe',
        date: dayjs('2024-05-10').toDate(),
        time: 480,
      },
    })

    const response = await request(app.getHttpServer())
      .delete(`/schedules/${scheduling.id}`)
      .send()

    expect(response.statusCode).toBe(204)

    const schedulingOnDatabase = await prisma.scheduling.findFirst({
      where: {
        id: scheduling.id,
      },
    })

    expect(schedulingOnDatabase).toBeNull()
  })

  afterAll(async () => {
    await app.close()
  })
})

import { Test, TestingModule } from '@nestjs/testing'
import { BanksAccountsController } from './banks-accounts.controller'
import { BanksAccountsService } from './banks-accounts.service'

describe('BanksAccountsController', () => {
  let controller: BanksAccountsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanksAccountsController],
      providers: [BanksAccountsService],
    }).compile()

    controller = module.get<BanksAccountsController>(BanksAccountsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

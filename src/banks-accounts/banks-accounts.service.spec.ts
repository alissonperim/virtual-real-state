import { Test, TestingModule } from '@nestjs/testing';
import { BanksAccountsService } from './banks-accounts.service';

describe('BanksAccountsService', () => {
  let service: BanksAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BanksAccountsService],
    }).compile();

    service = module.get<BanksAccountsService>(BanksAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

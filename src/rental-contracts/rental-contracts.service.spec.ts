import { Test, TestingModule } from '@nestjs/testing';
import { RentalContractsService } from './rental-contracts.service';

describe('RentalContractsService', () => {
  let service: RentalContractsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalContractsService],
    }).compile();

    service = module.get<RentalContractsService>(RentalContractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

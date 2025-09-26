import { Test, TestingModule } from '@nestjs/testing';
import { RentalContractsController } from './rental-contracts.controller';
import { RentalContractsService } from './rental-contracts.service';

describe('RentalContractsController', () => {
  let controller: RentalContractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalContractsController],
      providers: [RentalContractsService],
    }).compile();

    controller = module.get<RentalContractsController>(RentalContractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

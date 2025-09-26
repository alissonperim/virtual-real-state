import { Test, TestingModule } from '@nestjs/testing';
import { InsuranciesController } from './insurancies.controller';
import { InsuranciesService } from './insurancies.service';

describe('InsuranciesController', () => {
  let controller: InsuranciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranciesController],
      providers: [InsuranciesService],
    }).compile();

    controller = module.get<InsuranciesController>(InsuranciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

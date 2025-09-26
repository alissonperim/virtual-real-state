import { Test, TestingModule } from '@nestjs/testing';
import { InsuranciesService } from './insurancies.service';

describe('InsuranciesService', () => {
  let service: InsuranciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsuranciesService],
    }).compile();

    service = module.get<InsuranciesService>(InsuranciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

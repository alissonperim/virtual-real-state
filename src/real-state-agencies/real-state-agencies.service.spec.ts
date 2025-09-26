import { Test, TestingModule } from '@nestjs/testing';
import { RealStateAgenciesService } from './real-state-agencies.service';

describe('RealStateAgenciesService', () => {
  let service: RealStateAgenciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealStateAgenciesService],
    }).compile();

    service = module.get<RealStateAgenciesService>(RealStateAgenciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

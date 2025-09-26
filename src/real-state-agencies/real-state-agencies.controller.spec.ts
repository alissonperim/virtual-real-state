import { Test, TestingModule } from '@nestjs/testing';
import { RealStateAgenciesController } from './real-state-agencies.controller';
import { RealStateAgenciesService } from './real-state-agencies.service';

describe('RealStateAgenciesController', () => {
  let controller: RealStateAgenciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealStateAgenciesController],
      providers: [RealStateAgenciesService],
    }).compile();

    controller = module.get<RealStateAgenciesController>(RealStateAgenciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

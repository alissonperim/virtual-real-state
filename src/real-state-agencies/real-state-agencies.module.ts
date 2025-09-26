import { Module } from '@nestjs/common';
import { RealStateAgenciesService } from './real-state-agencies.service';
import { RealStateAgenciesController } from './real-state-agencies.controller';

@Module({
  controllers: [RealStateAgenciesController],
  providers: [RealStateAgenciesService],
})
export class RealStateAgenciesModule {}

import { Module } from '@nestjs/common';
import { InsuranciesService } from './insurancies.service';
import { InsuranciesController } from './insurancies.controller';

@Module({
  controllers: [InsuranciesController],
  providers: [InsuranciesService],
})
export class InsuranciesModule {}

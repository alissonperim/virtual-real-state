import { Module } from '@nestjs/common';
import { RentalContractsService } from './rental-contracts.service';
import { RentalContractsController } from './rental-contracts.controller';

@Module({
  controllers: [RentalContractsController],
  providers: [RentalContractsService],
})
export class RentalContractsModule {}

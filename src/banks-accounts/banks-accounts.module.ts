import { Module } from '@nestjs/common';
import { BanksAccountsService } from './banks-accounts.service';
import { BanksAccountsController } from './banks-accounts.controller';

@Module({
  controllers: [BanksAccountsController],
  providers: [BanksAccountsService],
})
export class BanksAccountsModule {}

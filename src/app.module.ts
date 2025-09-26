import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnersModule } from './owners/owners.module';
import { AddressesModule } from './addresses/addresses.module';
import { PropertiesModule } from './properties/properties.module';
import { BanksAccountsModule } from './banks-accounts/banks-accounts.module';
import { UsersModule } from './users/users.module';
import { RealStateAgenciesModule } from './real-state-agencies/real-state-agencies.module';
import { RentalContractsModule } from './rental-contracts/rental-contracts.module';
import { InsuranciesModule } from './insurancies/insurancies.module';

@Module({
  imports: [OwnersModule, AddressesModule, PropertiesModule, BanksAccountsModule, UsersModule, RealStateAgenciesModule, RentalContractsModule, InsuranciesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

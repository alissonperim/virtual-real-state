import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnersModule } from './owners/owners.module';
import { AddressesModule } from './addresses/addresses.module';
import { PropertiesModule } from './properties/properties.module';

@Module({
  imports: [OwnersModule, AddressesModule, PropertiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

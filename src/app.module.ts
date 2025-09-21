import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnersModule } from './owners/owners.module';
import { AddressesModule } from './addresses/addresses.module';

@Module({
  imports: [OwnersModule, AddressesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

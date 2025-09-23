import { Injectable } from '@nestjs/common';
import { CreateBanksAccountDto } from './dto/create-banks-account.dto';
import { UpdateBanksAccountDto } from './dto/update-banks-account.dto';

@Injectable()
export class BanksAccountsService {
  create(createBanksAccountDto: CreateBanksAccountDto) {
    return 'This action adds a new banksAccount';
  }

  findAll() {
    return `This action returns all banksAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} banksAccount`;
  }

  update(id: number, updateBanksAccountDto: UpdateBanksAccountDto) {
    return `This action updates a #${id} banksAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} banksAccount`;
  }
}

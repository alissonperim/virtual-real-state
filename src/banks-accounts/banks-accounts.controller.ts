import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { BanksAccountsService } from './banks-accounts.service'
import { CreateBanksAccountDto } from './dto/create-banks-account.dto'
import { UpdateBanksAccountDto } from './dto/update-banks-account.dto'

@Controller('banks-accounts')
export class BanksAccountsController {
  constructor(private readonly banksAccountsService: BanksAccountsService) {}

  @Post()
  create(@Body() createBanksAccountDto: CreateBanksAccountDto) {
    return this.banksAccountsService.create(createBanksAccountDto)
  }

  @Get()
  findAll() {
    return this.banksAccountsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banksAccountsService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBanksAccountDto: UpdateBanksAccountDto,
  ) {
    return this.banksAccountsService.update(+id, updateBanksAccountDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banksAccountsService.remove(+id)
  }
}

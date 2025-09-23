import { PartialType } from '@nestjs/mapped-types';
import { CreateBanksAccountDto } from './create-banks-account.dto';

export class UpdateBanksAccountDto extends PartialType(CreateBanksAccountDto) {}

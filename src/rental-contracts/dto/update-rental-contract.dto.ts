import { PartialType } from '@nestjs/mapped-types';
import { CreateRentalContractDto } from './create-rental-contract.dto';

export class UpdateRentalContractDto extends PartialType(CreateRentalContractDto) {}

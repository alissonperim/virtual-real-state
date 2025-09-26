import { PartialType } from '@nestjs/mapped-types';
import { CreateInsurancyDto } from './create-insurancy.dto';

export class UpdateInsurancyDto extends PartialType(CreateInsurancyDto) {}

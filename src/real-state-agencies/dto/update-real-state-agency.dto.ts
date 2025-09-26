import { PartialType } from '@nestjs/mapped-types';
import { CreateRealStateAgencyDto } from './create-real-state-agency.dto';

export class UpdateRealStateAgencyDto extends PartialType(CreateRealStateAgencyDto) {}

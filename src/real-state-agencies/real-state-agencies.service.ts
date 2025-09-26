import { Injectable } from '@nestjs/common';
import { CreateRealStateAgencyDto } from './dto/create-real-state-agency.dto';
import { UpdateRealStateAgencyDto } from './dto/update-real-state-agency.dto';

@Injectable()
export class RealStateAgenciesService {
  create(createRealStateAgencyDto: CreateRealStateAgencyDto) {
    return 'This action adds a new realStateAgency';
  }

  findAll() {
    return `This action returns all realStateAgencies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} realStateAgency`;
  }

  update(id: number, updateRealStateAgencyDto: UpdateRealStateAgencyDto) {
    return `This action updates a #${id} realStateAgency`;
  }

  remove(id: number) {
    return `This action removes a #${id} realStateAgency`;
  }
}

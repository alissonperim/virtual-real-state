import { Injectable } from '@nestjs/common';
import { CreateInsurancyDto } from './dto/create-insurancy.dto';
import { UpdateInsurancyDto } from './dto/update-insurancy.dto';

@Injectable()
export class InsuranciesService {
  create(createInsurancyDto: CreateInsurancyDto) {
    return 'This action adds a new insurancy';
  }

  findAll() {
    return `This action returns all insurancies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insurancy`;
  }

  update(id: number, updateInsurancyDto: UpdateInsurancyDto) {
    return `This action updates a #${id} insurancy`;
  }

  remove(id: number) {
    return `This action removes a #${id} insurancy`;
  }
}

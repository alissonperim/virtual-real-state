import { Injectable } from '@nestjs/common';
import { CreateRentalContractDto } from './dto/create-rental-contract.dto';
import { UpdateRentalContractDto } from './dto/update-rental-contract.dto';

@Injectable()
export class RentalContractsService {
  create(createRentalContractDto: CreateRentalContractDto) {
    return 'This action adds a new rentalContract';
  }

  findAll() {
    return `This action returns all rentalContracts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rentalContract`;
  }

  update(id: number, updateRentalContractDto: UpdateRentalContractDto) {
    return `This action updates a #${id} rentalContract`;
  }

  remove(id: number) {
    return `This action removes a #${id} rentalContract`;
  }
}

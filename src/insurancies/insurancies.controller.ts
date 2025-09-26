import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsuranciesService } from './insurancies.service';
import { CreateInsurancyDto } from './dto/create-insurancy.dto';
import { UpdateInsurancyDto } from './dto/update-insurancy.dto';

@Controller('insurancies')
export class InsuranciesController {
  constructor(private readonly insuranciesService: InsuranciesService) {}

  @Post()
  create(@Body() createInsurancyDto: CreateInsurancyDto) {
    return this.insuranciesService.create(createInsurancyDto);
  }

  @Get()
  findAll() {
    return this.insuranciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insuranciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsurancyDto: UpdateInsurancyDto) {
    return this.insuranciesService.update(+id, updateInsurancyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insuranciesService.remove(+id);
  }
}

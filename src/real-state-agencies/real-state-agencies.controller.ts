import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RealStateAgenciesService } from './real-state-agencies.service';
import { CreateRealStateAgencyDto } from './dto/create-real-state-agency.dto';
import { UpdateRealStateAgencyDto } from './dto/update-real-state-agency.dto';

@Controller('real-state-agencies')
export class RealStateAgenciesController {
  constructor(private readonly realStateAgenciesService: RealStateAgenciesService) {}

  @Post()
  create(@Body() createRealStateAgencyDto: CreateRealStateAgencyDto) {
    return this.realStateAgenciesService.create(createRealStateAgencyDto);
  }

  @Get()
  findAll() {
    return this.realStateAgenciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.realStateAgenciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRealStateAgencyDto: UpdateRealStateAgencyDto) {
    return this.realStateAgenciesService.update(+id, updateRealStateAgencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.realStateAgenciesService.remove(+id);
  }
}

import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { EducationService } from './education.service.js';
import { Public } from '@nestjs/authentication';
import { CreateEducationDto } from './dto/create-education.dto.js';
import { UpdateEducationDto } from './dto/update-education.dto.js';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Public()
  @Get()
  async findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully',
      data: await this.educationService.findAll(),
    };
  }

  @Post()
  async create(@Body() dto: CreateEducationDto) {
    return {
      status: 'success',
      message: 'Data created successfully',
      data: await this.educationService.create(dto),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateEducationDto,
  )  {
    return {
      status: 'success',
      message: 'Data updated successfully',
      data: await this.educationService.update(id, dto),
    };
  }
}

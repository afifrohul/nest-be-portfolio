import { Controller, Get } from '@nestjs/common';
import { EducationService } from './education.service.js';
import { Public } from '@nestjs/authentication';

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
}

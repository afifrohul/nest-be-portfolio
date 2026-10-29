import { Controller, Get } from '@nestjs/common';
import { EducationService } from './education.service.js';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  async findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully',
      data: await this.educationService.findAll(),
    };
  }
}

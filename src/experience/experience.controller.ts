import { Controller, Get } from '@nestjs/common';
import { ExperienceService } from './experience.service.js';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  async findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully',
      data: await this.experienceService.findAll(),
    };
  }
}

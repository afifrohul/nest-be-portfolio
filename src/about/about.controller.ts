import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service.js';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  async findAll() {
    return {
      status: 'success',
      message: 'About data retrieved successfully',
      data: await this.aboutService.findAll(),
    };
  }
}

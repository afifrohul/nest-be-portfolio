import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service.js';
import { Public } from '@nestjs/authentication';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}
  
  @Public()
  @Get()
  async findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully',
      data: await this.aboutService.findAll(),
    };
  }
}

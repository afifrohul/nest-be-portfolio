import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service.js';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully',
      data: await this.projectService.findAll(),
    };
  }
}

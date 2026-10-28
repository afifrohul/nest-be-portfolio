import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service.js';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  findAll() {
    return this.projectService.findAll()
  }
}

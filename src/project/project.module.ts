import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller.js';
import { ProjectService } from './project.service.js';
import { Project } from './project.js';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, Project]
})
export class ProjectModule {}

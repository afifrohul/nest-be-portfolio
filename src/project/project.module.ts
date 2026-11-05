import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller.js';
import { ProjectService } from './project.service.js';
import { ProjectRepository } from './projectRepository.js';
import { AuthModuleOptions } from '@nestjs/passport';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, ProjectRepository, AuthModuleOptions],
})
export class ProjectModule {}

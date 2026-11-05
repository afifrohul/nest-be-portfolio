import { Module } from '@nestjs/common';
import { EducationController } from './education.controller.js';
import { EducationService } from './education.service.js';
import { EducationRepository } from './education.repository.js';
import { AuthModuleOptions } from '@nestjs/passport';

@Module({
  controllers: [EducationController],
  providers: [EducationService, EducationRepository, AuthModuleOptions],
})
export class EducationModule {}

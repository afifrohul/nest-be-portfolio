import { Module } from '@nestjs/common';
import { EducationController } from './education.controller.js';
import { EducationService } from './education.service.js';
import { EducationRepository } from './education.repository.js';

@Module({
  controllers: [EducationController],
  providers: [EducationService, EducationRepository],
})
export class EducationModule {}

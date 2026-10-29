import { Module } from '@nestjs/common';
import { EducationController } from './education.controller.js';
import { EducationService } from './education.service.js';
import { Education } from './education.js';

@Module({
  controllers: [EducationController],
  providers: [EducationService, Education]
})
export class EducationModule {}

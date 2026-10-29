import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller.js';
import { ExperienceService } from './experience.service.js';
import { Experience } from './experience.js';

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService, Experience]
})
export class ExperienceModule {}

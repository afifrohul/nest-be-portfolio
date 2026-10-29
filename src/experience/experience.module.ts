import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller.js';
import { ExperienceService } from './experience.service.js';
import { ExperienceRepository } from './experience.repository.js';

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService, ExperienceRepository],
})
export class ExperienceModule {}

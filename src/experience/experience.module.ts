import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller.js';
import { ExperienceService } from './experience.service.js';
import { ExperienceRepository } from './experience.repository.js';
import { AuthModuleOptions } from '@nestjs/passport';

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService, ExperienceRepository, AuthModuleOptions],
})
export class ExperienceModule {}

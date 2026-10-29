import { Module } from '@nestjs/common';
import { AboutController } from './about.controller.js';
import { AboutService } from './about.service.js';
import { AboutRepository } from './about.repository.js';

@Module({
  controllers: [AboutController],
  providers: [AboutService, AboutRepository],
})
export class AboutModule {}

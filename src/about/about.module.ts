import { Module } from '@nestjs/common';
import { AboutController } from './about.controller.js';
import { AboutService } from './about.service.js';
import { About } from './about.js';

@Module({
  controllers: [AboutController],
  providers: [AboutService, About]
})
export class AboutModule {}

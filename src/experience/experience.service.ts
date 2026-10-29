import { Injectable } from '@nestjs/common';
import { Experience } from './experience.js';

@Injectable()
export class ExperienceService {
  constructor(private readonly experinceRepository: Experience) {}

  async findAll() {
    return await this.experinceRepository.findAll();
  }
}

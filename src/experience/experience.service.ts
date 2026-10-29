import { Injectable } from '@nestjs/common';
import { ExperienceRepository } from './experience.repository.js';

@Injectable()
export class ExperienceService {
  constructor(private readonly experinceRepository: ExperienceRepository) {}

  async findAll() {
    return await this.experinceRepository.findAll();
  }
}

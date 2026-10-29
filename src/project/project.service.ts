import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './projectRepository.js';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async findAll() {
    return await this.projectRepository.findAll();
  }
}

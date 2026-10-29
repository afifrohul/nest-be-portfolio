import { Injectable } from '@nestjs/common';
import { Project } from './project.js';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: Project) {}

  async findAll() {
    return await this.projectRepository.findAll();
  }
}

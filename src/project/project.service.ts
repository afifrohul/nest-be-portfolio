import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectRepository } from './projectRepository.js';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async findAll() {
    return await this.projectRepository.findAll();
  }

  async create(dto: CreateProjectDto) {
    return await this.projectRepository.create({
      title: dto.title,
      desc: dto.desc,
      details: dto.details,
      year: dto.year,
      link: dto.link,
      tech: dto.tech,
    });
  }

  async findById(id: string) {
    const exist = await this.projectRepository.findById(id);

    if (!exist) {
      throw new NotFoundException('Project not found');
    }

    return exist;
  }

  async update(id: string, dto: UpdateProjectDto) {
    await this.findById(id);

    return this.projectRepository.update(id, dto);
  }

  async remove(id: string) {
    await this.findById(id);

    return this.projectRepository.remove(id);
  }
}

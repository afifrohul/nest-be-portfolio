import { Injectable, NotFoundException } from '@nestjs/common';
import { ExperienceRepository } from './experience.repository.js';
import { CreateExperienceDto } from './dto/create-experience.dto.js';
import { UpdateExperienceDto } from './dto/update-experience.dto.js';

@Injectable()
export class ExperienceService {
  constructor(private readonly experinceRepository: ExperienceRepository) {}

  async findAll() {
    return await this.experinceRepository.findAll();
  }

  async create(dto: CreateExperienceDto) {
    return this.experinceRepository.create({
      company: dto.company,
      location: dto.location,
      role: dto.role,
      start_month: dto.start_month,
      start_year: dto.start_year,
      end_month: dto.end_month,
      end_year: dto.end_year,
      desc: dto.desc,
    });
  }

  async findById(id: string) {
    const exist = await this.experinceRepository.findById(id);

    if (!exist) {
      throw new NotFoundException('Experience not found');
    }

    return exist;
  }

  async update(id: string, dto: UpdateExperienceDto) {
    await this.findById(id);

    return this.experinceRepository.update(id, dto);
  }

  async remove(id: string) {
    await this.findById(id);

    return this.experinceRepository.remove(id);
  }
}

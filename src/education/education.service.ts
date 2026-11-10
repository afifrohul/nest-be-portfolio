import { Injectable, NotFoundException } from '@nestjs/common';
import { EducationRepository } from './education.repository.js';
import { CreateEducationDto } from './dto/create-education.dto.js';
import { UpdateEducationDto } from './dto/update-education.dto.js';

@Injectable()
export class EducationService {
  constructor(private readonly educationRepository: EducationRepository) {}

  async findAll() {
    return await this.educationRepository.findAll();
  }

  async create(dto: CreateEducationDto) {
    return this.educationRepository.create({
      company: dto.company,
      location: dto.location,
      department: dto.department,
      focus: dto.focus,
      start_month: dto.start_month,
      start_year: dto.start_year,
      end_month: dto.end_month,
      end_year: dto.end_year,
      desc: dto.desc,
    });
  }

  async findById(id: string) {
    const exist = await this.educationRepository.findById(id);

    if (!exist) {
      throw new NotFoundException('Education not found');
    }

    return exist;
  }

  async update(id: string, dto: UpdateEducationDto) {
    await this.findById(id);

    return this.educationRepository.update(id, dto);
  }

  async remove(id: string) {
    await this.findById(id);

    return this.educationRepository.remove(id);
  }
}

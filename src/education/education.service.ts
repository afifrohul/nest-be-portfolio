import { Injectable } from '@nestjs/common';
import { EducationRepository } from './education.repository.js';

@Injectable()
export class EducationService {
  constructor(private readonly educationRepository: EducationRepository) {}

  async findAll() {
    return await this.educationRepository.findAll();
  }
}

import { Injectable } from '@nestjs/common';
import { Education } from './education.js';

@Injectable()
export class EducationService {
  constructor(private readonly educationRepository: Education) {}

  async findAll() {
    return await this.educationRepository.findAll();
  }
}

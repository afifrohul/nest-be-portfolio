import { Injectable } from '@nestjs/common';
import { AboutRepository } from './about.repository.js';

@Injectable()
export class AboutService {
  constructor(private readonly aboutRepository: AboutRepository) {}
  async findAll() {
    const about = await this.aboutRepository.findAll();

    return about[0].value;
  }
}

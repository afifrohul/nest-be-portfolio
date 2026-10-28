import { Injectable } from '@nestjs/common';
import { About } from './about.js';

@Injectable()
export class AboutService {
  constructor(private readonly aboutRepository: About) {}
  async findAll() {

    const about = await this.aboutRepository.findAll();

    return about[0].value
  }
}

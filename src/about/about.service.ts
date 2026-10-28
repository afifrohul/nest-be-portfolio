import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutService {
  findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully.',
      data: 'Informatics graduate with a strong passion for Web Development. Skilled in developing robust fullstack systems with the Laravel framework. Over the years, I have consistently built and managed various web-based projects, demonstrating both technical expertise and collaborative teamwork. Currently seeking an opportunity to work in a professional environment to further sharpen my skills, contribute to impactful projects, and gain valuable industry experience.',
    };
  }
}

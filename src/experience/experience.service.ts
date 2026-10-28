import { Injectable } from '@nestjs/common';

@Injectable()
export class ExperienceService {
  findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully.',
      data: [
        {
          company: 'Coding Camp Powered by DBS Foundation',
          role: 'Facilitator - Full-Stack Web Developer',
          start_month: 'Feb',
          start_year: 2026,
          end_month: 'Aug',
          end_year: 2026,
          desc: 'As a facilitator, I manage groups of facilitators and cohorts while ensuring smooth coordination and engagement throughout the learning process. I conduct weekly consultation sessions with cohorts to provide guidance, address challenges, and support their progress. In addition, I serve as an Instructor Assistant for Tech and Soft Skills ILT sessions, supporting instructors and participants to ensure effective and engaging learning experiences.',
          location: 'Remote',
        },
        {
          company: 'Shelter Indonesia',
          role: 'Backend Developer',
          start_month: 'Dec',
          start_year: 2025,
          end_month: 'Jun',
          end_year: 2026,
          desc: 'Developed and managed the MySQL database system for the CAIS application. Built and maintained the application’s APIs using the Laravel framework and documented all endpoints using Swagger. Collaborated with the team frontend to create nice web interface.',
          location: 'Surabaya, Indonesia',
        },
        {
          company: 'Digital Amoeba by Telkom Indonesia',
          role: 'Backend Developer',
          start_month: 'Feb',
          start_year: 2024,
          end_month: 'Jul',
          end_year: 2024,
          desc: 'Developed and managed the MySQL database system for the Ideabox application. Built and maintained the application’s APIs using the Laravel framework and documented all endpoints using Postman. Collaborated with the team to successfully deliver 8 sprints following the Scrum SDLC, ensuring consistent progress and high-quality backend development.',
          location: 'Bandung, Indonesia',
        },
        {
          company: 'Himpunan Mahasiswa Informatika (HMIF) UNEJ',
          role: 'Head of Technology',
          start_month: 'Jan',
          start_year: 2023,
          end_month: 'Dec',
          end_year: 2024,
          desc: 'Led and managed the entire technology team, overseeing the development of digital platforms that support all HMIF UNEJ members. Drove the adoption of technology across organizational programs and activities, while ensuring the maintenance, reliability, and continuous improvement of all existing platforms.',
          location: 'Jember, Indonesia',
        },
        {
          company: 'Himpunan Mahasiswa Informatika (HMIF) UNEJ',
          role: 'Staff of Technology',
          start_month: 'Jan',
          start_year: 2022,
          end_month: 'Dec',
          end_year: 2022,
          desc: 'Building and developing technology platforms that benefit all HMIF UNEJ members. Promoting a strong culture of technology adoption across organizational programs and activities. Responsible for maintaining and managing all existing digital platforms.',
          location: 'Jember, Indonesia',
        },
      ],
    };
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class EducationService {
  findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully.',
      data: [
        {
          company: 'University of Jember',
          location: 'Jember, Indonesia',
          department: 'Department of Computer Science',
          focus: 'MACHINE LEARNING ・ DEEP LEARNING ・ WEBSITE DEVELOPMENT',
          start_month: 'Aug',
          start_year: 2021,
          end_month: 'Jul',
          end_year: 2025,
          desc: 'Graduated with CUMLAUDE honors (GPA 3.90). Actively involved in a student organization for three years, where I was responsible for managing and developing the organization’s technology platforms. Spent two years serving as the Head of Technology, leading digital initiatives, improving internal systems, and supporting various organizational programs.',
        },
        {
          company: 'Bangkit Academy 2023 Batch 2',
          location: 'Remote Location',
          department: 'Cloud Computing Learning Path',
          focus: 'CLOUD COMPUTING ・ GOOGLE CLOUD PLATFORM ・ CAPSTONE PROJECT',
          start_month: 'Aug',
          start_year: 2023,
          end_month: 'Jan',
          end_year: 2024,
          desc: 'Completed the Bangkit Academy program with a focus on JavaScript Web Programming, Google Cloud Foundations, Backend Web Development on Google Cloud, and the Cloud Engineering Learning Path. Finished the program by delivering a Capstone Project that applied these skills to a real-world solution.',
        },
      ],
    };
  }
}

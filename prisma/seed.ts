import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { PasswordHasher } from '@nestjs/authentication';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not configured');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  // 0. USER
  const passwordHasher = new PasswordHasher();
  const hashedPassword = await passwordHasher.hash('password');

  const users = [
    {
      id: 'main-user',
      name: 'Afif Rohul',
      email: 'afifmemyself22@gmail.com',
      password: hashedPassword,
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: user,
      create: user,
    });
  }

  // 1. PROFILE
  const profiles = [
    {
      id: 'profile-name',
      name: 'about',
      value:
        'Informatics graduate with a strong passion for Web Development. Skilled in developing robust fullstack systems with the Laravel framework. Over the years, I have consistently built and managed various web-based projects, demonstrating both technical expertise and collaborative teamwork. Currently seeking an opportunity to work in a professional environment to further sharpen my skills, contribute to impactful projects, and gain valuable industry experience.',
    },
  ];

  for (const profile of profiles) {
    await prisma.profile.upsert({
      where: { id: profile.id },
      update: {
        name: profile.name,
        value: profile.value,
      },
      create: profile,
    });
  }

  // 2. EDUCATION
  const educations = [
    {
      id: 'education-bangkit-academy',
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
    {
      id: 'education-university-jember',
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
  ];

  for (const education of educations) {
    await prisma.education.upsert({
      where: { id: education.id },
      update: education,
      create: education,
    });
  }

  // 3. EXPERIENCE
  const experiences = [
    {
      id: 'experience-hmif-staf-tech',
      company: 'Himpunan Mahasiswa Informatika (HMIF) UNEJ',
      role: 'Staff of Technology',
      start_month: 'Jan',
      start_year: 2022,
      end_month: 'Dec',
      end_year: 2022,
      desc: 'Building and developing technology platforms that benefit all HMIF UNEJ members. Promoting a strong culture of technology adoption across organizational programs and activities. Responsible for maintaining and managing all existing digital platforms.',
      location: 'Jember, Indonesia',
    },
    {
      id: 'experience-hmif-head-tech',
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
      id: 'experience-telkom-intern',
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
      id: 'experience-shelter-intern',
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
      id: 'experience-facil-codingcamp',
      company: 'Coding Camp Powered by DBS Foundation',
      role: 'Facilitator - Full-Stack Web Developer',
      start_month: 'Feb',
      start_year: 2026,
      end_month: 'Aug',
      end_year: 2026,
      desc: 'As a facilitator, I manage groups of facilitators and cohorts while ensuring smooth coordination and engagement throughout the learning process. I conduct weekly consultation sessions with cohorts to provide guidance, address challenges, and support their progress. In addition, I serve as an Instructor Assistant for Tech and Soft Skills ILT sessions, supporting instructors and participants to ensure effective and engaging learning experiences.',
      location: 'Remote',
    },
  ];

  for (const experience of experiences) {
    await prisma.experience.upsert({
      where: { id: experience.id },
      update: experience,
      create: experience,
    });
  }

  // 4. PROJECT
  const projects = [
    {
      id: 'project-hajar-if',
      title: 'HAJAR IF Website',
      desc: 'An educational platform for Informatics students.',
      details:
        'This project aims to build and develop a website that contains learning materials for students of Informatics study program. The HAJAR IF website contains course references, MBKM student testimonials, student work in various competitions and thesis title ideas.',
      link: 'https://hajarif.hmifunej.id/',
      year: 2024,
      tech: 'Tailwind CSS ・ React ・ MySQL ・ Laravel',
    },
    {
      id: 'project-io',
      title: 'Informatics Olympiad',
      desc: 'An event information website providing details for participants.',
      details:
        'A web platform that provides complete information about the Informatics Olympiad organized by HMIF UNEJ. The website includes details on registration procedures, event timeline, technical guidelines, and prize pool information, offering participants a clear and accessible overview of the entire competition process.',
      link: 'https://informaticsolympiad.hmifunej.id/',
      year: 2024,
      tech: 'Tailwind CSS ・ React',
    },
    {
      id: 'project-cbt-io',
      title: 'Informatics Olympiad CBT',
      desc: 'An administrative and online examination platform.',
      details:
        'A backend and administrative platform used by the Informatics Olympiad committee to manage all content displayed on the public website. This system handles participant administrative selection, data verification, and provides a complete Computer-Based Test (CBT) environment for qualified participants to take the online exam efficiently and securely.',
      link: 'https://cbt-io.hmifunej.id/',
      year: 2024,
      tech: 'Tailwind CSS ・ MySQL ・ Laravel',
    },
    {
      id: 'project-act',
      title: 'Automate Crop Timeline',
      desc: 'An agricultural management system that automatically generates planting schedules.',
      details:
        'Automate Crop Timeline is a streamlined agricultural management system focused on planting operations. When a new planting cycle is initiated, the system automatically generates a complete schedule of tasks based on predefined SOPs and displays them directly on the calendar. It also records production outcomes for each plot, allowing farmers or field managers to track performance.',
      link: '',
      year: 2025,
      tech: 'Tailwind CSS ・ React ・ MySQL ・ Laravel',
    },
    {
      id: 'project-habit-tracker',
      title: 'Habit Tracker',
      desc: 'A personal habit-tracking application with gamification features.',
      details:
        'This habit tracker is a personal ongoing project designed to help track and build daily habits. It features a mini gamification system where completing habits rewards experience points (EXP), allowing users to level up over time. The project is still under active development and will continue to be expanded with new features.',
      link: '',
      year: 2025,
      tech: 'Tailwind CSS ・ React ・ MySQL ・ Laravel',
    },
    {
      id: 'project-if-merch-recreate',
      title: 'IF MERCH Recreate',
      desc: 'A rebuilt e-commerce platform for merchandise sales, featuring a Midtrans payment gateway.',
      details:
        'IF MERCH Recreate is a modern, rebuilt version of the original IF MERCH project, developed entirely from scratch as a solo effort. Like the original, it serves as an e-commerce platform for selling merchandise, but now enhanced with a fully integrated Midtrans payment gateway, enabling secure and seamless online transactions.',
      link: 'https://demo-if-merch-recreate.vercel.app/',
      year: 2025,
      tech: 'Tailwind CSS ・ Next ・ MySQL ・ Laravel',
    },
    {
      id: 'project-forum-app',
      title: 'Forum App',
      desc: 'A full-stack discussion platform built with React and Node.js.',
      details:
        "Forum App is a full-stack web application developed as part of my learning journey through Dicoding's React and Back-End JavaScript learning paths. It is built with React, Node.js, Express.js, and Prisma ORM, allowing me to apply modern full-stack development practices, including RESTful API development, user authentication, database management, and interactive frontend design. This project showcases my ability to integrate frontend and backend technologies into a complete, scalable application.",
      link: 'https://forum-app-opal.vercel.app/',
      year: 2026,
      tech: 'Tailwind CSS ・ React ・ PostgreSQL ・ Node.JS ・ Express.JS',
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: project,
      create: project,
    });
  }

  console.log('Database seeding completed successfully.');
}

main()
  .catch((error: unknown) => {
    console.error('Database seeding failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

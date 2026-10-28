import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully.',
      data: [
        {
          title: 'Forum App',
          desc: 'A full-stack discussion platform built with React and Node.js.',
          details:
            "Forum App is a full-stack web application developed as part of my learning journey through Dicoding's React and Back-End JavaScript learning paths. It is built with React, Node.js, Express.js, and Prisma ORM, allowing me to apply modern full-stack development practices, including RESTful API development, user authentication, database management, and interactive frontend design. This project showcases my ability to integrate frontend and backend technologies into a complete, scalable application.",
          link: 'https://forum-app-opal.vercel.app/',
          year: 2026,
          tech: 'Tailwind CSS ・ React ・ PostgreSQL ・ Node.JS ・ Express.JS',
        },
        {
          title: 'Habit Tracker',
          desc: 'A personal habit-tracking application with gamification features.',
          details:
            'This habit tracker is a personal ongoing project designed to help track and build daily habits. It features a mini gamification system where completing habits rewards experience points (EXP), allowing users to level up over time. The project is still under active development and will continue to be expanded with new features.',
          link: '',
          year: 2025,
          tech: 'Tailwind CSS ・ React ・ MySQL ・ Laravel',
        },
        {
          created_at: '2025-12-06T11:53:01.61245+00:00',
          title: 'IF MERCH Recreate',
          desc: 'A rebuilt e-commerce platform for merchandise sales, featuring a Midtrans payment gateway.',
          details:
            'IF MERCH Recreate is a modern, rebuilt version of the original IF MERCH project, developed entirely from scratch as a solo effort. Like the original, it serves as an e-commerce platform for selling merchandise, but now enhanced with a fully integrated Midtrans payment gateway, enabling secure and seamless online transactions.',
          link: 'https://demo-if-merch-recreate.vercel.app/',
          year: 2025,
          tech: 'Tailwind CSS ・ Next ・ MySQL ・ Laravel',
        },
        {
          created_at: '2025-12-06T11:51:47.82567+00:00',
          title: 'Automate Crop Timeline',
          desc: 'An agricultural management system that automatically generates planting schedules.',
          details:
            'Automate Crop Timeline is a streamlined agricultural management system focused on planting operations. When a new planting cycle is initiated, the system automatically generates a complete schedule of tasks based on predefined SOPs and displays them directly on the calendar. It also records production outcomes for each plot, allowing farmers or field managers to track performance.',
          link: '',
          year: 2025,
          tech: 'Tailwind CSS ・ React ・ MySQL ・ Laravel',
        },
        {
          title: 'Informatics Olympiad CBT',
          desc: 'An administrative and online examination platform.',
          details:
            'A backend and administrative platform used by the Informatics Olympiad committee to manage all content displayed on the public website. This system handles participant administrative selection, data verification, and provides a complete Computer-Based Test (CBT) environment for qualified participants to take the online exam efficiently and securely.',
          link: 'https://cbt-io.hmifunej.id/',
          year: 2024,
          tech: 'Tailwind CSS ・ MySQL ・ Laravel',
        },
        {
          title: 'Informatics Olympiad',
          desc: 'An event information website providing details for participants.',
          details:
            'A web platform that provides complete information about the Informatics Olympiad organized by HMIF UNEJ. The website includes details on registration procedures, event timeline, technical guidelines, and prize pool information, offering participants a clear and accessible overview of the entire competition process.',
          link: 'https://informaticsolympiad.hmifunej.id/',
          year: 2024,
          tech: 'Tailwind CSS ・ React',
        },
        {
          title: 'HAJAR IF Website',
          desc: 'An educational platform for Informatics students.',
          details:
            'This project aims to build and develop a website that contains learning materials for students of Informatics study program. The HAJAR IF website contains course references, MBKM student testimonials, student work in various competitions and thesis title ideas.',
          link: 'https://hajarif.hmifunej.id/',
          year: 2024,
          tech: 'Tailwind CSS ・ React ・ MySQL ・ Laravel',
        },
      ],
    };
  }
}

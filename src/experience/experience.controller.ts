import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ExperienceService } from './experience.service.js';
import { Public } from '@nestjs/authentication';
import { CreateExperienceDto } from './dto/create-experience.dto.js';
import { UpdateExperienceDto } from './dto/update-experience.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Public()
  @Get()
  async findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully',
      data: await this.experienceService.findAll(),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: CreateExperienceDto) {
    return {
      status: 'success',
      message: 'Data created successfully',
      data: await this.experienceService.create(dto),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateExperienceDto) {
    return {
      status: 'success',
      message: 'Data updated successfully',
      data: await this.experienceService.update(id, dto),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.experienceService.remove(id);

    return {
      status: 'success',
      message: 'Data deleted successfully',
      data: { deleted_id: data.id },
    };
  }
}

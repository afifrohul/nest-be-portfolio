import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProjectService } from './project.service.js';
import { Public } from '@nestjs/authentication';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Public()
  @Get()
  async findAll() {
    return {
      status: 'success',
      message: 'Data retrieved successfully',
      data: await this.projectService.findAll(),
    };
  }

  @Post()
  async create(@Body() dto: CreateProjectDto) {
    return {
      status: 'success',
      message: 'Data created successfully',
      data: await this.projectService.create(dto),
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
    return {
      status: 'success',
      message: 'Data updated successfully',
      data: await this.projectService.update(id, dto),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.projectService.remove(id);

    return {
      status: 'success',
      message: 'Data deleted successfully',
      data: { deleted_id: data.id },
    };
  }
}

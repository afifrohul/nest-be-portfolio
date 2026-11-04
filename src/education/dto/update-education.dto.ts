import { CreateEducationDto } from "./create-education.dto.js";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEducationDto extends PartialType(
  CreateEducationDto
) {}
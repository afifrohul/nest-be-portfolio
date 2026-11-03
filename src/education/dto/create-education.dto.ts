import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateEducationDto {
  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsString()
  @IsNotEmpty()
  focus: string;

  @IsString()
  @IsNotEmpty()
  start_month: string;

  @IsInt()
  @IsNotEmpty()
  start_year: number;

  @IsString()
  @IsNotEmpty()
  end_month: string;

  @IsInt()
  @IsNotEmpty()
  end_year: number;

  @IsString()
  @IsNotEmpty()
  desc: string;
}

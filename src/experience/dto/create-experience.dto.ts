import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  role: string;

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

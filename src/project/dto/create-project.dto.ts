import { IsInt, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsString()
  @IsNotEmpty()
  details: string;

  @IsUrl()
  @IsOptional()
  link: string;
  
  @IsInt()
  @IsNotEmpty()
  year: number;
  
  @IsString()
  @IsNotEmpty()
  tech: string;
}

import {
  IsEmail,
  IsString,
  IsStrongPassword,
  IsOptional,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateUserDTO {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 0,
    minSymbols: 0,
  })
  password: string;

  @IsOptional()
  @IsDateString()
  birthAt: string;

  @IsOptional()
  @IsEnum(Role)
  role: number;
}

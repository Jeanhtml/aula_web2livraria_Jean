import { IsEAN, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CriarUsuarioDto {
  @IsString({ message: '0 nome deve ser um string' })
  @IsNotEmpty({ message: '0 nome é obrigatório' })
  nome: string;

  @IsEmail({}, { message: 'O email deve ser um email válido' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  nome: string;

  @IsString({ message: 'A senha deve ser um string' })
  @IsNotEmpty({ message: 'A senha é obrigatório' })
  password: string;
}

import { IsString, MaxLength, IsNotEmpty } from "class-validator";

export class CreateRoleDto {
	@IsNotEmpty({ message: "Поле role не должно быть пустым" })
	@IsString({ message: "Поле role должно быть строкой" })
	@MaxLength(70, { message: "Поле role не должно содержать больше 70 символов" })
	name: string;
}

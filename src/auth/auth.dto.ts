import { IsNotEmpty, IsString, Matches, MaxLength, IsEmail, IsOptional } from "class-validator";

export class CreateUserDto {
	@IsNotEmpty({ message: "Поле firstName не должно быть пустым" })
	@IsString({ message: "Поле firstName должно быть строкой" })
	@MaxLength(128, { message: "Поле firstName не должно содержать больше 128 символов" })
	firstName: string;

	@IsNotEmpty({ message: "Поле lastName не должно быть пустым" })
	@IsString({ message: "Поле lastName должно быть строкой" })
	@MaxLength(128, { message: "Поле lastName не должно содержать больше 128 символов" })
	lastName: string;

	@IsNotEmpty({ message: "Поле email не должно быть пустым" })
	@IsString({ message: "Поле email должно быть строкой" })
	@IsEmail({}, { message: "Неккоректная почта" })
	email: string;

	@IsNotEmpty({ message: "Поле password не должно быть пустым" })
	@IsString({ message: "Поле password должно быть строкой" })
	@Matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,32}$/, {
		message:
			// eslint-disable-next-line max-len
			"Пароль должен содержать от 8 до 32 символов, иметь хотя бы одну цифру, и состоять только из латинских символов и иметь хотя бы одну букву в верхнем регистре",
	})
	password: string;

	@IsString({ message: "Поле role должно быть строкой" })
	@IsOptional()
	@MaxLength(128, { message: "Поле role не должно содержать больше 128 символов" })
	role: string;
}

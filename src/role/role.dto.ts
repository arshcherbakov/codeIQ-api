import { IsString, MaxLength, IsNotEmpty, Matches } from "class-validator";
import { errorsValidationRole } from "./constants";

export class CreateRoleDto {
	@IsNotEmpty({ message: errorsValidationRole.emptyField })
	@IsString({ message: errorsValidationRole.mustBeString })
	@Matches(/\S/, { message: errorsValidationRole.onlySpaces })
	@MaxLength(70, { message: errorsValidationRole.longField })
	name: string;
}

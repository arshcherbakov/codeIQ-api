import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateRoleDto } from "./role.dto";
import { errorsValidationRole, invalidRoleNames } from "./constants";

describe("CreateRoleDto Validation", () => {
	const testValidateNameRole = async (
		nameRole: Record<string, string | number>,
		errorValidate: Record<string, string>,
	): Promise<void> => {
		const dto = plainToInstance(CreateRoleDto, nameRole);
		const errors = await validate(dto);

		expect(errors.length).toBeGreaterThan(0);
		expect(errors[0].constraints).toEqual(expect.objectContaining(errorValidate));
	};

	it("Empty name role", async () =>
		await testValidateNameRole(
			{ name: invalidRoleNames.voidName },
			{
				isNotEmpty: errorsValidationRole.emptyField,
			},
		));

	it("Number name role", async () =>
		await testValidateNameRole(
			{ name: invalidRoleNames.numberName },
			{
				isString: errorsValidationRole.mustBeString,
			},
		));

	it("Long name role", async () =>
		await testValidateNameRole(
			{ name: invalidRoleNames.longName },
			{
				maxLength: errorsValidationRole.longField,
			},
		));

	it("Role name with spaces", async () =>
		await testValidateNameRole(
			{ name: invalidRoleNames.nameWithSpaces },
			{
				matches: errorsValidationRole.onlySpaces,
			},
		));
});

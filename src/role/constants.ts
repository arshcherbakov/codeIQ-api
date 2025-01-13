import { Role } from "src/entities/role.entity";

export const mockRoles: Role[] = [
	{
		id: "76c87432-c41a-4680-aede-03b8d08a0000",
		name: "Admin",
	},
	{
		id: "51a34789-5466-4a30-81qw-a96f537c5555",
		name: "User",
	},
];

export const mockRole: Role = { ...mockRoles[0] };

export const nonExistentRole: Role = {
	...mockRole,
	name: "FakeAdmin",
};

export const mockRoleRepository = {
	findOne: jest.fn(),
	find: jest.fn(),
	save: jest.fn(),
	remove: jest.fn(),
};

export const invalidRoleNames = {
	voidName: "",
	nameWithSpaces: "            ",
	longName: "dddddddddddddddddddddddddddddddddddddddddddawdawdawdawdwaddddddddddddddddd",
	numberName: 154877,
};

export const errorsValidationRole = {
	emptyField: "Поле role не должно быть пустым",
	mustBeString: "Поле role должно быть строкой",
	longField: "Поле role не должно содержать больше 70 символов",
	onlySpaces: "Поле role не должно состоять только из пробелов",
};

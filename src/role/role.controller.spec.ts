import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { RoleController } from "src/role/role.controller";
import { RoleService } from "src/role/role.service";
import { RoleRepository } from "src/role/role.repository";
import { Role } from "src/entities/role.entity";
import { mockRole, mockRoles, nonExistentRole, mockRoleRepository } from "src/role/constants";

// eslint-disable-next-line max-lines-per-function
describe("RoleController", () => {
	let roleController: RoleController;
	let roleService: RoleService;

	beforeEach(async () => {
		const roleModule: TestingModule = await Test.createTestingModule({
			controllers: [RoleController],
			providers: [
				RoleService,
				RoleRepository,
				{
					provide: getRepositoryToken(Role),
					useValue: mockRoleRepository,
				},
			],
		}).compile();

		roleController = roleModule.get<RoleController>(RoleController);
		roleService = roleModule.get<RoleService>(RoleService);
	});
	// eslint-disable-next-line max-lines-per-function
	describe("CRUD roles", () => {
		it("should return all roles", async () => {
			jest.spyOn(roleService, "getAllRoles").mockResolvedValue(mockRoles);

			expect(await roleController.getAllRoles()).toEqual(mockRoles);
			expect(roleService.getAllRoles).toHaveBeenCalled();
		});

		it("should check role by name", async () => {
			jest.spyOn(roleService, "checkRoleByName").mockResolvedValue(mockRole);

			expect(await roleController.checkRoleByName({ name: mockRole.name })).toEqual(mockRole);
			expect(roleService.checkRoleByName).toHaveBeenCalled();
			expect(roleService.checkRoleByName).toHaveBeenCalledWith({ name: mockRole.name });

			jest
				.spyOn(roleService, "checkRoleByName")
				.mockImplementationOnce(async (role: Role) => (role.name === mockRole.name ? mockRole : null));

			expect(await roleController.checkRoleByName({ name: nonExistentRole.name })).toBeNull();
			expect(roleService.checkRoleByName).toHaveBeenCalled();
			expect(roleService.checkRoleByName).toHaveBeenCalledWith({ name: nonExistentRole.name });
		});

		it("should delete one role", async () => {
			jest.spyOn(roleService, "deleteOneRole").mockResolvedValue(mockRole);

			expect(await roleController.deleteOneRole(mockRole)).toEqual(mockRole);
			expect(roleService.deleteOneRole).toHaveBeenCalled();
			expect(roleService.deleteOneRole).toHaveBeenCalledWith(mockRole);
		});

		it("should create one role", async () => {
			jest.spyOn(roleService, "createRole").mockResolvedValue(mockRole);

			expect(await roleController.createRole(mockRole)).toEqual(mockRole);
			expect(roleService.createRole).toHaveBeenCalled();
			expect(roleService.createRole).toHaveBeenCalledWith(mockRole);
		});
	});
});

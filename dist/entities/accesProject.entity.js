"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccesProject = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const project_entity_1 = require("./project.entity");
let AccesProject = class AccesProject {
};
exports.AccesProject = AccesProject;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], AccesProject.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: "project_id" }),
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project),
    __metadata("design:type", project_entity_1.Project)
], AccesProject.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], AccesProject.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AccesProject.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AccesProject.prototype, "updatedAt", void 0);
exports.AccesProject = AccesProject = __decorate([
    (0, typeorm_1.Entity)({
        name: "access_projects",
    })
], AccesProject);
//# sourceMappingURL=accesProject.entity.js.map
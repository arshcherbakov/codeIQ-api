"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const orm_config_1 = require("./orm.config");
const datasource = new typeorm_1.DataSource(orm_config_1.ormConfig);
datasource.initialize();
exports.default = datasource;
//# sourceMappingURL=migration.config.js.map
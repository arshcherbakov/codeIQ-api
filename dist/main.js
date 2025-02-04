"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    await app.listen(process.env.APP_PORT ?? 3000);
};
bootstrap();
//# sourceMappingURL=main.js.map
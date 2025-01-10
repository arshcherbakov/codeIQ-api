import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import { AppModule } from "./app.module";

const bootstrap = async (): Promise<void> => {
	const app = await NestFactory.create(AppModule);
	app.use(cookieParser());
	await app.listen(process.env.APP_PORT ?? 3000);
};

bootstrap();

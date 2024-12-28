import { CookieOptions } from "express";

const maxAge = 24 * 60 * 60 * 1000; //24h

export const cookieOptions: CookieOptions = {
	maxAge,
	httpOnly: true,
	sameSite: "none",
	secure: true,
};

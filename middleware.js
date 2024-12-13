import createMiddleware from "next-intl/middleware";
import { locales, localePrefix,pathnames } from "./navigation";

export default createMiddleware({
	// A list of all locales that are supported
	// locales: ["en", "es"],
	localePrefix,
  	locales,
	pathnames
	// Used when no locale matches
	// defaultLocale: "en",
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(es|en)/:path*"],
};

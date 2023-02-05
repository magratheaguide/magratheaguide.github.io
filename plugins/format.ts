import * as prettier from "prettier";

import type { Page } from "lume/core.ts";

export async function formatWithPrettier(page: Page) {
	try {
		const config = await prettier.resolveConfig("./");
		config.filepath = page.outputPath;

		const formattedContent = await prettier.format(page.content, config);
		page.content = formattedContent;
	} catch (error) {
		console.error(error);
	}
}

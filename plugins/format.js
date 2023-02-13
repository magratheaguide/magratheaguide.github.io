import * as prettier from "prettier";

const prettierConfig = await prettier.resolveConfig("./");

export async function formatWithPrettier(page) {
	try {
		const config = prettierConfig;
		config.filepath = page.outputPath;

		const formattedContent = await prettier.format(page.content, config);
		page.content = formattedContent;
	} catch (error) {
		console.error(error);
	}
}

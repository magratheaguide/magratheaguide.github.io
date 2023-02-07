import * as prettier from "prettier";

export async function formatWithPrettier(page) {
	try {
		const config = await prettier.resolveConfig("./");
		config.filepath = page.outputPath;

		const formattedContent = await prettier.format(page.content, config);
		page.content = formattedContent;
	} catch (error) {
		console.error(error);
	}
}

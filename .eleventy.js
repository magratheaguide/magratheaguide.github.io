const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const prettier = require("prettier");

module.exports = function (eleventyConfig) {
	// Organization is alphabetical when order doesn't matter

	eleventyConfig.addFilter("excludeOne", (array, exclusion) => {
		return array.filter((item) => item != exclusion);
	});

	eleventyConfig.addFilter("stringifyList", (array) => {
		// If any of the elements already contains a comma...
		if (array.join(" ").includes(",")) {
			// ...then separate elements with semicolons
			return array.join("; ");
		} else {
			return array.join(", ");
		}
	});

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addPassthroughCopy("source/_assets");

	eleventyConfig.addTransform("prettier", function (content) {
		const path = this.outputPath;

		if (!path) {
			return content;
		}

		async function prettierFormat(content, path) {
			let config = await prettier.resolveConfig(path);
			config.filepath = path;
			return prettier.format(content, config);
		}

		return prettierFormat(content, path);
	});

	return {
		dataTemplateEngine: "njk",
		dir: {
			input: "source",
			output: "_distribution",
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};

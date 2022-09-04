const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const prettier = require("prettier");

module.exports = function (eleventyConfig) {
	// Organization is alphabetical when order doesn't matter

	eleventyConfig.addFilter("excludeOne", (array, exclusion) => {
		return array.filter((item) => item != exclusion);
	});

	eleventyConfig.addPassthroughCopy("source/_assets");

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addShortcode("linkedTagsList", (tags) => {
		const separator = tags.join(" ").includes(",") ? "; " : ", ";
		let linkedTags = [];

		tags.forEach((tag) => {
			linkedTags.push(
				`<a href="/tags/${eleventyConfig.getFilter("slugify")(
					tag
				)}">${tag}</a>`
			);
		});

		return linkedTags.join(separator);
	});

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

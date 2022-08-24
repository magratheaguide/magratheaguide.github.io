module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("source/assets");

	return {
		dir: {
			input: "source",
			output: "_distribution",
		},
	};
};

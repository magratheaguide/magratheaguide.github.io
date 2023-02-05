export const layout = "layouts/tagged.njk";

export default function* ({ search }, filters) {
	const tags = search.values("tags");

	for (const tag of tags) {
		yield {
			url: `/tags/${filters.slugify(tag)}/`,
			searchTerm: tag,
			title: `Tagged "${tag}"`,
		};
	}
}

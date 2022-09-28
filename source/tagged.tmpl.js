export const layout = "layouts/collection.njk";

export default function* ({ search }, filters) {
	const tags = search.values("tags");

	console.log(filters);

	for (const tag of tags) {
		yield {
			url: `/tags/${filters.slugify(tag)}`,
			searchTerm: tag,
			title: `Tagged "${tag}"`,
		};
	}
}

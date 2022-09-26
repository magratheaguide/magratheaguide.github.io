import lume from "lume/mod.ts";
import { createSlugifier } from "lume/plugins/slugify_urls.ts";

const site = lume({
	dest: "./_distribution",
	location: new URL("https://magrathea.guide"),
	src: "./source",
});

const slugify = createSlugifier();

site.filter("slugify", (text) => slugify(text));

function linkHeadings(page) {
	/* Informed by:
		https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
		and
		https://www.leereamsnyder.com/blog/making-headings-with-links-show-up-in-safari-reader
	*/
	const triggerAttribute = "data-link-heading";

	page.document
		?.querySelectorAll(`:is(h2, h3)[${triggerAttribute}]`)
		.forEach((heading) => {
			if (!heading.id) {
				heading.id = slugify(heading.textContent);
			}

			heading.innerHTML = `<a href="#${heading.id}"><span>${heading.textContent}</span></a>`;

			/* Note that the dataset property isn't currently available.
			Watch https://github.com/b-fuze/deno-dom/issues/112 for changes. */
			heading.removeAttribute(triggerAttribute);
		});
}

site.process([".html"], linkHeadings);

site.loadAssets([".css"]);

export default site;

import { createSlugifier } from "lume/plugins/slugify_urls.ts";
import { merge } from "lume/core/utils.ts";

import type { Page, Site } from "lume/core.ts";

export interface Options {
	/** The list of extensions this plugin applies to */
	extensions: string[];

	/** Passed to querySelectorAll to locate headings */
	queryString: string;
}

// Default options
export const defaults: Options = {
	extensions: [".html"],
	queryString: "h2, h3, h4, h5, h6",
};

/** A plugin to add anchor links to specified headings */
export default function (userOptions?: Partial<Options>) {
	const options = merge(defaults, userOptions);
	const slugify = createSlugifier();

	return (site: Site) => {
		site.process(options.extensions, anchorHeadings);
	};

	function anchorHeadings(page: Page) {
		/* Informed by:
			https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
			and
			https://www.leereamsnyder.com/blog/making-headings-with-links-show-up-in-safari-reader
		*/
		page.document
			?.querySelectorAll(options.queryString)
			.forEach((heading) => {
				if (!heading.id) {
					heading.id = slugify(heading.textContent);
				}

				heading.innerHTML = `<a href="#${heading.id}"><span>${heading.textContent}</span></a>`;
			});
	}
}

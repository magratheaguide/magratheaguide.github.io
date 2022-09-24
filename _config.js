import lume from "lume/mod.ts";

const site = lume({
	dest: "./_distribution",
	location: new URL("https://magrathea.guide"),
	src: "./source",
});

export default site;

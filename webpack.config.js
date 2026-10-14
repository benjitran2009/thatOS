//@ts-check

/** @type { import('webpack').Configuration } */
export default {
	entry: "./src/core/index.html",
	mode: "development",
	output: {
		filename: "./index.html",
	},
};

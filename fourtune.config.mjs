import generateExportFile from "./generateExportFile.mjs"

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"export/async/__index.mts": generateExportFile("async"),
		"export/sync/__index.mts": generateExportFile("sync"),
		"export/default/__index.mts": generateExportFile("default")
	}
}

import generateExportFile from "./generateExportFile.mjs"

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"export/async/__star_export.mts": generateExportFile("async"),
		"export/sync/__star_export.mts": generateExportFile("sync"),
		"export/default/__star_export.mts": generateExportFile("default")
	}
}

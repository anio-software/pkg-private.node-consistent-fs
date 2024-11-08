import generateExportFile from "./generateExportFile.mjs"

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"src/export/async/__star_export.mts": generateExportFile("async"),
		"src/export/sync/__star_export.mts": generateExportFile("sync"),
		"src/export/default/__star_export.mts": generateExportFile("default")
	}
}

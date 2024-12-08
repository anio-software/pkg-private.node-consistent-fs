import generateExportFile from "./generateExportFile.mjs"

export default {
	realm: {
		name: "js",
		type: "package",

		options: {
			runtime: "node"
		}
	},

	autogenerate: {
		"src/export/async/__star_export.mts": generateExportFile("async"),
		"src/export/sync/__star_export.mts": generateExportFile("sync"),
		"src/export/default/__star_export.mts": generateExportFile("default")
	}
}

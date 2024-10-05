import generateTypesFile from "./generateTypesFile.mjs"
import generateExportFile from "./generateExportFile.mjs"

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"types/async.d.mts": generateTypesFile("async"),
		"types/sync.d.mts": generateTypesFile("sync"),
		"types/default.d.mts": generateTypesFile("default"),

		"async_export.mjs": generateExportFile("async"),
		"sync_export.mjs": generateExportFile("sync"),
		"default_export.mjs": generateExportFile("default")
	}
}

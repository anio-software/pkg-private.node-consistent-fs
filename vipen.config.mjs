import generateExportFile from "./generateExportFile.mjs"

export default {
	realm: "js",
	type: "package",

	target: {
		additional_entry_points: {
			"async": "src/entries/async.mjs",
			"sync": "src/entries/sync.mjs"
		}
	},

	autogenerate: {
		"exports.mjs": generateExportFile("index.mjs"),
		"sync_exports.mjs": generateExportFile("sync.mjs"),
		"async_exports.mjs": generateExportFile("async.mjs")
	}
}

import generateMethodsIndexFile from "./generateMethodsIndexFile.mjs"

export default {
	realm: "js",
	type: "package",

	preprocessing: [
		generateMethodsIndexFile()
	]
}

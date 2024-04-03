import generateMethodsIndexFile from "./generateMethodsIndexFile.mjs"

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"methods.mjs": generateMethodsIndexFile()
	}
}

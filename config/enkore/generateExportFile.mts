import fs from "node:fs/promises"
import path from "node:path"

type ExportKind = "default" | "async" | "sync"

async function getDefinedMethods(projectRoot: string) {
	const entries = await fs.readdir(
		path.join(projectRoot, "project", "src", "methods")
	)

	const methods = entries.map(file => {
		return file.slice(0, -3)
	})

	return methods
}

function generateImport(method: string, exportKind: ExportKind) {
	let code = `{`

	if (exportKind === "default") {
		code += `\n`
		code += `    asyncImplementation as ${method}__async,\n`
		code += `    syncImplementation as ${method}__sync`
		code += `\n`
	} else if (exportKind === "async") {
		code += `asyncImplementation as ${method}__async`
	} else if (exportKind === "sync") {
		code += `syncImplementation as ${method}__sync`
	}

	code += `}`

	return code
}

function exportMethod(methodName: string, impl: string) {
	let code = ``

	code += `export function ${methodName}(...args: Parameters<typeof ${impl}>) : ReturnType<typeof ${impl}> {\n`
	code += `    debugLogMethod("fs:${methodName}->${impl}");\n`
	code += `    return ${impl}(...args);\n`
	code += `}\n`

	return code
}

export default function(exportKind: ExportKind) {
	return async function(projectRoot: string) {
		const methods = await getDefinedMethods(projectRoot)
		let code = ``

		code += `import process from "node:process"\n\n`

		for (const method of methods) {
			code += `import ${generateImport(method, exportKind)} from "#~src/methods/${method}.ts"\n`

			if (exportKind === "default") code += "\n"
		}

		code += `\n\n`

		code += `function debugLogMethod(method_name : string) : void {\n`
		code += `    if (!process.env || !process.stderr) return\n`
		code += `    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return\n`
		code += `    process.stderr.write("@anio-fs/api method call " + method_name + "\\n");\n`
		code += `}`

		code += `\n\n`

		if (exportKind === "async") {
			for (const method of methods) {
				code += exportMethod(method + "Async", method + "__async")
				code += exportMethod(method, method + "__async")
			}
		}
		else if (exportKind === "sync") {
			for (const method of methods) {
				code += exportMethod(method + "Sync", method + "__sync")
				code += exportMethod(method, method + "__sync")
			}
		}
		// default export
		else {
			for (const method of methods) {
				code += exportMethod(method + "Sync", method + "__sync")
				code += exportMethod(method + "Async", method + "__async")
			}

			code += `export const fs = {\n`
			code += `    sync: {\n`
			for (const method of methods) {
				code += `        ${method}: ${method}Sync,\n`
			}
			code += `    },\n`
			code += `    async: {\n`
			for (const method of methods) {
				code += `        ${method}: ${method}Async,\n`
			}
			code += `    }\n`
			code += `}`
		}

		return code
	}
}

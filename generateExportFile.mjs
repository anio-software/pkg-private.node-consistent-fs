import fs from "node:fs/promises"
import path from "node:path"

async function getDefinedMethods(fourtune_session) {
	const methods_files = await fs.readdir(path.join(fourtune_session.getProjectRoot(), "src", "methods"))
	const methods = methods_files.map(file => file.slice(0, file.length - 4))

	return methods
}

function generateImport(method, export_kind) {
	let code = `{`

	if (export_kind === "default") {
		code += `\n`
		code += `    async_impl as ${method}__async,\n`
		code += `    sync_impl as ${method}__sync`
		code += `\n`
	} else if (export_kind === "async") {
		code += `async_impl as ${method}__async`
	} else if (export_kind === "sync") {
		code += `sync_impl as ${method}__sync`
	}

	code += `}`

	return code
}

function exportMethod(method_name, impl) {
	let code = ``

	code += `export function ${method_name}(...args) {\n`
	code += `    debugLogMethod("fs:${method_name}->${impl}");\n`
	code += `    return ${impl}(fs, ...args);\n`
	code += `}\n`

	return code
}

export default function(export_kind) {
	return async function(fourtune_session) {
		const methods = await getDefinedMethods(fourtune_session)
		let code = ``

		code += `import fs from "node:fs"\n\n`

		for (const method of methods) {
			code += `import ${generateImport(method, export_kind)} from "../methods/${method}.mjs"\n`

			if (export_kind === "default") code += "\n"
		}

		code += `\n\n`

		code += `function debugLogMethod(method_name) {\n`
		code += `    if (!process.env || !process.stderr) return\n`
		code += `    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return\n`
		code += `    process.stderr.write("@anio-fs/api method call " + method_name + "\\n");\n`
		code += `}`

		code += `\n\n`

		if (export_kind === "async") {
			for (const method of methods) {
				code += exportMethod(method + "Async", method + "__async")
				code += exportMethod(method, method + "__async")
			}
		}
		else if (export_kind === "sync") {
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
		}

		return code
	}
}

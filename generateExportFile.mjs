import fs from "node:fs/promises"
import path from "node:path"

async function getDefinedMethods(vipen_session) {
	const methods_files = await fs.readdir(path.join(vipen_session.getProjectRoot(), "src", "methods"))
	const methods = methods_files.map(file => file.slice(0, file.length - 4))

	return methods
}

export default function(output_file) {
	return async function(vipen_session) {
		const methods = await getDefinedMethods(vipen_session)
		let code = ``

		code += `import fs from "node:fs"\n\n`

		for (const method of methods) {
			code += `import ${method}_module from "../methods/${method}.mjs"\n`
		}

		code += `\n\n`

		code += `function debugLogMethod(method_name) {\n`
		code += `    if (!process.env || !process.stderr) return\n`
		code += `    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return\n`
		code += `    process.stderr.write("@anio-fs/api method call " + method_name + "\\n");\n`
		code += `}`

		code += `\n\n`

		switch (output_file) {
			case "index.mjs": {
				for (const method of methods) {
					code += `export function ${method}(...args) {\n`
					code += `    debugLogMethod("fs:${method}");\n`
					code += `    return ${method}_module.async_impl(fs, ...args);\n`
					code += `}\n`

					code += `\n`

					code += `export function ${method}Sync(...args) {\n`
					code += `    debugLogMethod("fs:${method}Sync");\n`
					code += `    return ${method}_module.sync_impl(fs, ...args);\n`
					code += `}\n`

					code += `\n`
				}
			} break

			case "sync.mjs": {
				for (const method of methods) {
					code += `export function ${method}(...args) {\n`
					code += `    debugLogMethod("fs/sync:${method}");\n`
					code += `    return ${method}_module.sync_impl(fs, ...args);\n`
					code += `}\n`

					code += `\n`
				}
			} break

			case "async.mjs": {
				for (const method of methods) {
					code += `export function ${method}(...args) {\n`
					code += `    debugLogMethod("fs/async:${method}");\n`
					code += `    return ${method}_module.async_impl(fs, ...args);\n`
					code += `}\n`

					code += `\n`
				}
			} break
		}

		return code

		/*
		let code = ``

		code += `import fs from "node:fs"\n`

		for (const method of methods) {
			code += `import ${method}_impl from "../methods/${method}.mjs"\n`
		}

		for (const method of methods) {
			let method_source = sync ? "sync_impl" : "async_impl"

			code += `\n`
			code += `export function ${method}(...args) {\n`
			code += `    return ${method}_impl.${method_source}(fs, ...args);\n`
			code += `}\n`
		}

		return code
		*/
	}
}

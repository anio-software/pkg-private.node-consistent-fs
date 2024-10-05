import fs from "node:fs/promises"
import path from "node:path"

async function getDefinedMethods(fourtune_session) {
	const methods_files = await fs.readdir(path.join(fourtune_session.getProjectRoot(), "src", "methods"))
	const methods = methods_files.map(file => file.slice(0, file.length - 4))

	return methods
}

function ucfirst(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1)
}

export default function(export_kind) {
	return async function(fourtune_session) {
		const methods = await getDefinedMethods(fourtune_session)
		let types = ""

		const args_type = `...args: any[]`
		const fns = []

		// async export
		if (export_kind === "async") {
			for (const method of methods) {
				types += `export type ${ucfirst(method)}AsyncType = (${args_type}) => Promise<any>\n`

				fns.push([method + "Async", ucfirst(method) + "AsyncType"])
				fns.push([method, ucfirst(method) + "AsyncType"])
			}
		}
		// sync export
		else if (export_kind === "sync") {
			for (const method of methods) {
				types += `export type ${ucfirst(method)}SyncType = (${args_type}) => any\n`

				fns.push([method + "Sync", ucfirst(method) + "SyncType"])
				fns.push([method, ucfirst(method) + "SyncType"])
			}
		}
		// default export
		else {
			for (const method of methods) {
				types += `export type ${ucfirst(method)}SyncType = (${args_type}) => any\n`
				types += `export type ${ucfirst(method)}AsyncType = (${args_type}) => Promise<any>\n`

				fns.push([method + "Async", ucfirst(method) + "AsyncType"])
				fns.push([method + "Sync", ucfirst(method) + "SyncType"])
			}
		}

		for (const [name, type] of fns) {
			types += `export const ${name} : ${type}\n`
		}

		return types
	}
}

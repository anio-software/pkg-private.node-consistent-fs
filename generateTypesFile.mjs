import fs from "node:fs/promises"
import path from "node:path"

async function getDefinedMethods(vipen_session) {
	const methods_files = await fs.readdir(path.join(vipen_session.getProjectRoot(), "src", "methods"))
	const methods = methods_files.map(file => file.slice(0, file.length - 4))

	return methods
}

export default function() {
	return async function(vipen_session) {
		const methods = await getDefinedMethods(vipen_session)
		let types = ""

		for (const method of methods) {
			types += `export function ${method}(...args : any[]) : Promise<any>\n`
			types += `export function ${method}Sync(...args : any[]) : any\n`
		}

		return types
	}
}

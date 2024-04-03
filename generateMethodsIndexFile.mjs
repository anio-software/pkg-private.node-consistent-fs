import fs from "node:fs/promises"
import path from "node:path"

export default function() {
	return async function(vipen_session) {
		const methods_files = await fs.readdir(path.join(vipen_session.getProjectRoot(), "src", "methods"))
		const methods = methods_files.map(file => file.slice(0, file.length - 4))

		let methods_index_file = `/* warning: this file was automatically generated */\n`

		for (const method of methods) {
			methods_index_file += `import ${method} from "../methods/${method}.mjs"\n`
		}

		methods_index_file += `\nexport default {\n`

		for (const method of methods) {
			methods_index_file += `    ${method},\n`
		}

		methods_index_file += `}\n`

		return methods_index_file
	}
}

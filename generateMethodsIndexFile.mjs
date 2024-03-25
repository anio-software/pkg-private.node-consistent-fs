import fs from "node:fs/promises"
import path from "node:path"

export default function() {
	return async function(context) {
		const methods_files = await fs.readdir(path.join(context.root, "src", "methods"))
		const methods = methods_files.map(file => file.slice(0, file.length - 4))

		let methods_index_file = `/* warning: this file was automatically generated */\n`

		for (const method of methods) {
			methods_index_file += `import ${method} from "./methods/${method}.mjs"\n`
		}

		methods_index_file += `\nexport default {\n`

		for (const method of methods) {
			methods_index_file += `    ${method},\n`
		}

		methods_index_file += `}\n`

		await fs.writeFile(
			path.join(context.root, "src", "methods.mjs"),
			methods_index_file
		)
	}
}

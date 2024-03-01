import fs from "node:fs/promises"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const methods_files = await fs.readdir(path.join(__dirname, "src", "methods"))
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
	path.join(__dirname, "src", "methods.mjs"),
	methods_index_file
)

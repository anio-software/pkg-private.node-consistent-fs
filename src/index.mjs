import fs_implementation from "node:fs"
import methods from "./methods.mjs"

function createFSObject({
	sync = false
} = {}) {
	let fs_object = {}

	for (const method_name in methods) {
		const method = methods[method_name]
		const method_implementation = sync ? method.sync_impl : method.async_impl

		fs_object[method_name] = (...args) => {
			return method_implementation(fs_implementation, ...args)
		}
	}

	return fs_object
}

export default createFSObject

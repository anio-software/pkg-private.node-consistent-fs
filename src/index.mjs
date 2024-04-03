import fs_implementation from "node:fs"
import process from "node:process"
import methods from "./auto/methods.mjs"

export function createFSObject({
	sync = false
} = {}) {
	let fs_object = {}

	for (const method_name in methods) {
		const method = methods[method_name]
		const method_implementation = sync ? method.sync_impl : method.async_impl

		fs_object[method_name] = (...args) => {

			if (process.env) {
				if ("ANIO_NODE_FS_API_DEBUG" in process.env) {
					console.error(`anio-node-fs-api ${method_name}${sync ? "Sync" : "Async"} with args`, args)
				}
			}

			return method_implementation(fs_implementation, ...args)
		}
	}

	return fs_object
}

const async_fs = createFSObject({sync: false})
const sync_fs = createFSObject({sync: true})

export const async = async_fs
export const sync = sync_fs

export default {async, sync}

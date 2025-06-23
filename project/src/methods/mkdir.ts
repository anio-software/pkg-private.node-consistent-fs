import fs from "node:fs"

export function syncImplementation(path: string, options?: fs.MakeDirectoryOptions): undefined {
	if (typeof options === "undefined") {
		fs.mkdirSync(path)
	} else {
		fs.mkdirSync(path, options)
	}
}

export async function asyncImplementation(path: string, options?: fs.MakeDirectoryOptions): Promise<ReturnType<typeof sync_impl>> {
	if (typeof options === "undefined") {
		await fs.promises.mkdir(path)
	} else {
		await fs.promises.mkdir(path, options)
	}
}

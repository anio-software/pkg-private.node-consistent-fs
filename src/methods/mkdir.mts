import fs from "node:fs"

export function sync_impl(path : string, options = null) : void {
	if (options === null) {
		fs.mkdirSync(path)
	} else {
		fs.mkdirSync(path, options)
	}
}

export async function async_impl(path : string, options = null) : Promise<ReturnType<typeof sync_impl>> {
	if (options === null) {
		await fs.promises.mkdir(path)
	} else {
		await fs.promises.mkdir(path, options)
	}
}

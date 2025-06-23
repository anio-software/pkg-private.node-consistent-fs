import fs from "node:fs"

export function syncImplementation(path: string): fs.Stats {
	return fs.lstatSync(path)
}

export async function async_impl(path: string): Promise<ReturnType<typeof sync_impl>> {
	return await fs.promises.lstat(path)
}

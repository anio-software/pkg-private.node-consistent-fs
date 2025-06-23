import fs from "node:fs"

export function syncImplementation(path: string): fs.Stats {
	return fs.statSync(path)
}

export async function asyncImplementation(path: string): Promise<ReturnType<typeof sync_impl>> {
	return await fs.promises.stat(path)
}

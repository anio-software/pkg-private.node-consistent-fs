import fs from "node:fs"

export function syncImplementation(path: string): fs.Stats {
	return fs.lstatSync(path)
}

export async function asyncImplementation(
	path: string
): Promise<ReturnType<typeof syncImplementation>> {
	return await fs.promises.lstat(path)
}

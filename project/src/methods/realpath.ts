import fs from "node:fs"

export function syncImplementation(path: string): string {
	return fs.realpathSync(path)
}

export async function asyncImplementation(
	path: string
): Promise<ReturnType<typeof syncImplementation>> {
	return await fs.promises.realpath(path)
}

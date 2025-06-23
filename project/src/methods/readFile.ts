import fs from "node:fs"

export function syncImplementation(path: string): Buffer {
	return fs.readFileSync(path)
}

export async function asyncImplementation(
	path: string
): Promise<ReturnType<typeof syncImplementation>> {
	return await fs.promises.readFile(path)
}

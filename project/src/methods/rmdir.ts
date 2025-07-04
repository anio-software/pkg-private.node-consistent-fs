import fs from "node:fs"

export function syncImplementation(path: string): undefined {
	fs.rmdirSync(path)
}

export async function asyncImplementation(
	path: string
): Promise<ReturnType<typeof syncImplementation>> {
	await fs.promises.rmdir(path)
}

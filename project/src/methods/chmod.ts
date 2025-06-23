import fs from "node:fs"

export function syncImplementation(path: string, mode: number): undefined {
	fs.chmodSync(path, mode)
}

export async function asyncImplementation(
	path: string,
	mode: number
): Promise<ReturnType<typeof syncImplementation>> {
	await fs.promises.chmod(path, mode)
}

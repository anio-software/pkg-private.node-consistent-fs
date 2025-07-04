import fs from "node:fs"

export function syncImplementation(path: string): undefined {
	fs.unlinkSync(path)
}

export async function asyncImplementation(
	path: string
): Promise<ReturnType<typeof syncImplementation>> {
	await fs.promises.unlink(path)
}

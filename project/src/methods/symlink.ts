import fs from "node:fs"

export function syncImplementation(target: string, path: string): undefined {
	fs.symlinkSync(target, path)
}

export async function asyncImplementation(
	target: string,
	path: string
): Promise<ReturnType<typeof syncImplementation>> {
	await fs.promises.symlink(target, path)
}

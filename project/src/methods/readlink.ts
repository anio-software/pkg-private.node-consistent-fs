import fs from "node:fs"

export function syncImplementation(path: string): string {
	return fs.readlinkSync(path)
}

export async function asyncImplementation(path: string): Promise<ReturnType<typeof sync_impl>> {
	return await fs.promises.readlink(path)
}

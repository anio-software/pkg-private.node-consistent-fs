import fs from "node:fs"

export function syncImplementation(path: string): string {
	return fs.realpathSync(path)
}

export async function async_impl(path: string): Promise<ReturnType<typeof sync_impl>> {
	return await fs.promises.realpath(path)
}

import fs from "node:fs"

export function syncImplementation(path: string): undefined {
	fs.rmdirSync(path)
}

export async function async_impl(path: string): Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.rmdir(path)
}

import fs from "node:fs"

export function syncImplementation(src: string, dest: string): undefined {
	fs.renameSync(src, dest)
}

export async function async_impl(src: string, dest: string): Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.rename(src, dest)
}

import fs from "node:fs"

export function sync_impl(target: string, path: string): undefined {
	fs.symlinkSync(target, path)
}

export async function async_impl(target: string, path: string): Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.symlink(target, path)
}

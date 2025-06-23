import fs from "node:fs"

export function sync_impl(path: string, uid: number, gid: number): undefined {
	fs.chownSync(path, uid, gid)
}

export async function async_impl(path: string, uid: number, gid: number): Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.chown(path, uid, gid)
}

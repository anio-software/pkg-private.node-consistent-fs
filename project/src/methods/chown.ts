import fs from "node:fs"

export function syncImplementation(path: string, uid: number, gid: number): undefined {
	fs.chownSync(path, uid, gid)
}

export async function asyncImplementation(
	path: string,
	uid: number,
	gid: number
): Promise<ReturnType<typeof syncImplementation>> {
	await fs.promises.chown(path, uid, gid)
}

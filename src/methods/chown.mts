export function sync_impl(fs, path, uid, gid) {
	fs.chownSync(path, uid, gid)
}

export async function async_impl(fs, path, uid, gid) {
	await fs.promises.chown(path, uid, gid)
}

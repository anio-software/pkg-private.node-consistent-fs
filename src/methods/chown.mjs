function sync_impl(fs, path, uid, gid) {
	fs.chownSync(path, uid, gid)
}

async function async_impl(fs, path, uid, gid) {
	await fs.promises.chown(path, uid, gid)
}

export default {sync_impl, async_impl}

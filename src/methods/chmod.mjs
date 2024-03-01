function sync_impl(fs, path, mode) {
	fs.chmodSync(path, mode)
}

async function async_impl(fs, path, mode) {
	await fs.promises.chmod(path, mode)
}

export default {sync_impl, async_impl}

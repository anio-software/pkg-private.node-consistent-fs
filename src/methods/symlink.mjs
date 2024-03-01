function sync_impl(fs, target, path) {
	fs.symlinkSync(target, path)
}

async function async_impl(fs, target, path) {
	await fs.promises.symlink(target, path)
}

export default {sync_impl, async_impl}

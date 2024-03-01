function sync_impl(fs, src, dest) {
	fs.renameSync(src, dest)
}

async function async_impl(fs, src, dest) {
	await fs.promises.rename(src, dest)
}

export default {sync_impl, async_impl}

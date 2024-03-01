function sync_impl(fs, path) {
	fs.unlinkSync(path)
}

async function async_impl(fs, path) {
	await fs.promises.unlink(path)
}

export default {sync_impl, async_impl}

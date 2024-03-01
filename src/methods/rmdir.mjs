function sync_impl(fs, path) {
	fs.rmdirSync(path)
}

async function async_impl(fs, path) {
	await fs.promises.rmdir(path)
}

export default {sync_impl, async_impl}

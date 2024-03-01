function sync_impl(fs, path) {
	fs.mkdirSync(path)
}

async function async_impl(fs, path) {
	await fs.promises.mkdir(path)
}

export default {sync_impl, async_impl}

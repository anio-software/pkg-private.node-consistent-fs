function sync_impl(fs, path) {
	return fs.readdirSync(path)
}

async function async_impl(fs, path) {
	return await fs.promises.readdir(path)
}

export default {sync_impl, async_impl}

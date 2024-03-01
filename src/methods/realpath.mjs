function sync_impl(fs, path) {
	return fs.realpathSync(path)
}

async function async_impl(fs, path) {
	return await fs.promises.realpath(path)
}

export default {sync_impl, async_impl}

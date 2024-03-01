function sync_impl(fs, path) {
	return fs.lstatSync(path)
}

async function async_impl(fs, path) {
	return await fs.promises.lstat(path)
}

export default {sync_impl, async_impl}

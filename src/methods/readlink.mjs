function sync_impl(fs, path) {
	return fs.readlinkSync(path)
}

async function async_impl(fs, path) {
	return await fs.promises.readlink(path)
}

export default {sync_impl, async_impl}

function sync_impl(fs, path) {
	return fs.readFileSync(path)
}

async function async_impl(fs, path) {
	return await fs.promises.readFile(path)
}

export default {sync_impl, async_impl}

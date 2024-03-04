function sync_impl(fs, path, data) {
	return fs.writeFileSync(path, data)
}

async function async_impl(fs, path) {
	return await fs.promises.writeFile(path, data)
}

export default {sync_impl, async_impl}

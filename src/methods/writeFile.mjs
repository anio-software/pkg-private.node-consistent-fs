function sync_impl(fs, path) {
	return fs.writeFileSync(path)
}

async function async_impl(fs, path) {
	return await fs.promises.writeFile(path)
}

export default {sync_impl, async_impl}

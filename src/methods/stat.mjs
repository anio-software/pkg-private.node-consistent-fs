export function sync_impl(fs, path) {
	return fs.statSync(path)
}

export async function async_impl(fs, path) {
	return await fs.promises.stat(path)
}

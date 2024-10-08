export function sync_impl(fs, path) {
	return fs.realpathSync(path)
}

export async function async_impl(fs, path) {
	return await fs.promises.realpath(path)
}

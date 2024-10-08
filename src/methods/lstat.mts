export function sync_impl(fs, path) {
	return fs.lstatSync(path)
}

export async function async_impl(fs, path) {
	return await fs.promises.lstat(path)
}

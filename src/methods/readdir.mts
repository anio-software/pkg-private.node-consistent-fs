export function sync_impl(fs, path) {
	return fs.readdirSync(path)
}

export async function async_impl(fs, path) {
	return await fs.promises.readdir(path)
}

export function sync_impl(fs, path) {
	return fs.readlinkSync(path)
}

export async function async_impl(fs, path) {
	return await fs.promises.readlink(path)
}

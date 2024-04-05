export function sync_impl(fs, path) {
	fs.rmdirSync(path)
}

export async function async_impl(fs, path) {
	await fs.promises.rmdir(path)
}

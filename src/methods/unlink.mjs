export function sync_impl(fs, path) {
	fs.unlinkSync(path)
}

export async function async_impl(fs, path) {
	await fs.promises.unlink(path)
}

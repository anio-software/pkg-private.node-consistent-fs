export function sync_impl(fs, path, mode) {
	fs.chmodSync(path, mode)
}

export async function async_impl(fs, path, mode) {
	await fs.promises.chmod(path, mode)
}

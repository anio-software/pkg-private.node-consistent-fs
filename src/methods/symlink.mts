export function sync_impl(fs, target, path) {
	fs.symlinkSync(target, path)
}

export async function async_impl(fs, target, path) {
	await fs.promises.symlink(target, path)
}

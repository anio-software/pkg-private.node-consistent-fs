export function sync_impl(fs, src, dest) {
	fs.renameSync(src, dest)
}

export async function async_impl(fs, src, dest) {
	await fs.promises.rename(src, dest)
}

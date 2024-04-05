export function sync_impl(fs, src, dest) {
	fs.copyFileSync(src, dest)
}

export async function async_impl(fs, src, dest) {
	await fs.promises.copyFile(src, dest)
}

function sync_impl(fs, src, dest) {
	fs.copyFileSync(src, dest)
}

async function async_impl(fs, src, dest) {
	await fs.promises.copyFile(src, dest)
}

export default {sync_impl, async_impl}

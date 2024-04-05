export function sync_impl(fs, path, options = null) {
	if (options === null) {
		fs.mkdirSync(path)
	} else {
		fs.mkdirSync(path, options)
	}
}

export async function async_impl(fs, path, options = null) {
	if (options === null) {
		await fs.promises.mkdir(path)
	} else {
		await fs.promises.mkdir(path, options)
	}
}

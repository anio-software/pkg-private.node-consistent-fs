export function sync_impl(fs, path) {
	return fs.readFileSync(path)
}

export async function async_impl(fs, path) {
	return await fs.promises.readFile(path)
}

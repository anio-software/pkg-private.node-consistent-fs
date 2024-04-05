export function sync_impl(fs, path, data) {
	return fs.writeFileSync(path, data)
}

export async function async_impl(fs, path, data) {
	return await fs.promises.writeFile(path, data)
}

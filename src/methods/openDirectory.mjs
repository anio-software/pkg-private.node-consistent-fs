export function sync_impl(fs, path) {
	const handle = fs.opendirSync(path)

	return {
		read() {
			return handle.readSync()
		},
		close() {
			handle.closeSync()
		}
	}
}

export async function async_impl(fs, path) {
	const handle = await fs.promises.opendir(path)

	return {
		async read() {
			return await handle.read()
		},
		async close() {
			await handle.close()
		}
	}
}

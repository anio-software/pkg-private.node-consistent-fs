export function sync_impl(fs, path, flags = "r", mode = 0o666) {
	const fd = fs.openSync(path, flags, mode)

	return {
		read(buffer) {
			return fs.readSync(fd, buffer)
		},
		write(buffer) {
			return fs.writeSync(fd, buffer)
		},
		close() {
			fs.closeSync(fd)
		}
	}
}

export async function async_impl(fs, path, flags = "r", mode = 0o666) {
	const handle = await fs.promises.open(path, flags, mode)

	return {
		async read(buffer) {
			const {bytesRead} = await handle.read(buffer, 0, buffer.byteLength, null)

			return bytesRead
		},
		async write(buffer) {
			const {bytesWritten} = await handle.write(buffer)

			return bytesWritten
		},
		async close() {
			await handle.close()
		}
	}
}

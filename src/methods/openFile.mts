import fs from "node:fs"

export function sync_impl(path : string, flags : string = "r", mode : number = 0o666) {
	const fd = fs.openSync(path, flags, mode)

	return {
		read(buffer : Buffer) {
			return fs.readSync(fd, buffer)
		},
		write(buffer : Buffer) {
			return fs.writeSync(fd, buffer)
		},
		close() : undefined {
			fs.closeSync(fd)
		}
	}
}

export async function async_impl(path : string, flags : string = "r", mode : number = 0o666) {
	const handle = await fs.promises.open(path, flags, mode)

	return {
		async read(buffer : Buffer) {
			const {bytesRead} = await handle.read(buffer, 0, buffer.byteLength, null)

			return bytesRead
		},
		async write(buffer : Buffer) {
			const {bytesWritten} = await handle.write(buffer)

			return bytesWritten
		},
		async close() : Promise<undefined> {
			await handle.close()
		}
	}
}

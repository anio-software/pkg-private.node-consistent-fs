import fs from "node:fs"

export function sync_impl(path : string) {
	const handle = fs.opendirSync(path)

	return {
		read() : fs.Dirent | null {
			return handle.readSync()
		},
		close() : void {
			handle.closeSync()
		}
	}
}

export async function async_impl(path : string) {
	const handle = await fs.promises.opendir(path)

	return {
		async read() : Promise<fs.Dirent | null> {
			return await handle.read()
		},
		async close() : Promise<void> {
			await handle.close()
		}
	}
}

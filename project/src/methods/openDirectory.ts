import fs from "node:fs"

export function syncImplementation(path: string) {
	const handle = fs.opendirSync(path)

	return {
		read(): fs.Dirent | null {
			return handle.readSync()
		},
		close(): undefined {
			handle.closeSync()
		}
	}
}

export async function asyncImplementation(path: string) {
	const handle = await fs.promises.opendir(path)

	return {
		async read(): Promise<fs.Dirent | null> {
			return await handle.read()
		},
		async close(): Promise<undefined> {
			await handle.close()
		}
	}
}

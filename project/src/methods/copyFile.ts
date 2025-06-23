import fs from "node:fs"

export function syncImplementation(src: string, dest: string): undefined {
	fs.copyFileSync(src, dest)
}

export async function asyncImplementation(src: string, dest: string): Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.copyFile(src, dest)
}

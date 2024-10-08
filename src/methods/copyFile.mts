import fs from "node:fs"

export function sync_impl(src : string, dest : string) : void {
	fs.copyFileSync(src, dest)
}

export async function async_impl(src : string, dest : string) : Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.copyFile(src, dest)
}

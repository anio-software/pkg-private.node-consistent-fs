import fs from "node:fs"

export function sync_impl(src : string, dest : string) : void {
	fs.renameSync(src, dest)
}

export async function async_impl(src : string, dest : string) : Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.rename(src, dest)
}

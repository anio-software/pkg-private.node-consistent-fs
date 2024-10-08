import fs from "node:fs"

export function sync_impl(path : string) : void {
	fs.unlinkSync(path)
}

export async function async_impl(path : string) : Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.unlink(path)
}

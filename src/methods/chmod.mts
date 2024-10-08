import fs from "node:fs"

export function sync_impl(path : string, mode : number) : void {
	fs.chmodSync(path, mode)
}

export async function async_impl(path : string, mode : number) : Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.chmod(path, mode)
}

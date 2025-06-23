import fs from "node:fs"

export function sync_impl(path : string) : string[] {
	return fs.readdirSync(path)
}

export async function async_impl(path : string) : Promise<ReturnType<typeof sync_impl>> {
	return await fs.promises.readdir(path)
}

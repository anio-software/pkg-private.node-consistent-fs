import fs from "node:fs"

export function sync_impl(path : string, data : Buffer|string) : undefined {
	fs.writeFileSync(path, data)
}

export async function async_impl(path : string, data : Buffer|string) : Promise<ReturnType<typeof sync_impl>> {
	await fs.promises.writeFile(path, data)
}

import fs from "node:fs"

const defaultMode = 0o666

export function syncImplementation(
	path: string,
	data: Buffer|string,
	options?: {
		mode?: number
	}
): undefined {
	const mode = options?.mode ?? defaultMode

	fs.writeFileSync(path, data, {mode})
}

export async function async_impl(
	path: string,
	data: Buffer|string,
	options?: {
		mode?: number
	}
): Promise<ReturnType<typeof sync_impl>> {
	const mode = options?.mode ?? defaultMode

	await fs.promises.writeFile(path, data, {mode})
}

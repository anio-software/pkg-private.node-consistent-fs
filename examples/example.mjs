import createFSObject from "../src/index.mjs"

const sync_fs = createFSObject({
	sync: true
})

const async_fs = createFSObject({
	sync: false
})

console.log(sync_fs, async_fs)

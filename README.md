# @anio-fs/api

A node fs API that is consistent for both async and sync operation.

```js
import fs from "@anio-fs/api"

const {
	chmod,
	chown,
	copyFile,
	lstat,
	mkdir,
	openDirectory,
	openFile,
	readdir,
	readlink,
	realpath,
	rename,
	rmdir,
	stat,
	symlink,
	unlink
} = fs.sync
```

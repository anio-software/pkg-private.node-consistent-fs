import fs from "node:fs"

import {
    sync_impl as chmod__sync
} from "../methods/chmod.mjs"

import {
    sync_impl as chown__sync
} from "../methods/chown.mjs"

import {
    sync_impl as copyFile__sync
} from "../methods/copyFile.mjs"

import {
    sync_impl as lstat__sync
} from "../methods/lstat.mjs"

import {
    sync_impl as mkdir__sync
} from "../methods/mkdir.mjs"

import {
    sync_impl as openDirectory__sync
} from "../methods/openDirectory.mjs"

import {
    sync_impl as openFile__sync
} from "../methods/openFile.mjs"

import {
    sync_impl as readFile__sync
} from "../methods/readFile.mjs"

import {
    sync_impl as readdir__sync
} from "../methods/readdir.mjs"

import {
    sync_impl as readlink__sync
} from "../methods/readlink.mjs"

import {
    sync_impl as realpath__sync
} from "../methods/realpath.mjs"

import {
    sync_impl as rename__sync
} from "../methods/rename.mjs"

import {
    sync_impl as rmdir__sync
} from "../methods/rmdir.mjs"

import {
    sync_impl as stat__sync
} from "../methods/stat.mjs"

import {
    sync_impl as symlink__sync
} from "../methods/symlink.mjs"

import {
    sync_impl as unlink__sync
} from "../methods/unlink.mjs"

import {
    sync_impl as writeFile__sync
} from "../methods/writeFile.mjs"



function debugLogMethod(method_name) {
    if (!process.env || !process.stderr) return
    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return
    process.stderr.write("@anio-fs/api method call " + method_name + "\n");
}

export function chmod(...args) {
    debugLogMethod("fs/sync:chmod");
    return chmod__sync(fs, ...args);
}

export function chown(...args) {
    debugLogMethod("fs/sync:chown");
    return chown__sync(fs, ...args);
}

export function copyFile(...args) {
    debugLogMethod("fs/sync:copyFile");
    return copyFile__sync(fs, ...args);
}

export function lstat(...args) {
    debugLogMethod("fs/sync:lstat");
    return lstat__sync(fs, ...args);
}

export function mkdir(...args) {
    debugLogMethod("fs/sync:mkdir");
    return mkdir__sync(fs, ...args);
}

export function openDirectory(...args) {
    debugLogMethod("fs/sync:openDirectory");
    return openDirectory__sync(fs, ...args);
}

export function openFile(...args) {
    debugLogMethod("fs/sync:openFile");
    return openFile__sync(fs, ...args);
}

export function readFile(...args) {
    debugLogMethod("fs/sync:readFile");
    return readFile__sync(fs, ...args);
}

export function readdir(...args) {
    debugLogMethod("fs/sync:readdir");
    return readdir__sync(fs, ...args);
}

export function readlink(...args) {
    debugLogMethod("fs/sync:readlink");
    return readlink__sync(fs, ...args);
}

export function realpath(...args) {
    debugLogMethod("fs/sync:realpath");
    return realpath__sync(fs, ...args);
}

export function rename(...args) {
    debugLogMethod("fs/sync:rename");
    return rename__sync(fs, ...args);
}

export function rmdir(...args) {
    debugLogMethod("fs/sync:rmdir");
    return rmdir__sync(fs, ...args);
}

export function stat(...args) {
    debugLogMethod("fs/sync:stat");
    return stat__sync(fs, ...args);
}

export function symlink(...args) {
    debugLogMethod("fs/sync:symlink");
    return symlink__sync(fs, ...args);
}

export function unlink(...args) {
    debugLogMethod("fs/sync:unlink");
    return unlink__sync(fs, ...args);
}

export function writeFile(...args) {
    debugLogMethod("fs/sync:writeFile");
    return writeFile__sync(fs, ...args);
}


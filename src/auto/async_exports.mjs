import fs from "node:fs"

import {
    async_impl as chmod__async
} from "../methods/chmod.mjs"

import {
    async_impl as chown__async
} from "../methods/chown.mjs"

import {
    async_impl as copyFile__async
} from "../methods/copyFile.mjs"

import {
    async_impl as lstat__async
} from "../methods/lstat.mjs"

import {
    async_impl as mkdir__async
} from "../methods/mkdir.mjs"

import {
    async_impl as openDirectory__async
} from "../methods/openDirectory.mjs"

import {
    async_impl as openFile__async
} from "../methods/openFile.mjs"

import {
    async_impl as readFile__async
} from "../methods/readFile.mjs"

import {
    async_impl as readdir__async
} from "../methods/readdir.mjs"

import {
    async_impl as readlink__async
} from "../methods/readlink.mjs"

import {
    async_impl as realpath__async
} from "../methods/realpath.mjs"

import {
    async_impl as rename__async
} from "../methods/rename.mjs"

import {
    async_impl as rmdir__async
} from "../methods/rmdir.mjs"

import {
    async_impl as stat__async
} from "../methods/stat.mjs"

import {
    async_impl as symlink__async
} from "../methods/symlink.mjs"

import {
    async_impl as unlink__async
} from "../methods/unlink.mjs"

import {
    async_impl as writeFile__async
} from "../methods/writeFile.mjs"



function debugLogMethod(method_name) {
    if (!process.env || !process.stderr) return
    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return
    process.stderr.write("@anio-fs/api method call " + method_name + "\n");
}

export function chmod(...args) {
    debugLogMethod("fs/async:chmod");
    return chmod__async(fs, ...args);
}

export function chown(...args) {
    debugLogMethod("fs/async:chown");
    return chown__async(fs, ...args);
}

export function copyFile(...args) {
    debugLogMethod("fs/async:copyFile");
    return copyFile__async(fs, ...args);
}

export function lstat(...args) {
    debugLogMethod("fs/async:lstat");
    return lstat__async(fs, ...args);
}

export function mkdir(...args) {
    debugLogMethod("fs/async:mkdir");
    return mkdir__async(fs, ...args);
}

export function openDirectory(...args) {
    debugLogMethod("fs/async:openDirectory");
    return openDirectory__async(fs, ...args);
}

export function openFile(...args) {
    debugLogMethod("fs/async:openFile");
    return openFile__async(fs, ...args);
}

export function readFile(...args) {
    debugLogMethod("fs/async:readFile");
    return readFile__async(fs, ...args);
}

export function readdir(...args) {
    debugLogMethod("fs/async:readdir");
    return readdir__async(fs, ...args);
}

export function readlink(...args) {
    debugLogMethod("fs/async:readlink");
    return readlink__async(fs, ...args);
}

export function realpath(...args) {
    debugLogMethod("fs/async:realpath");
    return realpath__async(fs, ...args);
}

export function rename(...args) {
    debugLogMethod("fs/async:rename");
    return rename__async(fs, ...args);
}

export function rmdir(...args) {
    debugLogMethod("fs/async:rmdir");
    return rmdir__async(fs, ...args);
}

export function stat(...args) {
    debugLogMethod("fs/async:stat");
    return stat__async(fs, ...args);
}

export function symlink(...args) {
    debugLogMethod("fs/async:symlink");
    return symlink__async(fs, ...args);
}

export function unlink(...args) {
    debugLogMethod("fs/async:unlink");
    return unlink__async(fs, ...args);
}

export function writeFile(...args) {
    debugLogMethod("fs/async:writeFile");
    return writeFile__async(fs, ...args);
}


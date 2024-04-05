import fs from "node:fs"

import {
    async_impl as chmod__async,
    sync_impl as chmod__sync
} from "../methods/chmod.mjs"

import {
    async_impl as chown__async,
    sync_impl as chown__sync
} from "../methods/chown.mjs"

import {
    async_impl as copyFile__async,
    sync_impl as copyFile__sync
} from "../methods/copyFile.mjs"

import {
    async_impl as lstat__async,
    sync_impl as lstat__sync
} from "../methods/lstat.mjs"

import {
    async_impl as mkdir__async,
    sync_impl as mkdir__sync
} from "../methods/mkdir.mjs"

import {
    async_impl as openDirectory__async,
    sync_impl as openDirectory__sync
} from "../methods/openDirectory.mjs"

import {
    async_impl as openFile__async,
    sync_impl as openFile__sync
} from "../methods/openFile.mjs"

import {
    async_impl as readFile__async,
    sync_impl as readFile__sync
} from "../methods/readFile.mjs"

import {
    async_impl as readdir__async,
    sync_impl as readdir__sync
} from "../methods/readdir.mjs"

import {
    async_impl as readlink__async,
    sync_impl as readlink__sync
} from "../methods/readlink.mjs"

import {
    async_impl as realpath__async,
    sync_impl as realpath__sync
} from "../methods/realpath.mjs"

import {
    async_impl as rename__async,
    sync_impl as rename__sync
} from "../methods/rename.mjs"

import {
    async_impl as rmdir__async,
    sync_impl as rmdir__sync
} from "../methods/rmdir.mjs"

import {
    async_impl as stat__async,
    sync_impl as stat__sync
} from "../methods/stat.mjs"

import {
    async_impl as symlink__async,
    sync_impl as symlink__sync
} from "../methods/symlink.mjs"

import {
    async_impl as unlink__async,
    sync_impl as unlink__sync
} from "../methods/unlink.mjs"

import {
    async_impl as writeFile__async,
    sync_impl as writeFile__sync
} from "../methods/writeFile.mjs"



function debugLogMethod(method_name) {
    if (!process.env || !process.stderr) return
    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return
    process.stderr.write("@anio-fs/api method call " + method_name + "\n");
}

export function chmod(...args) {
    debugLogMethod("fs:chmod");
    return chmod__async(fs, ...args);
}

export function chmodSync(...args) {
    debugLogMethod("fs:chmodSync");
    return chmod__sync(fs, ...args);
}

export function chown(...args) {
    debugLogMethod("fs:chown");
    return chown__async(fs, ...args);
}

export function chownSync(...args) {
    debugLogMethod("fs:chownSync");
    return chown__sync(fs, ...args);
}

export function copyFile(...args) {
    debugLogMethod("fs:copyFile");
    return copyFile__async(fs, ...args);
}

export function copyFileSync(...args) {
    debugLogMethod("fs:copyFileSync");
    return copyFile__sync(fs, ...args);
}

export function lstat(...args) {
    debugLogMethod("fs:lstat");
    return lstat__async(fs, ...args);
}

export function lstatSync(...args) {
    debugLogMethod("fs:lstatSync");
    return lstat__sync(fs, ...args);
}

export function mkdir(...args) {
    debugLogMethod("fs:mkdir");
    return mkdir__async(fs, ...args);
}

export function mkdirSync(...args) {
    debugLogMethod("fs:mkdirSync");
    return mkdir__sync(fs, ...args);
}

export function openDirectory(...args) {
    debugLogMethod("fs:openDirectory");
    return openDirectory__async(fs, ...args);
}

export function openDirectorySync(...args) {
    debugLogMethod("fs:openDirectorySync");
    return openDirectory__sync(fs, ...args);
}

export function openFile(...args) {
    debugLogMethod("fs:openFile");
    return openFile__async(fs, ...args);
}

export function openFileSync(...args) {
    debugLogMethod("fs:openFileSync");
    return openFile__sync(fs, ...args);
}

export function readFile(...args) {
    debugLogMethod("fs:readFile");
    return readFile__async(fs, ...args);
}

export function readFileSync(...args) {
    debugLogMethod("fs:readFileSync");
    return readFile__sync(fs, ...args);
}

export function readdir(...args) {
    debugLogMethod("fs:readdir");
    return readdir__async(fs, ...args);
}

export function readdirSync(...args) {
    debugLogMethod("fs:readdirSync");
    return readdir__sync(fs, ...args);
}

export function readlink(...args) {
    debugLogMethod("fs:readlink");
    return readlink__async(fs, ...args);
}

export function readlinkSync(...args) {
    debugLogMethod("fs:readlinkSync");
    return readlink__sync(fs, ...args);
}

export function realpath(...args) {
    debugLogMethod("fs:realpath");
    return realpath__async(fs, ...args);
}

export function realpathSync(...args) {
    debugLogMethod("fs:realpathSync");
    return realpath__sync(fs, ...args);
}

export function rename(...args) {
    debugLogMethod("fs:rename");
    return rename__async(fs, ...args);
}

export function renameSync(...args) {
    debugLogMethod("fs:renameSync");
    return rename__sync(fs, ...args);
}

export function rmdir(...args) {
    debugLogMethod("fs:rmdir");
    return rmdir__async(fs, ...args);
}

export function rmdirSync(...args) {
    debugLogMethod("fs:rmdirSync");
    return rmdir__sync(fs, ...args);
}

export function stat(...args) {
    debugLogMethod("fs:stat");
    return stat__async(fs, ...args);
}

export function statSync(...args) {
    debugLogMethod("fs:statSync");
    return stat__sync(fs, ...args);
}

export function symlink(...args) {
    debugLogMethod("fs:symlink");
    return symlink__async(fs, ...args);
}

export function symlinkSync(...args) {
    debugLogMethod("fs:symlinkSync");
    return symlink__sync(fs, ...args);
}

export function unlink(...args) {
    debugLogMethod("fs:unlink");
    return unlink__async(fs, ...args);
}

export function unlinkSync(...args) {
    debugLogMethod("fs:unlinkSync");
    return unlink__sync(fs, ...args);
}

export function writeFile(...args) {
    debugLogMethod("fs:writeFile");
    return writeFile__async(fs, ...args);
}

export function writeFileSync(...args) {
    debugLogMethod("fs:writeFileSync");
    return writeFile__sync(fs, ...args);
}


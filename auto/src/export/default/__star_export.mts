import process from "node:process"

import {
    async_impl as chmod__async,
    sync_impl as chmod__sync
} from "#~src/methods/chmod.mts"

import {
    async_impl as chown__async,
    sync_impl as chown__sync
} from "#~src/methods/chown.mts"

import {
    async_impl as copyFile__async,
    sync_impl as copyFile__sync
} from "#~src/methods/copyFile.mts"

import {
    async_impl as lstat__async,
    sync_impl as lstat__sync
} from "#~src/methods/lstat.mts"

import {
    async_impl as mkdir__async,
    sync_impl as mkdir__sync
} from "#~src/methods/mkdir.mts"

import {
    async_impl as openDirectory__async,
    sync_impl as openDirectory__sync
} from "#~src/methods/openDirectory.mts"

import {
    async_impl as openFile__async,
    sync_impl as openFile__sync
} from "#~src/methods/openFile.mts"

import {
    async_impl as readFile__async,
    sync_impl as readFile__sync
} from "#~src/methods/readFile.mts"

import {
    async_impl as readdir__async,
    sync_impl as readdir__sync
} from "#~src/methods/readdir.mts"

import {
    async_impl as readlink__async,
    sync_impl as readlink__sync
} from "#~src/methods/readlink.mts"

import {
    async_impl as realpath__async,
    sync_impl as realpath__sync
} from "#~src/methods/realpath.mts"

import {
    async_impl as rename__async,
    sync_impl as rename__sync
} from "#~src/methods/rename.mts"

import {
    async_impl as rmdir__async,
    sync_impl as rmdir__sync
} from "#~src/methods/rmdir.mts"

import {
    async_impl as stat__async,
    sync_impl as stat__sync
} from "#~src/methods/stat.mts"

import {
    async_impl as symlink__async,
    sync_impl as symlink__sync
} from "#~src/methods/symlink.mts"

import {
    async_impl as unlink__async,
    sync_impl as unlink__sync
} from "#~src/methods/unlink.mts"

import {
    async_impl as writeFile__async,
    sync_impl as writeFile__sync
} from "#~src/methods/writeFile.mts"



function debugLogMethod(method_name : string) : void {
    if (!process.env || !process.stderr) return
    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return
    process.stderr.write("@anio-fs/api method call " + method_name + "\n");
}

export function chmodSync(...args: Parameters<typeof chmod__sync>) : ReturnType<typeof chmod__sync> {
    debugLogMethod("fs:chmodSync->chmod__sync");
    return chmod__sync(...args);
}
export function chmodAsync(...args: Parameters<typeof chmod__async>) : ReturnType<typeof chmod__async> {
    debugLogMethod("fs:chmodAsync->chmod__async");
    return chmod__async(...args);
}
export function chownSync(...args: Parameters<typeof chown__sync>) : ReturnType<typeof chown__sync> {
    debugLogMethod("fs:chownSync->chown__sync");
    return chown__sync(...args);
}
export function chownAsync(...args: Parameters<typeof chown__async>) : ReturnType<typeof chown__async> {
    debugLogMethod("fs:chownAsync->chown__async");
    return chown__async(...args);
}
export function copyFileSync(...args: Parameters<typeof copyFile__sync>) : ReturnType<typeof copyFile__sync> {
    debugLogMethod("fs:copyFileSync->copyFile__sync");
    return copyFile__sync(...args);
}
export function copyFileAsync(...args: Parameters<typeof copyFile__async>) : ReturnType<typeof copyFile__async> {
    debugLogMethod("fs:copyFileAsync->copyFile__async");
    return copyFile__async(...args);
}
export function lstatSync(...args: Parameters<typeof lstat__sync>) : ReturnType<typeof lstat__sync> {
    debugLogMethod("fs:lstatSync->lstat__sync");
    return lstat__sync(...args);
}
export function lstatAsync(...args: Parameters<typeof lstat__async>) : ReturnType<typeof lstat__async> {
    debugLogMethod("fs:lstatAsync->lstat__async");
    return lstat__async(...args);
}
export function mkdirSync(...args: Parameters<typeof mkdir__sync>) : ReturnType<typeof mkdir__sync> {
    debugLogMethod("fs:mkdirSync->mkdir__sync");
    return mkdir__sync(...args);
}
export function mkdirAsync(...args: Parameters<typeof mkdir__async>) : ReturnType<typeof mkdir__async> {
    debugLogMethod("fs:mkdirAsync->mkdir__async");
    return mkdir__async(...args);
}
export function openDirectorySync(...args: Parameters<typeof openDirectory__sync>) : ReturnType<typeof openDirectory__sync> {
    debugLogMethod("fs:openDirectorySync->openDirectory__sync");
    return openDirectory__sync(...args);
}
export function openDirectoryAsync(...args: Parameters<typeof openDirectory__async>) : ReturnType<typeof openDirectory__async> {
    debugLogMethod("fs:openDirectoryAsync->openDirectory__async");
    return openDirectory__async(...args);
}
export function openFileSync(...args: Parameters<typeof openFile__sync>) : ReturnType<typeof openFile__sync> {
    debugLogMethod("fs:openFileSync->openFile__sync");
    return openFile__sync(...args);
}
export function openFileAsync(...args: Parameters<typeof openFile__async>) : ReturnType<typeof openFile__async> {
    debugLogMethod("fs:openFileAsync->openFile__async");
    return openFile__async(...args);
}
export function readFileSync(...args: Parameters<typeof readFile__sync>) : ReturnType<typeof readFile__sync> {
    debugLogMethod("fs:readFileSync->readFile__sync");
    return readFile__sync(...args);
}
export function readFileAsync(...args: Parameters<typeof readFile__async>) : ReturnType<typeof readFile__async> {
    debugLogMethod("fs:readFileAsync->readFile__async");
    return readFile__async(...args);
}
export function readdirSync(...args: Parameters<typeof readdir__sync>) : ReturnType<typeof readdir__sync> {
    debugLogMethod("fs:readdirSync->readdir__sync");
    return readdir__sync(...args);
}
export function readdirAsync(...args: Parameters<typeof readdir__async>) : ReturnType<typeof readdir__async> {
    debugLogMethod("fs:readdirAsync->readdir__async");
    return readdir__async(...args);
}
export function readlinkSync(...args: Parameters<typeof readlink__sync>) : ReturnType<typeof readlink__sync> {
    debugLogMethod("fs:readlinkSync->readlink__sync");
    return readlink__sync(...args);
}
export function readlinkAsync(...args: Parameters<typeof readlink__async>) : ReturnType<typeof readlink__async> {
    debugLogMethod("fs:readlinkAsync->readlink__async");
    return readlink__async(...args);
}
export function realpathSync(...args: Parameters<typeof realpath__sync>) : ReturnType<typeof realpath__sync> {
    debugLogMethod("fs:realpathSync->realpath__sync");
    return realpath__sync(...args);
}
export function realpathAsync(...args: Parameters<typeof realpath__async>) : ReturnType<typeof realpath__async> {
    debugLogMethod("fs:realpathAsync->realpath__async");
    return realpath__async(...args);
}
export function renameSync(...args: Parameters<typeof rename__sync>) : ReturnType<typeof rename__sync> {
    debugLogMethod("fs:renameSync->rename__sync");
    return rename__sync(...args);
}
export function renameAsync(...args: Parameters<typeof rename__async>) : ReturnType<typeof rename__async> {
    debugLogMethod("fs:renameAsync->rename__async");
    return rename__async(...args);
}
export function rmdirSync(...args: Parameters<typeof rmdir__sync>) : ReturnType<typeof rmdir__sync> {
    debugLogMethod("fs:rmdirSync->rmdir__sync");
    return rmdir__sync(...args);
}
export function rmdirAsync(...args: Parameters<typeof rmdir__async>) : ReturnType<typeof rmdir__async> {
    debugLogMethod("fs:rmdirAsync->rmdir__async");
    return rmdir__async(...args);
}
export function statSync(...args: Parameters<typeof stat__sync>) : ReturnType<typeof stat__sync> {
    debugLogMethod("fs:statSync->stat__sync");
    return stat__sync(...args);
}
export function statAsync(...args: Parameters<typeof stat__async>) : ReturnType<typeof stat__async> {
    debugLogMethod("fs:statAsync->stat__async");
    return stat__async(...args);
}
export function symlinkSync(...args: Parameters<typeof symlink__sync>) : ReturnType<typeof symlink__sync> {
    debugLogMethod("fs:symlinkSync->symlink__sync");
    return symlink__sync(...args);
}
export function symlinkAsync(...args: Parameters<typeof symlink__async>) : ReturnType<typeof symlink__async> {
    debugLogMethod("fs:symlinkAsync->symlink__async");
    return symlink__async(...args);
}
export function unlinkSync(...args: Parameters<typeof unlink__sync>) : ReturnType<typeof unlink__sync> {
    debugLogMethod("fs:unlinkSync->unlink__sync");
    return unlink__sync(...args);
}
export function unlinkAsync(...args: Parameters<typeof unlink__async>) : ReturnType<typeof unlink__async> {
    debugLogMethod("fs:unlinkAsync->unlink__async");
    return unlink__async(...args);
}
export function writeFileSync(...args: Parameters<typeof writeFile__sync>) : ReturnType<typeof writeFile__sync> {
    debugLogMethod("fs:writeFileSync->writeFile__sync");
    return writeFile__sync(...args);
}
export function writeFileAsync(...args: Parameters<typeof writeFile__async>) : ReturnType<typeof writeFile__async> {
    debugLogMethod("fs:writeFileAsync->writeFile__async");
    return writeFile__async(...args);
}
export const fs = {
    sync: {
        chmod: chmodSync,
        chown: chownSync,
        copyFile: copyFileSync,
        lstat: lstatSync,
        mkdir: mkdirSync,
        openDirectory: openDirectorySync,
        openFile: openFileSync,
        readFile: readFileSync,
        readdir: readdirSync,
        readlink: readlinkSync,
        realpath: realpathSync,
        rename: renameSync,
        rmdir: rmdirSync,
        stat: statSync,
        symlink: symlinkSync,
        unlink: unlinkSync,
        writeFile: writeFileSync,
    },
    async: {
        chmod: chmodAsync,
        chown: chownAsync,
        copyFile: copyFileAsync,
        lstat: lstatAsync,
        mkdir: mkdirAsync,
        openDirectory: openDirectoryAsync,
        openFile: openFileAsync,
        readFile: readFileAsync,
        readdir: readdirAsync,
        readlink: readlinkAsync,
        realpath: realpathAsync,
        rename: renameAsync,
        rmdir: rmdirAsync,
        stat: statAsync,
        symlink: symlinkAsync,
        unlink: unlinkAsync,
        writeFile: writeFileAsync,
    }
}
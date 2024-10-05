import fs from "node:fs"

import {async_impl as chmod__async} from "../methods/chmod.mjs"
import {async_impl as chown__async} from "../methods/chown.mjs"
import {async_impl as copyFile__async} from "../methods/copyFile.mjs"
import {async_impl as lstat__async} from "../methods/lstat.mjs"
import {async_impl as mkdir__async} from "../methods/mkdir.mjs"
import {async_impl as openDirectory__async} from "../methods/openDirectory.mjs"
import {async_impl as openFile__async} from "../methods/openFile.mjs"
import {async_impl as readFile__async} from "../methods/readFile.mjs"
import {async_impl as readdir__async} from "../methods/readdir.mjs"
import {async_impl as readlink__async} from "../methods/readlink.mjs"
import {async_impl as realpath__async} from "../methods/realpath.mjs"
import {async_impl as rename__async} from "../methods/rename.mjs"
import {async_impl as rmdir__async} from "../methods/rmdir.mjs"
import {async_impl as stat__async} from "../methods/stat.mjs"
import {async_impl as symlink__async} from "../methods/symlink.mjs"
import {async_impl as unlink__async} from "../methods/unlink.mjs"
import {async_impl as writeFile__async} from "../methods/writeFile.mjs"


function debugLogMethod(method_name) {
    if (!process.env || !process.stderr) return
    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return
    process.stderr.write("@anio-fs/api method call " + method_name + "\n");
}

export function chmodAsync(...args) {
    debugLogMethod("fs:chmodAsync->chmod__async");
    return chmod__async(fs, ...args);
}
export function chmod(...args) {
    debugLogMethod("fs:chmod->chmod__async");
    return chmod__async(fs, ...args);
}
export function chownAsync(...args) {
    debugLogMethod("fs:chownAsync->chown__async");
    return chown__async(fs, ...args);
}
export function chown(...args) {
    debugLogMethod("fs:chown->chown__async");
    return chown__async(fs, ...args);
}
export function copyFileAsync(...args) {
    debugLogMethod("fs:copyFileAsync->copyFile__async");
    return copyFile__async(fs, ...args);
}
export function copyFile(...args) {
    debugLogMethod("fs:copyFile->copyFile__async");
    return copyFile__async(fs, ...args);
}
export function lstatAsync(...args) {
    debugLogMethod("fs:lstatAsync->lstat__async");
    return lstat__async(fs, ...args);
}
export function lstat(...args) {
    debugLogMethod("fs:lstat->lstat__async");
    return lstat__async(fs, ...args);
}
export function mkdirAsync(...args) {
    debugLogMethod("fs:mkdirAsync->mkdir__async");
    return mkdir__async(fs, ...args);
}
export function mkdir(...args) {
    debugLogMethod("fs:mkdir->mkdir__async");
    return mkdir__async(fs, ...args);
}
export function openDirectoryAsync(...args) {
    debugLogMethod("fs:openDirectoryAsync->openDirectory__async");
    return openDirectory__async(fs, ...args);
}
export function openDirectory(...args) {
    debugLogMethod("fs:openDirectory->openDirectory__async");
    return openDirectory__async(fs, ...args);
}
export function openFileAsync(...args) {
    debugLogMethod("fs:openFileAsync->openFile__async");
    return openFile__async(fs, ...args);
}
export function openFile(...args) {
    debugLogMethod("fs:openFile->openFile__async");
    return openFile__async(fs, ...args);
}
export function readFileAsync(...args) {
    debugLogMethod("fs:readFileAsync->readFile__async");
    return readFile__async(fs, ...args);
}
export function readFile(...args) {
    debugLogMethod("fs:readFile->readFile__async");
    return readFile__async(fs, ...args);
}
export function readdirAsync(...args) {
    debugLogMethod("fs:readdirAsync->readdir__async");
    return readdir__async(fs, ...args);
}
export function readdir(...args) {
    debugLogMethod("fs:readdir->readdir__async");
    return readdir__async(fs, ...args);
}
export function readlinkAsync(...args) {
    debugLogMethod("fs:readlinkAsync->readlink__async");
    return readlink__async(fs, ...args);
}
export function readlink(...args) {
    debugLogMethod("fs:readlink->readlink__async");
    return readlink__async(fs, ...args);
}
export function realpathAsync(...args) {
    debugLogMethod("fs:realpathAsync->realpath__async");
    return realpath__async(fs, ...args);
}
export function realpath(...args) {
    debugLogMethod("fs:realpath->realpath__async");
    return realpath__async(fs, ...args);
}
export function renameAsync(...args) {
    debugLogMethod("fs:renameAsync->rename__async");
    return rename__async(fs, ...args);
}
export function rename(...args) {
    debugLogMethod("fs:rename->rename__async");
    return rename__async(fs, ...args);
}
export function rmdirAsync(...args) {
    debugLogMethod("fs:rmdirAsync->rmdir__async");
    return rmdir__async(fs, ...args);
}
export function rmdir(...args) {
    debugLogMethod("fs:rmdir->rmdir__async");
    return rmdir__async(fs, ...args);
}
export function statAsync(...args) {
    debugLogMethod("fs:statAsync->stat__async");
    return stat__async(fs, ...args);
}
export function stat(...args) {
    debugLogMethod("fs:stat->stat__async");
    return stat__async(fs, ...args);
}
export function symlinkAsync(...args) {
    debugLogMethod("fs:symlinkAsync->symlink__async");
    return symlink__async(fs, ...args);
}
export function symlink(...args) {
    debugLogMethod("fs:symlink->symlink__async");
    return symlink__async(fs, ...args);
}
export function unlinkAsync(...args) {
    debugLogMethod("fs:unlinkAsync->unlink__async");
    return unlink__async(fs, ...args);
}
export function unlink(...args) {
    debugLogMethod("fs:unlink->unlink__async");
    return unlink__async(fs, ...args);
}
export function writeFileAsync(...args) {
    debugLogMethod("fs:writeFileAsync->writeFile__async");
    return writeFile__async(fs, ...args);
}
export function writeFile(...args) {
    debugLogMethod("fs:writeFile->writeFile__async");
    return writeFile__async(fs, ...args);
}

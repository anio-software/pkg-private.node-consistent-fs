import fs from "node:fs"

import {sync_impl as chmod__sync} from "../methods/chmod.mjs"
import {sync_impl as chown__sync} from "../methods/chown.mjs"
import {sync_impl as copyFile__sync} from "../methods/copyFile.mjs"
import {sync_impl as lstat__sync} from "../methods/lstat.mjs"
import {sync_impl as mkdir__sync} from "../methods/mkdir.mjs"
import {sync_impl as openDirectory__sync} from "../methods/openDirectory.mjs"
import {sync_impl as openFile__sync} from "../methods/openFile.mjs"
import {sync_impl as readFile__sync} from "../methods/readFile.mjs"
import {sync_impl as readdir__sync} from "../methods/readdir.mjs"
import {sync_impl as readlink__sync} from "../methods/readlink.mjs"
import {sync_impl as realpath__sync} from "../methods/realpath.mjs"
import {sync_impl as rename__sync} from "../methods/rename.mjs"
import {sync_impl as rmdir__sync} from "../methods/rmdir.mjs"
import {sync_impl as stat__sync} from "../methods/stat.mjs"
import {sync_impl as symlink__sync} from "../methods/symlink.mjs"
import {sync_impl as unlink__sync} from "../methods/unlink.mjs"
import {sync_impl as writeFile__sync} from "../methods/writeFile.mjs"


function debugLogMethod(method_name) {
    if (!process.env || !process.stderr) return
    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return
    process.stderr.write("@anio-fs/api method call " + method_name + "\n");
}

export function chmodSync(...args) {
    debugLogMethod("fs:chmodSync->chmod__sync");
    return chmod__sync(fs, ...args);
}
export function chmod(...args) {
    debugLogMethod("fs:chmod->chmod__sync");
    return chmod__sync(fs, ...args);
}
export function chownSync(...args) {
    debugLogMethod("fs:chownSync->chown__sync");
    return chown__sync(fs, ...args);
}
export function chown(...args) {
    debugLogMethod("fs:chown->chown__sync");
    return chown__sync(fs, ...args);
}
export function copyFileSync(...args) {
    debugLogMethod("fs:copyFileSync->copyFile__sync");
    return copyFile__sync(fs, ...args);
}
export function copyFile(...args) {
    debugLogMethod("fs:copyFile->copyFile__sync");
    return copyFile__sync(fs, ...args);
}
export function lstatSync(...args) {
    debugLogMethod("fs:lstatSync->lstat__sync");
    return lstat__sync(fs, ...args);
}
export function lstat(...args) {
    debugLogMethod("fs:lstat->lstat__sync");
    return lstat__sync(fs, ...args);
}
export function mkdirSync(...args) {
    debugLogMethod("fs:mkdirSync->mkdir__sync");
    return mkdir__sync(fs, ...args);
}
export function mkdir(...args) {
    debugLogMethod("fs:mkdir->mkdir__sync");
    return mkdir__sync(fs, ...args);
}
export function openDirectorySync(...args) {
    debugLogMethod("fs:openDirectorySync->openDirectory__sync");
    return openDirectory__sync(fs, ...args);
}
export function openDirectory(...args) {
    debugLogMethod("fs:openDirectory->openDirectory__sync");
    return openDirectory__sync(fs, ...args);
}
export function openFileSync(...args) {
    debugLogMethod("fs:openFileSync->openFile__sync");
    return openFile__sync(fs, ...args);
}
export function openFile(...args) {
    debugLogMethod("fs:openFile->openFile__sync");
    return openFile__sync(fs, ...args);
}
export function readFileSync(...args) {
    debugLogMethod("fs:readFileSync->readFile__sync");
    return readFile__sync(fs, ...args);
}
export function readFile(...args) {
    debugLogMethod("fs:readFile->readFile__sync");
    return readFile__sync(fs, ...args);
}
export function readdirSync(...args) {
    debugLogMethod("fs:readdirSync->readdir__sync");
    return readdir__sync(fs, ...args);
}
export function readdir(...args) {
    debugLogMethod("fs:readdir->readdir__sync");
    return readdir__sync(fs, ...args);
}
export function readlinkSync(...args) {
    debugLogMethod("fs:readlinkSync->readlink__sync");
    return readlink__sync(fs, ...args);
}
export function readlink(...args) {
    debugLogMethod("fs:readlink->readlink__sync");
    return readlink__sync(fs, ...args);
}
export function realpathSync(...args) {
    debugLogMethod("fs:realpathSync->realpath__sync");
    return realpath__sync(fs, ...args);
}
export function realpath(...args) {
    debugLogMethod("fs:realpath->realpath__sync");
    return realpath__sync(fs, ...args);
}
export function renameSync(...args) {
    debugLogMethod("fs:renameSync->rename__sync");
    return rename__sync(fs, ...args);
}
export function rename(...args) {
    debugLogMethod("fs:rename->rename__sync");
    return rename__sync(fs, ...args);
}
export function rmdirSync(...args) {
    debugLogMethod("fs:rmdirSync->rmdir__sync");
    return rmdir__sync(fs, ...args);
}
export function rmdir(...args) {
    debugLogMethod("fs:rmdir->rmdir__sync");
    return rmdir__sync(fs, ...args);
}
export function statSync(...args) {
    debugLogMethod("fs:statSync->stat__sync");
    return stat__sync(fs, ...args);
}
export function stat(...args) {
    debugLogMethod("fs:stat->stat__sync");
    return stat__sync(fs, ...args);
}
export function symlinkSync(...args) {
    debugLogMethod("fs:symlinkSync->symlink__sync");
    return symlink__sync(fs, ...args);
}
export function symlink(...args) {
    debugLogMethod("fs:symlink->symlink__sync");
    return symlink__sync(fs, ...args);
}
export function unlinkSync(...args) {
    debugLogMethod("fs:unlinkSync->unlink__sync");
    return unlink__sync(fs, ...args);
}
export function unlink(...args) {
    debugLogMethod("fs:unlink->unlink__sync");
    return unlink__sync(fs, ...args);
}
export function writeFileSync(...args) {
    debugLogMethod("fs:writeFileSync->writeFile__sync");
    return writeFile__sync(fs, ...args);
}
export function writeFile(...args) {
    debugLogMethod("fs:writeFile->writeFile__sync");
    return writeFile__sync(fs, ...args);
}

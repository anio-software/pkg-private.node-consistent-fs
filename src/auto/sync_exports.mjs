import fs from "node:fs"

import chmod_module from "../methods/chmod.mjs"
import chown_module from "../methods/chown.mjs"
import copyFile_module from "../methods/copyFile.mjs"
import lstat_module from "../methods/lstat.mjs"
import mkdir_module from "../methods/mkdir.mjs"
import openDirectory_module from "../methods/openDirectory.mjs"
import openFile_module from "../methods/openFile.mjs"
import readFile_module from "../methods/readFile.mjs"
import readdir_module from "../methods/readdir.mjs"
import readlink_module from "../methods/readlink.mjs"
import realpath_module from "../methods/realpath.mjs"
import rename_module from "../methods/rename.mjs"
import rmdir_module from "../methods/rmdir.mjs"
import stat_module from "../methods/stat.mjs"
import symlink_module from "../methods/symlink.mjs"
import unlink_module from "../methods/unlink.mjs"
import writeFile_module from "../methods/writeFile.mjs"


function debugLogMethod(method_name) {
    if (!process.env || !process.stderr) return
    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return
    process.stderr.write("@anio-fs/api method call " + method_name + "\n");
}

export function chmod(...args) {
    debugLogMethod("fs/sync:chmod");
    return chmod_module.sync_impl(fs, ...args);
}

export function chown(...args) {
    debugLogMethod("fs/sync:chown");
    return chown_module.sync_impl(fs, ...args);
}

export function copyFile(...args) {
    debugLogMethod("fs/sync:copyFile");
    return copyFile_module.sync_impl(fs, ...args);
}

export function lstat(...args) {
    debugLogMethod("fs/sync:lstat");
    return lstat_module.sync_impl(fs, ...args);
}

export function mkdir(...args) {
    debugLogMethod("fs/sync:mkdir");
    return mkdir_module.sync_impl(fs, ...args);
}

export function openDirectory(...args) {
    debugLogMethod("fs/sync:openDirectory");
    return openDirectory_module.sync_impl(fs, ...args);
}

export function openFile(...args) {
    debugLogMethod("fs/sync:openFile");
    return openFile_module.sync_impl(fs, ...args);
}

export function readFile(...args) {
    debugLogMethod("fs/sync:readFile");
    return readFile_module.sync_impl(fs, ...args);
}

export function readdir(...args) {
    debugLogMethod("fs/sync:readdir");
    return readdir_module.sync_impl(fs, ...args);
}

export function readlink(...args) {
    debugLogMethod("fs/sync:readlink");
    return readlink_module.sync_impl(fs, ...args);
}

export function realpath(...args) {
    debugLogMethod("fs/sync:realpath");
    return realpath_module.sync_impl(fs, ...args);
}

export function rename(...args) {
    debugLogMethod("fs/sync:rename");
    return rename_module.sync_impl(fs, ...args);
}

export function rmdir(...args) {
    debugLogMethod("fs/sync:rmdir");
    return rmdir_module.sync_impl(fs, ...args);
}

export function stat(...args) {
    debugLogMethod("fs/sync:stat");
    return stat_module.sync_impl(fs, ...args);
}

export function symlink(...args) {
    debugLogMethod("fs/sync:symlink");
    return symlink_module.sync_impl(fs, ...args);
}

export function unlink(...args) {
    debugLogMethod("fs/sync:unlink");
    return unlink_module.sync_impl(fs, ...args);
}

export function writeFile(...args) {
    debugLogMethod("fs/sync:writeFile");
    return writeFile_module.sync_impl(fs, ...args);
}


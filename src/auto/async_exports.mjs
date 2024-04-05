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
    debugLogMethod("fs/async:chmod");
    return chmod_module.async_impl(fs, ...args);
}

export function chown(...args) {
    debugLogMethod("fs/async:chown");
    return chown_module.async_impl(fs, ...args);
}

export function copyFile(...args) {
    debugLogMethod("fs/async:copyFile");
    return copyFile_module.async_impl(fs, ...args);
}

export function lstat(...args) {
    debugLogMethod("fs/async:lstat");
    return lstat_module.async_impl(fs, ...args);
}

export function mkdir(...args) {
    debugLogMethod("fs/async:mkdir");
    return mkdir_module.async_impl(fs, ...args);
}

export function openDirectory(...args) {
    debugLogMethod("fs/async:openDirectory");
    return openDirectory_module.async_impl(fs, ...args);
}

export function openFile(...args) {
    debugLogMethod("fs/async:openFile");
    return openFile_module.async_impl(fs, ...args);
}

export function readFile(...args) {
    debugLogMethod("fs/async:readFile");
    return readFile_module.async_impl(fs, ...args);
}

export function readdir(...args) {
    debugLogMethod("fs/async:readdir");
    return readdir_module.async_impl(fs, ...args);
}

export function readlink(...args) {
    debugLogMethod("fs/async:readlink");
    return readlink_module.async_impl(fs, ...args);
}

export function realpath(...args) {
    debugLogMethod("fs/async:realpath");
    return realpath_module.async_impl(fs, ...args);
}

export function rename(...args) {
    debugLogMethod("fs/async:rename");
    return rename_module.async_impl(fs, ...args);
}

export function rmdir(...args) {
    debugLogMethod("fs/async:rmdir");
    return rmdir_module.async_impl(fs, ...args);
}

export function stat(...args) {
    debugLogMethod("fs/async:stat");
    return stat_module.async_impl(fs, ...args);
}

export function symlink(...args) {
    debugLogMethod("fs/async:symlink");
    return symlink_module.async_impl(fs, ...args);
}

export function unlink(...args) {
    debugLogMethod("fs/async:unlink");
    return unlink_module.async_impl(fs, ...args);
}

export function writeFile(...args) {
    debugLogMethod("fs/async:writeFile");
    return writeFile_module.async_impl(fs, ...args);
}


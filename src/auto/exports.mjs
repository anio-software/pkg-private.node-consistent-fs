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
    debugLogMethod("fs:chmod");
    return chmod_module.async_impl(fs, ...args);
}

export function chmodSync(...args) {
    debugLogMethod("fs:chmodSync");
    return chmod_module.sync_impl(fs, ...args);
}

export function chown(...args) {
    debugLogMethod("fs:chown");
    return chown_module.async_impl(fs, ...args);
}

export function chownSync(...args) {
    debugLogMethod("fs:chownSync");
    return chown_module.sync_impl(fs, ...args);
}

export function copyFile(...args) {
    debugLogMethod("fs:copyFile");
    return copyFile_module.async_impl(fs, ...args);
}

export function copyFileSync(...args) {
    debugLogMethod("fs:copyFileSync");
    return copyFile_module.sync_impl(fs, ...args);
}

export function lstat(...args) {
    debugLogMethod("fs:lstat");
    return lstat_module.async_impl(fs, ...args);
}

export function lstatSync(...args) {
    debugLogMethod("fs:lstatSync");
    return lstat_module.sync_impl(fs, ...args);
}

export function mkdir(...args) {
    debugLogMethod("fs:mkdir");
    return mkdir_module.async_impl(fs, ...args);
}

export function mkdirSync(...args) {
    debugLogMethod("fs:mkdirSync");
    return mkdir_module.sync_impl(fs, ...args);
}

export function openDirectory(...args) {
    debugLogMethod("fs:openDirectory");
    return openDirectory_module.async_impl(fs, ...args);
}

export function openDirectorySync(...args) {
    debugLogMethod("fs:openDirectorySync");
    return openDirectory_module.sync_impl(fs, ...args);
}

export function openFile(...args) {
    debugLogMethod("fs:openFile");
    return openFile_module.async_impl(fs, ...args);
}

export function openFileSync(...args) {
    debugLogMethod("fs:openFileSync");
    return openFile_module.sync_impl(fs, ...args);
}

export function readFile(...args) {
    debugLogMethod("fs:readFile");
    return readFile_module.async_impl(fs, ...args);
}

export function readFileSync(...args) {
    debugLogMethod("fs:readFileSync");
    return readFile_module.sync_impl(fs, ...args);
}

export function readdir(...args) {
    debugLogMethod("fs:readdir");
    return readdir_module.async_impl(fs, ...args);
}

export function readdirSync(...args) {
    debugLogMethod("fs:readdirSync");
    return readdir_module.sync_impl(fs, ...args);
}

export function readlink(...args) {
    debugLogMethod("fs:readlink");
    return readlink_module.async_impl(fs, ...args);
}

export function readlinkSync(...args) {
    debugLogMethod("fs:readlinkSync");
    return readlink_module.sync_impl(fs, ...args);
}

export function realpath(...args) {
    debugLogMethod("fs:realpath");
    return realpath_module.async_impl(fs, ...args);
}

export function realpathSync(...args) {
    debugLogMethod("fs:realpathSync");
    return realpath_module.sync_impl(fs, ...args);
}

export function rename(...args) {
    debugLogMethod("fs:rename");
    return rename_module.async_impl(fs, ...args);
}

export function renameSync(...args) {
    debugLogMethod("fs:renameSync");
    return rename_module.sync_impl(fs, ...args);
}

export function rmdir(...args) {
    debugLogMethod("fs:rmdir");
    return rmdir_module.async_impl(fs, ...args);
}

export function rmdirSync(...args) {
    debugLogMethod("fs:rmdirSync");
    return rmdir_module.sync_impl(fs, ...args);
}

export function stat(...args) {
    debugLogMethod("fs:stat");
    return stat_module.async_impl(fs, ...args);
}

export function statSync(...args) {
    debugLogMethod("fs:statSync");
    return stat_module.sync_impl(fs, ...args);
}

export function symlink(...args) {
    debugLogMethod("fs:symlink");
    return symlink_module.async_impl(fs, ...args);
}

export function symlinkSync(...args) {
    debugLogMethod("fs:symlinkSync");
    return symlink_module.sync_impl(fs, ...args);
}

export function unlink(...args) {
    debugLogMethod("fs:unlink");
    return unlink_module.async_impl(fs, ...args);
}

export function unlinkSync(...args) {
    debugLogMethod("fs:unlinkSync");
    return unlink_module.sync_impl(fs, ...args);
}

export function writeFile(...args) {
    debugLogMethod("fs:writeFile");
    return writeFile_module.async_impl(fs, ...args);
}

export function writeFileSync(...args) {
    debugLogMethod("fs:writeFileSync");
    return writeFile_module.sync_impl(fs, ...args);
}


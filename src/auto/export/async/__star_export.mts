import process from "node:process"

import {async_impl as chmod__async} from "../../../methods/chmod.mts"
import {async_impl as chown__async} from "../../../methods/chown.mts"
import {async_impl as copyFile__async} from "../../../methods/copyFile.mts"
import {async_impl as lstat__async} from "../../../methods/lstat.mts"
import {async_impl as mkdir__async} from "../../../methods/mkdir.mts"
import {async_impl as openDirectory__async} from "../../../methods/openDirectory.mts"
import {async_impl as openFile__async} from "../../../methods/openFile.mts"
import {async_impl as readFile__async} from "../../../methods/readFile.mts"
import {async_impl as readdir__async} from "../../../methods/readdir.mts"
import {async_impl as readlink__async} from "../../../methods/readlink.mts"
import {async_impl as realpath__async} from "../../../methods/realpath.mts"
import {async_impl as rename__async} from "../../../methods/rename.mts"
import {async_impl as rmdir__async} from "../../../methods/rmdir.mts"
import {async_impl as stat__async} from "../../../methods/stat.mts"
import {async_impl as symlink__async} from "../../../methods/symlink.mts"
import {async_impl as unlink__async} from "../../../methods/unlink.mts"
import {async_impl as writeFile__async} from "../../../methods/writeFile.mts"


function debugLogMethod(method_name : string) : void {
    if (!process.env || !process.stderr) return
    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return
    process.stderr.write("@anio-fs/api method call " + method_name + "\n");
}

export function chmodAsync(...args: Parameters<typeof chmod__async>) : ReturnType<typeof chmod__async> {
    debugLogMethod("fs:chmodAsync->chmod__async");
    return chmod__async(...args);
}
export function chmod(...args: Parameters<typeof chmod__async>) : ReturnType<typeof chmod__async> {
    debugLogMethod("fs:chmod->chmod__async");
    return chmod__async(...args);
}
export function chownAsync(...args: Parameters<typeof chown__async>) : ReturnType<typeof chown__async> {
    debugLogMethod("fs:chownAsync->chown__async");
    return chown__async(...args);
}
export function chown(...args: Parameters<typeof chown__async>) : ReturnType<typeof chown__async> {
    debugLogMethod("fs:chown->chown__async");
    return chown__async(...args);
}
export function copyFileAsync(...args: Parameters<typeof copyFile__async>) : ReturnType<typeof copyFile__async> {
    debugLogMethod("fs:copyFileAsync->copyFile__async");
    return copyFile__async(...args);
}
export function copyFile(...args: Parameters<typeof copyFile__async>) : ReturnType<typeof copyFile__async> {
    debugLogMethod("fs:copyFile->copyFile__async");
    return copyFile__async(...args);
}
export function lstatAsync(...args: Parameters<typeof lstat__async>) : ReturnType<typeof lstat__async> {
    debugLogMethod("fs:lstatAsync->lstat__async");
    return lstat__async(...args);
}
export function lstat(...args: Parameters<typeof lstat__async>) : ReturnType<typeof lstat__async> {
    debugLogMethod("fs:lstat->lstat__async");
    return lstat__async(...args);
}
export function mkdirAsync(...args: Parameters<typeof mkdir__async>) : ReturnType<typeof mkdir__async> {
    debugLogMethod("fs:mkdirAsync->mkdir__async");
    return mkdir__async(...args);
}
export function mkdir(...args: Parameters<typeof mkdir__async>) : ReturnType<typeof mkdir__async> {
    debugLogMethod("fs:mkdir->mkdir__async");
    return mkdir__async(...args);
}
export function openDirectoryAsync(...args: Parameters<typeof openDirectory__async>) : ReturnType<typeof openDirectory__async> {
    debugLogMethod("fs:openDirectoryAsync->openDirectory__async");
    return openDirectory__async(...args);
}
export function openDirectory(...args: Parameters<typeof openDirectory__async>) : ReturnType<typeof openDirectory__async> {
    debugLogMethod("fs:openDirectory->openDirectory__async");
    return openDirectory__async(...args);
}
export function openFileAsync(...args: Parameters<typeof openFile__async>) : ReturnType<typeof openFile__async> {
    debugLogMethod("fs:openFileAsync->openFile__async");
    return openFile__async(...args);
}
export function openFile(...args: Parameters<typeof openFile__async>) : ReturnType<typeof openFile__async> {
    debugLogMethod("fs:openFile->openFile__async");
    return openFile__async(...args);
}
export function readFileAsync(...args: Parameters<typeof readFile__async>) : ReturnType<typeof readFile__async> {
    debugLogMethod("fs:readFileAsync->readFile__async");
    return readFile__async(...args);
}
export function readFile(...args: Parameters<typeof readFile__async>) : ReturnType<typeof readFile__async> {
    debugLogMethod("fs:readFile->readFile__async");
    return readFile__async(...args);
}
export function readdirAsync(...args: Parameters<typeof readdir__async>) : ReturnType<typeof readdir__async> {
    debugLogMethod("fs:readdirAsync->readdir__async");
    return readdir__async(...args);
}
export function readdir(...args: Parameters<typeof readdir__async>) : ReturnType<typeof readdir__async> {
    debugLogMethod("fs:readdir->readdir__async");
    return readdir__async(...args);
}
export function readlinkAsync(...args: Parameters<typeof readlink__async>) : ReturnType<typeof readlink__async> {
    debugLogMethod("fs:readlinkAsync->readlink__async");
    return readlink__async(...args);
}
export function readlink(...args: Parameters<typeof readlink__async>) : ReturnType<typeof readlink__async> {
    debugLogMethod("fs:readlink->readlink__async");
    return readlink__async(...args);
}
export function realpathAsync(...args: Parameters<typeof realpath__async>) : ReturnType<typeof realpath__async> {
    debugLogMethod("fs:realpathAsync->realpath__async");
    return realpath__async(...args);
}
export function realpath(...args: Parameters<typeof realpath__async>) : ReturnType<typeof realpath__async> {
    debugLogMethod("fs:realpath->realpath__async");
    return realpath__async(...args);
}
export function renameAsync(...args: Parameters<typeof rename__async>) : ReturnType<typeof rename__async> {
    debugLogMethod("fs:renameAsync->rename__async");
    return rename__async(...args);
}
export function rename(...args: Parameters<typeof rename__async>) : ReturnType<typeof rename__async> {
    debugLogMethod("fs:rename->rename__async");
    return rename__async(...args);
}
export function rmdirAsync(...args: Parameters<typeof rmdir__async>) : ReturnType<typeof rmdir__async> {
    debugLogMethod("fs:rmdirAsync->rmdir__async");
    return rmdir__async(...args);
}
export function rmdir(...args: Parameters<typeof rmdir__async>) : ReturnType<typeof rmdir__async> {
    debugLogMethod("fs:rmdir->rmdir__async");
    return rmdir__async(...args);
}
export function statAsync(...args: Parameters<typeof stat__async>) : ReturnType<typeof stat__async> {
    debugLogMethod("fs:statAsync->stat__async");
    return stat__async(...args);
}
export function stat(...args: Parameters<typeof stat__async>) : ReturnType<typeof stat__async> {
    debugLogMethod("fs:stat->stat__async");
    return stat__async(...args);
}
export function symlinkAsync(...args: Parameters<typeof symlink__async>) : ReturnType<typeof symlink__async> {
    debugLogMethod("fs:symlinkAsync->symlink__async");
    return symlink__async(...args);
}
export function symlink(...args: Parameters<typeof symlink__async>) : ReturnType<typeof symlink__async> {
    debugLogMethod("fs:symlink->symlink__async");
    return symlink__async(...args);
}
export function unlinkAsync(...args: Parameters<typeof unlink__async>) : ReturnType<typeof unlink__async> {
    debugLogMethod("fs:unlinkAsync->unlink__async");
    return unlink__async(...args);
}
export function unlink(...args: Parameters<typeof unlink__async>) : ReturnType<typeof unlink__async> {
    debugLogMethod("fs:unlink->unlink__async");
    return unlink__async(...args);
}
export function writeFileAsync(...args: Parameters<typeof writeFile__async>) : ReturnType<typeof writeFile__async> {
    debugLogMethod("fs:writeFileAsync->writeFile__async");
    return writeFile__async(...args);
}
export function writeFile(...args: Parameters<typeof writeFile__async>) : ReturnType<typeof writeFile__async> {
    debugLogMethod("fs:writeFile->writeFile__async");
    return writeFile__async(...args);
}

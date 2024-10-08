import process from "node:process"

import {sync_impl as chmod__sync} from "../../../methods/chmod.mts"
import {sync_impl as chown__sync} from "../../../methods/chown.mts"
import {sync_impl as copyFile__sync} from "../../../methods/copyFile.mts"
import {sync_impl as lstat__sync} from "../../../methods/lstat.mts"
import {sync_impl as mkdir__sync} from "../../../methods/mkdir.mts"
import {sync_impl as openDirectory__sync} from "../../../methods/openDirectory.mts"
import {sync_impl as openFile__sync} from "../../../methods/openFile.mts"
import {sync_impl as readFile__sync} from "../../../methods/readFile.mts"
import {sync_impl as readdir__sync} from "../../../methods/readdir.mts"
import {sync_impl as readlink__sync} from "../../../methods/readlink.mts"
import {sync_impl as realpath__sync} from "../../../methods/realpath.mts"
import {sync_impl as rename__sync} from "../../../methods/rename.mts"
import {sync_impl as rmdir__sync} from "../../../methods/rmdir.mts"
import {sync_impl as stat__sync} from "../../../methods/stat.mts"
import {sync_impl as symlink__sync} from "../../../methods/symlink.mts"
import {sync_impl as unlink__sync} from "../../../methods/unlink.mts"
import {sync_impl as writeFile__sync} from "../../../methods/writeFile.mts"


function debugLogMethod(method_name : string) : void {
    if (!process.env || !process.stderr) return
    if (!("ANIO_NODE_FS_API_DEBUG" in process.env)) return
    process.stderr.write("@anio-fs/api method call " + method_name + "\n");
}

export function chmodSync(...args: Parameters<typeof chmod__sync>) : ReturnType<typeof chmod__sync> {
    debugLogMethod("fs:chmodSync->chmod__sync");
    return chmod__sync(...args);
}
export function chmod(...args: Parameters<typeof chmod__sync>) : ReturnType<typeof chmod__sync> {
    debugLogMethod("fs:chmod->chmod__sync");
    return chmod__sync(...args);
}
export function chownSync(...args: Parameters<typeof chown__sync>) : ReturnType<typeof chown__sync> {
    debugLogMethod("fs:chownSync->chown__sync");
    return chown__sync(...args);
}
export function chown(...args: Parameters<typeof chown__sync>) : ReturnType<typeof chown__sync> {
    debugLogMethod("fs:chown->chown__sync");
    return chown__sync(...args);
}
export function copyFileSync(...args: Parameters<typeof copyFile__sync>) : ReturnType<typeof copyFile__sync> {
    debugLogMethod("fs:copyFileSync->copyFile__sync");
    return copyFile__sync(...args);
}
export function copyFile(...args: Parameters<typeof copyFile__sync>) : ReturnType<typeof copyFile__sync> {
    debugLogMethod("fs:copyFile->copyFile__sync");
    return copyFile__sync(...args);
}
export function lstatSync(...args: Parameters<typeof lstat__sync>) : ReturnType<typeof lstat__sync> {
    debugLogMethod("fs:lstatSync->lstat__sync");
    return lstat__sync(...args);
}
export function lstat(...args: Parameters<typeof lstat__sync>) : ReturnType<typeof lstat__sync> {
    debugLogMethod("fs:lstat->lstat__sync");
    return lstat__sync(...args);
}
export function mkdirSync(...args: Parameters<typeof mkdir__sync>) : ReturnType<typeof mkdir__sync> {
    debugLogMethod("fs:mkdirSync->mkdir__sync");
    return mkdir__sync(...args);
}
export function mkdir(...args: Parameters<typeof mkdir__sync>) : ReturnType<typeof mkdir__sync> {
    debugLogMethod("fs:mkdir->mkdir__sync");
    return mkdir__sync(...args);
}
export function openDirectorySync(...args: Parameters<typeof openDirectory__sync>) : ReturnType<typeof openDirectory__sync> {
    debugLogMethod("fs:openDirectorySync->openDirectory__sync");
    return openDirectory__sync(...args);
}
export function openDirectory(...args: Parameters<typeof openDirectory__sync>) : ReturnType<typeof openDirectory__sync> {
    debugLogMethod("fs:openDirectory->openDirectory__sync");
    return openDirectory__sync(...args);
}
export function openFileSync(...args: Parameters<typeof openFile__sync>) : ReturnType<typeof openFile__sync> {
    debugLogMethod("fs:openFileSync->openFile__sync");
    return openFile__sync(...args);
}
export function openFile(...args: Parameters<typeof openFile__sync>) : ReturnType<typeof openFile__sync> {
    debugLogMethod("fs:openFile->openFile__sync");
    return openFile__sync(...args);
}
export function readFileSync(...args: Parameters<typeof readFile__sync>) : ReturnType<typeof readFile__sync> {
    debugLogMethod("fs:readFileSync->readFile__sync");
    return readFile__sync(...args);
}
export function readFile(...args: Parameters<typeof readFile__sync>) : ReturnType<typeof readFile__sync> {
    debugLogMethod("fs:readFile->readFile__sync");
    return readFile__sync(...args);
}
export function readdirSync(...args: Parameters<typeof readdir__sync>) : ReturnType<typeof readdir__sync> {
    debugLogMethod("fs:readdirSync->readdir__sync");
    return readdir__sync(...args);
}
export function readdir(...args: Parameters<typeof readdir__sync>) : ReturnType<typeof readdir__sync> {
    debugLogMethod("fs:readdir->readdir__sync");
    return readdir__sync(...args);
}
export function readlinkSync(...args: Parameters<typeof readlink__sync>) : ReturnType<typeof readlink__sync> {
    debugLogMethod("fs:readlinkSync->readlink__sync");
    return readlink__sync(...args);
}
export function readlink(...args: Parameters<typeof readlink__sync>) : ReturnType<typeof readlink__sync> {
    debugLogMethod("fs:readlink->readlink__sync");
    return readlink__sync(...args);
}
export function realpathSync(...args: Parameters<typeof realpath__sync>) : ReturnType<typeof realpath__sync> {
    debugLogMethod("fs:realpathSync->realpath__sync");
    return realpath__sync(...args);
}
export function realpath(...args: Parameters<typeof realpath__sync>) : ReturnType<typeof realpath__sync> {
    debugLogMethod("fs:realpath->realpath__sync");
    return realpath__sync(...args);
}
export function renameSync(...args: Parameters<typeof rename__sync>) : ReturnType<typeof rename__sync> {
    debugLogMethod("fs:renameSync->rename__sync");
    return rename__sync(...args);
}
export function rename(...args: Parameters<typeof rename__sync>) : ReturnType<typeof rename__sync> {
    debugLogMethod("fs:rename->rename__sync");
    return rename__sync(...args);
}
export function rmdirSync(...args: Parameters<typeof rmdir__sync>) : ReturnType<typeof rmdir__sync> {
    debugLogMethod("fs:rmdirSync->rmdir__sync");
    return rmdir__sync(...args);
}
export function rmdir(...args: Parameters<typeof rmdir__sync>) : ReturnType<typeof rmdir__sync> {
    debugLogMethod("fs:rmdir->rmdir__sync");
    return rmdir__sync(...args);
}
export function statSync(...args: Parameters<typeof stat__sync>) : ReturnType<typeof stat__sync> {
    debugLogMethod("fs:statSync->stat__sync");
    return stat__sync(...args);
}
export function stat(...args: Parameters<typeof stat__sync>) : ReturnType<typeof stat__sync> {
    debugLogMethod("fs:stat->stat__sync");
    return stat__sync(...args);
}
export function symlinkSync(...args: Parameters<typeof symlink__sync>) : ReturnType<typeof symlink__sync> {
    debugLogMethod("fs:symlinkSync->symlink__sync");
    return symlink__sync(...args);
}
export function symlink(...args: Parameters<typeof symlink__sync>) : ReturnType<typeof symlink__sync> {
    debugLogMethod("fs:symlink->symlink__sync");
    return symlink__sync(...args);
}
export function unlinkSync(...args: Parameters<typeof unlink__sync>) : ReturnType<typeof unlink__sync> {
    debugLogMethod("fs:unlinkSync->unlink__sync");
    return unlink__sync(...args);
}
export function unlink(...args: Parameters<typeof unlink__sync>) : ReturnType<typeof unlink__sync> {
    debugLogMethod("fs:unlink->unlink__sync");
    return unlink__sync(...args);
}
export function writeFileSync(...args: Parameters<typeof writeFile__sync>) : ReturnType<typeof writeFile__sync> {
    debugLogMethod("fs:writeFileSync->writeFile__sync");
    return writeFile__sync(...args);
}
export function writeFile(...args: Parameters<typeof writeFile__sync>) : ReturnType<typeof writeFile__sync> {
    debugLogMethod("fs:writeFile->writeFile__sync");
    return writeFile__sync(...args);
}

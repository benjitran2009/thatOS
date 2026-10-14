/**
 * thatOS Buildtools
 * Version 0.0.0
 * Contributor(s): Ben3Coder
 *
 * Compiles thatOS into a static hostable build.
 **/

import fs from "fs";
import { ZipArchive } from "archiver";

// create a file to stream archive data to.
const directoryToZip = (out, directory) => {
  const output = fs.createWriteStream(out);
  const archive = new ZipArchive();
  archive.pipe(output);
  archive.directory(directory, "/");
  archive.finalize();
};

if (fs.existsSync("./dist")) {
  fs.rmdirSync("./dist", {recursive: true, force: true});
}

fs.mkdirSync("./dist");

// rootfs
fs.mkdirSync('./dist/rootfs')
for (let dir of fs.readdirSync("./src/rootfs")) {
  directoryToZip(`./dist/rootfs/${dir}.zip`, `./src/rootfs/${dir}`);
}

// core
fs.cpSync("./src/core/", "./dist/", {recursive: true})
console.log(`thatOS Buildtools v0.0.0`);

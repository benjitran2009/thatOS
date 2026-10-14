/**
 * thatOS Development Server
 * Version 0.0.0
 * Contributor(s): Ben3Coder
 * 
 * thatOS for development, also including
 * special debugging features*.
 **/

console.log("Initializing...");

import express from "express";
const app = express();

app.use("",express.static(""))

console.log(`thatOS Development Server v0.0.0
    
thatOS hosted at http://127.0.0.1:3000

Helpful links:
- / -> http://127.0.0.1:3000
- /kernel/kernel.js -> http://127.0.0.1:3000/kernel/kernel.js
- /rootfs/base.zip -> http://127.0.0.1:3000/rootfs/base.zip

**NOTE**
To rebuild the rootfs or `);
// moduels which node provide

const { log } = require("util");
log("Hello");

const { getHeapSnapshot } = require("v8");

log(getHeapSnapshot());

const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("sampleEvent", (...args) => {
  args.forEach((x) => {
    console.log(x);
  });
});

emitter.emit("sampleEvent", "Hello", "How are you");
emitter.emit("sampleEvent", "Hello", "How are you", "abi");

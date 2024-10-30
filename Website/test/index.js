const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('cica', () =>{
    console.log("cicagsags");
})

eventEmitter.emit('cica');
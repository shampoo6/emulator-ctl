const boot = require('../core/boot')
const runApp = require('../core/runApp')
const tap = require('../core/tap')

boot(10000).then(() => {
    return runApp(process.env.packageName)
}).then(() => {
    return tap(269, 602, 15000)
}).then(() => {
    console.log('test over')
})

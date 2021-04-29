const boot = require('../core/boot')
const runApp = require('../core/runApp')
const tap = require('../core/tap')

const workflow = async () => {
    await boot(10000)
    runApp(process.env.packageName)
    await tap(269, 602, 15000)
    return Promise.resolve()
}

workflow().then(() => {
    console.log('config and run over')
})

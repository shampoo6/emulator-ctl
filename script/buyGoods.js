const {AdbExec} = require('../core/adbExec')

const executor = AdbExec.getInstance()
console.log(executor)

// executor.execAdb('adb shell wm size')

const timespan = 1000 / 60
let count = 0

async function circle() {
    while (true) {
        // executor.execAdb('adb shell input tap 647 2267')
        executor.execAdb('adb-1-0-41-platform-29-0-6 shell input tap 647 2267')
        count++
        if (count % 60 === 0) {
            // console.log(count)
        }
        await wait(timespan)
    }
}

async function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

circle()
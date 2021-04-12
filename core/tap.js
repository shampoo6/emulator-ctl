const exec = require('./exec')

const tap = (x, y, delay) => {
    return new Promise(resolve => {
        if (delay && typeof delay === 'number')
            setTimeout(() => {
                e(x, y, resolve)
            }, delay)
        else e(x, y, resolve)
    })
}

let e = (x, y, resolve) => {
    exec(`ld -s ${process.env.mnqIndex} input tap ${x} ${y}`).then(() => {
        console.log(`tap ${x} ${y}`)
        resolve()
    })
}

module.exports = tap

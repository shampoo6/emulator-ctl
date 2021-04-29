const {exec} = require('./execPlus')

const tap = (x, y, delay) => {
    return new Promise(resolve => {
        if (delay && typeof delay === 'number')
            setTimeout(() => {
                exec(`input tap ${x} ${y}`)
                resolve()
            }, delay)
        else {
            exec(`input tap ${x} ${y}`)
            resolve()
        }
    })
}

module.exports = tap

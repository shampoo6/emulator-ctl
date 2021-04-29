const {exec} = require('./execPlus')
const modifyResolution = require('./modifyResolution')

const boot = (delay) => {
    return new Promise(resolve => {
        modifyResolution()
        exec(`ldconsole.exe launch --index ${process.env.mnqIndex}`)
        console.log('boot over')
        if (delay && typeof delay === 'number')
            setTimeout(() => {
                resolve()
            }, delay)
        else resolve()
    })
}

module.exports = boot

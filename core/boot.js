const exec = require('./exec')
const modifyResolution = require('./modifyResolution')

const boot = (delay) => {
    return new Promise(resolve => {
        modifyResolution().then(() => {
            exec(`ldconsole.exe launch --index ${process.env.mnqIndex}`).then(() => {
                console.log('boot over')
                if (delay && typeof delay === 'number')
                    setTimeout(() => {
                        resolve()
                    }, delay)
                else resolve()
            })
        })
    })
}

module.exports = boot

const exec = require('./exec')

const enterLd = () => {
    return new Promise(resolve => {
        exec(`ld -s ${process.env.mnqIndex}`).then(() => {
            console.log('enter ld over')
            resolve()
        })
    })
}

module.exports = enterLd

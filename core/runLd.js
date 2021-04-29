// 启动雷电ld.exe
const {exec} = require('./execPlus')

const runLd = () => {
    return new Promise(resolve => {
        exec('ld -s 0')
        resolve()
    })
}

module.exports = runLd

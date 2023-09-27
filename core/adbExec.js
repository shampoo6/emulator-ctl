const {spawn} = require('child_process')

// const adbPath = 'D:/Program Files/HBuilderX/plugins/launcher/tools/adbs/'
const adbPath = 'D:/Program Files/TC Games/adb/'

// adb 的一些命令
// 查看设备连接: adb devices
// 在激活的输入框中输入内容: adb shell input text "hello"
// 模拟点击: adb shell input tap <x坐标> <y坐标>
// 查看设备分辨率: adb shell wm size

// adb shell input tap 150 250
// adb shell input tap 647 2267
// adb shell input tap 524 2259

exports.AdbExec = class AdbExec {
    static instance
    executor

    constructor() {
        AdbExec.instance = this
        this.executor = spawn(`cmd`)
        this.executor.stdin.setEncoding('utf-8')
        // 将输出内容显示到主进程控制台
        // this.executor.stdout.pipe(process.stdout)
        // 切换工作空间
        // this.executor.stdin.write(`cd ${process.env.workspace}\n`)
        this.executor.stdin.write(`cd ${adbPath}\n`)
    }

    static getInstance() {
        return AdbExec.instance || new AdbExec()
    }

    // 执行adb命令
    execAdb(cmd) {
        this.executor.stdin.write(`${cmd}\n`)
    }
}

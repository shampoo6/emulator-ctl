// 玩儿游戏王的休闲决斗（同样适用于排位决斗）
const runLd = require(`../core/runLd`)
const tap = require(`../core/tapPlus`)

let workOver = true // 用于监视器查看是否执行完了一轮操作

const workflow = async () => {
    await startDuel()
    await openOperationBtn()
    await turnEnd()
    await youFail()
    return Promise.resolve()
}

const startDuel = () => {
    return new Promise(resolve => {
        tap(257, 394, 500).then(() => {
            tap(257, 394, 500).then(() => {
                resolve()
            })
        })
    })
}

const openOperationBtn = () => {
    // 打开操作按钮的行为快速执行两次，防止按钮由于点击过其他东西而无法打开
    return new Promise(resolve => {
        tap(494, 605, 500).then(() => {
            return tap(494, 605, 500)
        }).then(() => {
            resolve()
        })
    })
}

const turnEnd = () => {
    return tap(510, 438, 500)
}

const youFail = () => {
    return new Promise(resolve => {
        // 在“下一步”按钮上点击一次，然后再在上面1像素的位置点击一次
        // 为了防止在点击决斗按钮的场景中，点击到下方的决斗历史信息
        tap(278, 876, 500).then(() => {
            return tap(278, 875, 500)
        }).then(() => {
            resolve()
        })
    })
}

const monitor = () => {
    setInterval(() => {
        if (workOver) {
            workOver = false
            workflow().then(() => {
                // workflow 结束后重置工作流状态
                workOver = true
            })
        }
    }, 200)
}

// 进入ld工具
runLd().then(() => {
    monitor()
})

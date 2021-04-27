const tap = require('../core/tap')

// 流程

// 点击开始决斗按钮
// 点击右下角操作按钮
// 点击回合结束
// 点击你输了按钮
// 点击结算1按钮
// 点击结算2按钮
// 重复之前的操作

let over = true

// 流程
const workflow = () => {
    startDuel().then(() => {
        return openOperationBtn()
    }).then(() => {
        return turnEnd()
    }).then(() => {
        return youFail()
    }).finally(() => {
        // workflow()
        over = true
    })
    // }).then(() => {
    //     return end1()
    // }).then(() => {
    //     return end2()
    // }).then(() => {
    //     workflow()
    // })
}

// 创建一个监控器，监视工作流是否结束
const monitor = () => {
    setInterval(() => {
        if (over) {
            over = false
            workflow()
        }
    }, 100)
}

const startDuel = () => {

    return new Promise(resolve => {
        tap(257, 394, 1000).then(() => {
            tap(257, 394, 1000).then(() => {
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

const end1 = () => {
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

const end2 = () => {
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

monitor()

function readBinaryWatch(n) {
    let list = []
    let hour = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3]
    let minute = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5]
    for (let i = 0; i < hour.length; i++) {
        for (let j = 0; j < minute.length; j++) {
            if (hour[i] + minute[j] == n) {
                time = i + ":"
                if (j < 10) {
                    time = time + "0" + j + ""
                } else {
                    time = time + j + ''
                }
                list.push(time)
            }
        }
    }
    return list

}
const list = readBinaryWatch(1)
console.log(list)


def readBinaryWatch(n):
    result = []
    hour = []
    minute = []
    for i in range(12):
        hour.append(str(bin(i)).count('1'))
    for i in range(60):
        minute.append(str(bin(i)).count('1'))
    print(hour)
    print(minute)
    for i, h in enumerate(hour):
        for j, m in enumerate(minute):
            if (h + m == n):
                time = str(i) + ":"
                if (j < 10):
                    time = time + "0" + str(j)
                else:
                    time = time + str(j) + ''
                result.append(time)
    return result


if __name__ == "__main__":
    result = readBinaryWatch(5)
    print(result)


package main

import (
	"container/list"
	"fmt"
	"strconv"
)

func readBinaryWatch(n int) *list.List {
	li := list.New()
	var hour = [...]int{0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3}

	var minute = [...]int{0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5}
	for h, HLed := range hour {
		for m, MLed := range minute {
			if HLed+MLed == n {
				time := strconv.Itoa(h) + ":"
				if m < 10 {
					time = time + "0" + strconv.Itoa(m)
				} else {
					time = time + strconv.Itoa(m)
				}
				li.PushBack(time)
			}
		}
	}
	return li
}

func main() {
	out := readBinaryWatch(1)
	fmt.Print("[")
	for i := out.Front(); i != nil; i = i.Next() {
		fmt.Print("\"",i.Value,"\"")
		if i.Next() != nil {
			fmt.Print(",")
		}
	}
	fmt.Print("]")
}

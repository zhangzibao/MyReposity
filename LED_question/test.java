package com.myqq.myutils;

import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class test {
    @SuppressWarnings("unchecked")
    private List<String> readBinaryWatch(int n) {
        List<String> list = new ArrayList();
        int[] hour = {0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3};
        int[] minute = {0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5};
        for (int i = 0; i < hour.length; i++) {
            for (int j = 0; j < minute.length; j++) {
                if (hour[i] + minute[j] == n) {
                    String time = "\"" + String.valueOf(i) + ":";
//                    System.out.print(i + ":");
                    if (j < 10) {
                        time = time + "0" + j + "\"";
//                        System.out.print("0" + j + ",");
                    } else {
                        time = time + j + "\"";
//                        System.out.print(j + ",");
                    }
                    list.add(time);
                }
            }
        }
        return list;
    }

    @Test
    public void run() {
        readBinaryWatch(1);
        List<String> list = readBinaryWatch(5);
        System.out.println(list);
    }
}

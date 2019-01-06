<?php
/**
 * Created by IntelliJ IDEA.
 * User: 张自爆
 * Date: 2018/11/22
 * Time: 13:57
 */

function readBinaryWatch($n)
{
    $list = [];
    $hour = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3];
    $minute = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5];
    for ($i = 0; $i < count($hour); $i++) {
        for ($j = 0; $j < count($minute); $j++) {
            if ($hour[$i] + $minute[$j] == $n) {
                $time = $i . ":";
                if ($j < 10) {
                    $time = $time . "0" . $j . "";
                } else {
                    $time = $time . $j . "";
                }
                array_push($list, $time);
            }
        }
    }
    return $list;

}
$arr = readBinaryWatch(1);
print_r($arr);


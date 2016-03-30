window.onload=function(){
    //实现插入排序
    function insertSort(array) {
        //每一次array[i]及之前的数据是顺序的
        for (var i = 1; i < array.length; i++) {
            var temp = array[i];
            //将array[i]插入适当的位置
            for (var j = i - 1; j >= 0; j--) {
                if (temp < array[j]) {
                    array[j + 1] = array[j];
                } else {
                    break;
                }
            }
            array[j + 1] = temp;
        }
    }
    var array=[12,56,87,45,63,35,4,32,25];
    console.log("排序之前的数组为："+array);
    insertSort(array);
    console.log("排序之后的数组为："+array);
};

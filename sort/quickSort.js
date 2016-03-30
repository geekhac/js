window.onload= function () {
    //递归快排的主程序
    function quickSort(array,p,r){
        if(p<r){
            var q=partition(array,p,r);
            quickSort(array,p,q-1);
            quickSort(array,q+1,r);
        }
    }
    //以array[r]为基准元素,将数组array分为比基准元素小的部分和比基准元素大的部分，并返回array[i]
    function partition(array,p,r){
        var x=array[r];
        var i=p-1;
        for(var j=p;j<r;j++){
            if(array[j]<x){
                i++;
                var temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
        temp=array[i+1];
        array[i+1]=array[r];
        array[r]=temp;
        return i+1;
    }
    //随机快排主程序
    function randomQuick(array,p,r){
        if(p<r){
            var q=randomPartition(array,p,r);
            randomQuick(array,p,q-1);
            randomQuick(array,q+1,r);
        }
    }
    //将队尾元素随机化后调用partition
    function randomPartition(array,p,r){
        var random=Math.round(Math.random()*(r-p))+p;
        var temp=array[random];
        array[random]=array[r];
        array[r]=temp;
        return partition(array,p,r);
    }
    var array=[10,2,21,68,32,47,50,36];
    console.log("快排前数组为："+array);
    quickSort(array,0,array.length-1);
    console.log("快排后的数组为："+array);
    var array1=[25,4,1,59,65,35,14,26];
    console.log("快排前数组为："+array1);
    randomQuick(array1,0,array1.length-1);
    console.log("快排后的数组为："+array1);
};
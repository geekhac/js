window.onload=function(){
    //实现计数排序
    function countingSort(arrayA,arrayB){
        var k= 0,arrayC=new Array();
        //找出arrayA中的最大数
        for(var i=0;i<arrayA.length-1;i++){
            if(arrayA[i]>k){
                k=arrayA[i];
            }
        }
        //初始化arrayC
        for(var j=0;j<=k;j++){
            arrayC[j]=0;
        }
        //用arrayC统计arrayA中每个数有几个
        for(i=0;i<arrayA.length;i++){
            arrayC[arrayA[i]]++;
        }
        //用arrayC统计arrayA中小于每个数的有几个
        for(j=1;j<=k;j++){
            arrayC[j]=arrayC[j-1]+arrayC[j];
        }
        //将排序数据一个一个按序计入arrayB
        for(i=arrayA.length-1;i>=0;i--){
            arrayB[arrayC[arrayA[i]]]=arrayA[i];
            arrayC[arrayA[i]]--;
        }
    }
    var arrayA=[15,8,48,62,35,87,21,47];
    var arrayB=new Array(arrayA.length);
    console.log("原数组为："+arrayA);
    countingSort(arrayA,arrayB);
    console.log("计数排序后的数组为："+arrayB);
};

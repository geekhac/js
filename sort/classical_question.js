window.onload=function(){
    //将数组中两个已排好序的部分合并，合并后仍有序，array[p->q]为第一部分，array[q+1->r]为第二部分
    function merge(array,p,q,r){
        //将这两部分分别存放于leftArray和rightArray数组
        var n1=q-p+ 1,n2=r-q;
        var leftArray=[],rightArray=[];
        for(var i=0;i<n1;i++){
            leftArray[i]=array[p+i];
        }
        for(var j=0;j<n2;j++){
            rightArray[j]=array[q+j+1];
        }
        leftArray[leftArray.length]=9999;
        rightArray[rightArray.length]=9999;
        //将leftArray 和 rightArray 合并
        var num1= 0,num2=0;
        for(var k=p;k<=r;k++){
            if(leftArray[num1]<=rightArray[num2]){
                array[k]=leftArray[num1];
                num1++;
            }else{
                array[k]=rightArray[num2];
                num2++;
            }
        }
    }
    function mergeSort(array,p,r){
        //如果数组可再分
        if(p<r){
            //将数组划分为已排好序的两部分
            var q=Math.floor((p+r)/2);
            mergeSort(array,p,q);
            mergeSort(array,q+1,r);
            //将已排好序的两部分合并
            merge(array,p,q,r);
        }
    }
    var array=[8,7,4,5,9,8,4,1,2,59,87,54,21];
    console.log("未排序的数组："+array);
    mergeSort(array,0,array.length-1);
    console.log("已排好序的数组："+array);

    //二分查找key是否在array[low]和array[high]之间
    function binary(array,low,high,key){
        while(low<=high){
            var half=Math.floor((low+high)/2);
            if(array[half]==key){
                return half;
            }else if(array[half]<key){
                low=half+1;
            }else{
                high=half-1;
            }
        }
        return 0;
    }
    //查找array中是否有两个数相加为k
    function search(array,k){
        var length=array.length;
        for(var i=0;i<length-1;i++){
            var value=k-array[i];
            //查找key-array[i]是否在array[i+1]到array[length -1]中
            if(binary(array,i+1,length,value)){
                return true;
            }
        }
        return false;
    }
    console.log("当k为 146 时.array中是否有两个数相加为k? "+search(array,146));
    console.log("当k为 147 时.array中是否有两个数相加为k? "+search(array,147));
};

window.onload= function () {
    //实现统计排序
   function static(array){
       var count=0;
       //统计0的个数
       for(var i=0;i<array.length;i++){
           if(array[i]==0){
               count++;
           }
        }
       //将0赋值
       for(var j=0;j<count;j++){
           array[j]=0;
       }
       //将1赋值
       for(var k=count;k<array.length;k++){
           array[k]=1;
       }
   }
    var array=[0,1,1,1,0,0,0,0,0,1,1,1,1,0];
    console.log("原数组为："+array);
    static(array);
    console.log("排序后数组为"+array);
};
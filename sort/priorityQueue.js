window.onload=function(){
    var array=[5,8,9,12,4,6,58,4,2,25,41,5,48,40,63];
    console.log("初始队列为："+array);

    //用数组存储堆结构，并使第一个元素下表为1
    function heapInit(array){
        var heapArray=new Array;
        heapArray[0]=0;
        for(var i=array.length-1;i>=0;i--){
            heapArray[i+1]=array[i];
        }
        return heapArray;
    }

    //当堆的左右子堆均为大顶堆时，调整堆为大顶堆
    function maxHeapify(heap,i){
        var large=0;
        var left=2*i;
        var right=2*i+1;
        var size=heap.length-1;
        if(left<=size&&heap[left]>heap[i]){
            large=left;
        }else{
            large=i;
        }
        if(right<=size&&heap[right]>heap[large]){
            large=right;
        }
        if(large!=i){
            var temp=heap[i];
            heap[i]=heap[large];
            heap[large]=temp;
            maxHeapify(heap,large);
        }
    }
    //构建大顶堆
   function buildMaxHeap(heap){
       var size=heap.length-1;
       var half=Math.floor(size/2);
       for(var i=half;i>=1;i--){
           maxHeapify(heap,i);
       }
       return heap;
   }
    //取出最高优先级的
    function maxinum(heap){
        return heap[1];
    }
    //取出最高优先级的并把它从优先级队列中移除
    function extractMax(heap){
        var size=heap.length-1;
        if(size<1){
            return "队列为空，无法取出";
        }
        var max=heap[1];
        heap[1]=heap[size];
        heap.length--;
        maxHeapify(heap,1);
        return [max,heap];
    }
    //将优先级为key的任务插入优先级队列i处
    function insertKey(heap,i,key){
        if(key<heap[i]){
            return "优先级过低，不能插入";
        }
        heap[i]=key;
        var parent=Math.floor(i/2);
        while(i>1&&heap[i]>heap[parent]){
            var temp=heap[i];
            heap[i]=heap[parent];
            heap[parent]=temp;
            i=parent;
            parent=Math.floor(i/2);
        }
        return heap;
    }
    //将优先级为key的任务插入优先级队尾
    function insert(heap,key){
        var size=heap.length-1;
        heap[size+1]=key-1;
        insertKey(heap,size+1,key);
        return heap;
    }

    var heap=heapInit(array);
    var maxHeap=buildMaxHeap(heap);
    console.log("构造出的优先级队列堆为："+maxHeap);
    var max=maxinum(maxHeap);
    console.log("取出最高优先级的："+max);
    var result=extractMax(maxHeap);
    console.log("取出最高优先级的并把它从优先级队列中移除,最大值为："+result[0]+" 移除后队列为："+result[1]);
    console.log(maxHeap);
    var afterInsertI=insertKey(maxHeap,5,90);
    console.log("将优先级为90的任务插入优先级队列5处："+afterInsertI);
    var afterInsert=insert(maxHeap,79);
    console.log("将优先级为79的任务插入优先级队尾："+afterInsert);
};
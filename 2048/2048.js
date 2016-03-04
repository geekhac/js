/**
 * Created by �����ĵ��� on 2015/9/20 0020.
 */
var locations;
var colors=["#fff6c2","#bbbbbb","#b5ff93","#fff682","#ffec0e","#8ba5ff","#6584ff","#a74ed3","#ff9ee4","#ff76d3","#ff50b2","#d30b4f"];
var time;
var score;
var max;
var t;
function init(){
    time=0;
    t=setInterval(showTime,1000);
    score=0;
    max=0;
    locations=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    locations[createLocationNum()]=createFixedNum();
    print();

    window.onkeydown=function(e){
        var keyCode;
        if(!e){
            e=window.event;
        }
        if(document.all){
            keyCode= e.keyCode;
        }else{
            keyCode= e.which;
        }
        if (keyCode == 37 || keyCode == 65) {
            $("#direction").text("←");
            toLeft();
            isEnd();
        }
        if (keyCode == 38 || keyCode == 87) {
            $("#direction").text("↑");
            toUp();
            isEnd();
        }
        if (keyCode == 39 || keyCode == 68) {
            $("#direction").text("→");
            toRight();
            isEnd();
        }
        if (keyCode == 40 || keyCode == 83) {
            $("#direction").text("↓");
            toDown();
            isEnd();
        }

    }
}

function showTime(){
    $("#time").text("用时："+(++time)+"s.");
}



function isEnd(){
    if(locations.indexOf(0)==-1){
        $("#danger").text("注意了哦~~~");
        if(isXEnd()&&isYEnd()){
            clearInterval(t);
            if(window.confirm("结束了/n 当前最大数为："+max+"/n最高分为："+"score"+"/n/n/n再玩一次?")){
                init();
            }else{
                window.close();
            }
        }
    }else{
        $("#danger").text("");
    }
}
function isXEnd(){
    var f=false;
    for(var i=0;i<4;i++){
        f=(locations[4*i]!=locations[4*i+1])&&(locations[4*i+1]!=locations[4*i+2])&&(locations[4*i+2]!=locations[4*i+3]);
        if(!f){
            break;
        }
    }
    return f;
}
function isYEnd(){
    var f=false;
    for(var i=0;i<4;i++){
        f=(locations[i]!=locations[4+i])&&(locations[4+i]!=locations[8+i])&&(locations[8+i]!=locations[12+i]);
        if(!f){
            break;
        }
    }
    return f;
}

function toRight(){
    for(var i=0;i<4;i++){
        var v=[locations[4*i+3],locations[4*i+2],locations[4*i+1],locations[4*i]];
        var z=toArray(v);
        locations[4*i+3]=z[0];
        locations[4*i+2]=z[1];
        locations[4*i+1]=z[2];
        locations[4*i]=z[3];
    }
    locations[createLocationNum()]=createFixedNum();
    print();
}
function toUp(){
    for(var i=0;i<4;i++){
        var v=[locations[i],locations[4+i],locations[8+i],locations[12+i]];
        var z=toArray(v);
        locations[i]=z[0];
        locations[4+i]=z[1];
        locations[8+i]=z[2];
        locations[12+i]=z[3];
    }
    locations[createLocationNum()]=createFixedNum();
    print();
}
function toDown(){
    for(var i=0;i<4;i++){
        var v=[locations[12+i],locations[8+i],locations[4+i],locations[i]];
        var z=toArray(v);
        locations[12+i]=z[0];
        locations[8+i]=z[1];
        locations[4+i]=z[2];
        locations[i]=z[3];
    }
    locations[createLocationNum()]=createFixedNum();
    print();
}
function toLeft(){
    for(var i=0;i<4;i++){
        var v=[locations[4*i],locations[4*i+1],locations[4*i+2],locations[4*i+3]];
        var z=toArray(v);
        locations[4*i]=z[0];
        locations[4*i+1]=z[1];
        locations[4*i+2]=z[2];
        locations[4*i+3]=z[3];
    }
    locations[createLocationNum()]=createFixedNum();
    print();
}
function toArray(v) {
    if (!allZero(v)) {
        //是0交换到后面
        if (partZero(v)) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (v[j] == 0) {
                        v[j] = v[j + 1];
                        v[j + 1] = 0;
                    }
                }
            }
        }
        //相同数合并
        for (var i = 0; i < 3; i++) {
            if (v[i] == v[i + 1]) {
                score += v[i];
                var k = i;
                v[i] = v[i] * 2;
                //后数前移
                while (++k < 3) {
                    v[k] = v[k + 1];
                }
                v[3] = 0;
            }
        }
     }
    return v;
}
    function partZero(v) {
        return (v[0] == 0) || (v[1] == 0) || (v[2] == 0) || (v[3] == 0);
    }

    function allZero(v) {
        return (v[0] == 0) && (v[1] == 0) && (v[2] == 0) && (v[3] == 0);
    }

    function createLocationNum() {
        var num;
        do {
            num = Math.floor(Math.random() * 16);
        } while (locations[num] != 0);
        return num;
    }

    function createFixedNum() {
        var num;
        num = Math.random() < 0.8 ? 2 : 4;
        return num;
    }

    function print() {
        for (var i = 0; i < 16; i++) {
            if (locations[i] != 0) {
                $("#div" + (i + 1)).text(locations[i]);
            }else{
                $("#div" + (i + 1)).text("");
            }
        }
        for (var i = 0; i < 16; i++) {
            var index = locations[i].toString(2).length - 1;
            $("#div" + (i + 1)).css("background-color", colors[index]);
        }
        max = locations[0];
        for (var i = 1; i < 16; i++) {
            if (max < locations[i]) {
                max = locations[i];
            }
        }
        $("#score").text("总分数：" + score);
        $("#max").text("当前最大数：" + max);
    }


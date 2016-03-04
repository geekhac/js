search();
function search(){
    var input=document.getElementById("nav-search");
    input.onclick=function(){
        this.style.backgroundColor="white";
        if(this.value=="搜索问题、话题或人"){
            this.value="";
        }
    };
    input.onblur=function(){
        this.style.backgroundColor="#e1eaf2";
        if(this.value!="搜索问题、话题或人"){
            this.value="搜索问题、话题或人";
        }
    };
    var search=document.getElementById("search-pic");
    search.onclick=function(){
        this.style.border=0;
        this.style.padding=0;
        this.style.boxShadow='none';
    }
}
function question(){
    var button=document.getElementById("nav-question");
    button.onclick= function () {
        var div2=document.getElementById("qus-div");
        div2.style.display="block";
        var div1=document.getElementById("container");
        div1.style.opacity=0.5;
        div1.style.position="fixed";
        var divOpacity=document.getElementById("opacity");
        var height=window.innerHeight;
        divOpacity.style.display="block";
        divOpacity.style.height=height;
    }
}
question();
function questionClose(){
    var close=document.getElementById("qus-close");
    close.onclick=function(){
        var qusDiv=document.getElementById("qus-div");
        qusDiv.style.display="none";
        var div1=document.getElementById("container");
        div1.style.opacity=1;
        div1.style.position="static";
        var divOpacity=document.getElementById("opacity");
        divOpacity.style.display="none";
    }
}
questionClose();
function cardSpanChangeColor(){
    var section=document.getElementsByClassName("card-attention")[0];
    var ul=section.getElementsByTagName("ul")[0];
    var li=ul.getElementsByTagName("li");
    var a0=li[0].getElementsByTagName("a")[0];
    var span0= a0.getElementsByTagName("span");
    a0.onmouseover=function(){
        span0[0].style.color="#698ebf";
        span0[1].style.color="#698ebf";
    };
    a0.onmouseout=function(){
        span0[0].style.color="#000";
        span0[1].style.color="#999";
    };
    var a1=li[1].getElementsByTagName("a")[0];
    var span1= a1.getElementsByTagName("span");
    a1.onmouseover=function(){
        span1[0].style.color="#698ebf";
        span1[1].style.color="#698ebf";
    };
    a1.onmouseout=function(){
        span1[0].style.color="#000";
        span1[1].style.color="#999";
    };
    var a2=li[2].getElementsByTagName("a")[0];
    var span2= a2.getElementsByTagName("span");
    a2.onmouseover=function(){
        span2[0].style.color="#698ebf";
        span2[1].style.color="#698ebf";
    };
    a2.onmouseout=function(){
        span2[0].style.color="#000";
        span2[1].style.color="#999";
    };
}
cardSpanChangeColor();
function cardButton(){
    var button=document.getElementById("card-btn-attention");
    button.onclick=function(){
        if(button.value=="关注"){
            button.style.color="#888";
            button.style.background="#eee";
            button.style.border="1px solid #ddd";
            button.value="取消关注";
        }
        else{
            button.style.color="#000";
            button.style.background="linear-gradient(to bottom,#adda4d,#86b846)";
            button.style.border="1px solid #6d8f29";
            button.value="关注";
        }
    }
}
cardButton();
function internetPhoto(){
    var img=document.getElementById("internet-photo");
    var card=document.getElementsByClassName("card")[0];
    var theme=document.getElementById("internet-theme");
    img.onmouseover=function(){
        card.style.display="block";
        card.style.top="80px";
        card.style.left="-70px";
    };
    img.onmouseout=function(){
        card.style.display="none";
    };
    theme.onmouseover=function(){
        card.style.display="block";
        card.style.top="45px";
        card.style.left="30px";
    };
    theme.onmouseout=function(){
        card.style.display="none";
    };
    card.onmouseover=function(){
        card.style.display="block";
    };
    card.onmouseout=function(){
        card.style.display="none";
    };
}
internetPhoto();
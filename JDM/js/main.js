// search()


// function  search(){
    var header = document.getElementsByClassName("header")[0];

    var loop = document.getElementsByClassName("loop")[0];

    // 获取banner卷进去的高度
    var height = loop.offsetHeight;

    window.onscroll = function() {
    var top = document.documentElement.scrollTop;
    if(top>height) {
        header.style.background = "rgba(201,21,35,0.85)"
    }else {
        var opacty = top/this.height*0.85;
        header.style.background = "rgba(201,21,35,"+opacty+")";
    }
}

// }

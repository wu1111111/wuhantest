$(function () {
    $(".top-main11 .num1 li ").click(function () {
            $(this).addClass('first-num1').siblings().removeClass('first-num1')
            index = $(this).index()
        $(".top-main11 .pic1 li").eq(index).addClass("pic2").siblings().removeClass("pic2")
        $(".top-main12 ul  li").eq(index).addClass("demo11").siblings().removeClass("demo11")
            return false
        }
    )
    index=0;
    $(".arrow .right-arrow").click(function () {
        index++;
        if(index>4){
           index=0
        }
        $(".top-main11 .num1 li").eq(index).addClass("first-num1").siblings().removeClass("first-num1")
        $(".top-main12 ul  li").eq(index).addClass("demo11").siblings().removeClass("demo11")
        $(".top-main11 .pic1 li").eq(index).addClass("pic2").siblings().removeClass("pic2")
    })
    $(".arrow .left-arrow").click(function () {
        // console.log(index)
        index--;
        if(index<0){
          index=4
        }
        $(".top-main11 .num1 li").eq(index).addClass("first-num1").siblings().removeClass("first-num1")
        $(".top-main12 ul  li").eq(index).addClass("demo11").siblings().removeClass("demo11")
        $(".top-main11 .pic1  li").eq(index).addClass("pic2").siblings().removeClass("pic2")
    })
    var times=function () {
        index++;
        if(index>4){
            index=0
        }
        $(".top-main11 .num1 li").eq(index).addClass("first-num1").siblings().removeClass("first-num1")
        $(".top-main12 ul li").eq(index).addClass("demo11").siblings().removeClass("demo11")
        $(".top-main11 .pic1 li").eq(index).addClass("pic2").siblings().removeClass("pic2")
    }
    times()
    var setTime=setInterval(times,5000)
    $(".top-main11").hover(function () {
        clearInterval(setTime)
    },function () {
        setTime=setInterval(times,5000)
    })

    $("ul li").hover(function () {
        $(this).children("dl").show()
    },function () {
        $(this).children("dl").hide()
    })
})
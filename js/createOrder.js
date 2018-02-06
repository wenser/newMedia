// 点击下一步按钮
$(".nextStep").click(function () {

    // 如果当前按钮为不可用，则返回
    if( $(this).hasClass("layui-btn-disabled")){
        return false;
    }

    // 因为点击了下一步按钮，所以将上一步按钮调为可用
    $(".prevStep").removeClass("layui-btn-disabled");

    // 将上方进度条切换为下一步
    $('.timeLinePart ul').children(".active").next().addClass("active");
    //切换下方显示信息部分
    $(".mainPart").children(".active").removeClass("active").next().addClass("active");

    // 在切换后，判断是否为最后一步
    if($('.timeLinePart ul li.active').length == $('.timeLinePart ul li').length){
        // 就将当前按钮切换为不可用状态
        $(this).addClass("layui-btn-disabled");
    }

});

// 点击上一步按钮
$(".prevStep").click(function () {

    // 如果当前按钮为不可用，则返回
    if( $(this).hasClass("layui-btn-disabled")){
        return false;
    }

    // 因为点击了上一步按钮，所以将下一步按钮调为可用
    $(".nextStep").removeClass("layui-btn-disabled");

   // 如果当前步骤不是第一步
    if($('.timeLinePart ul li.active').length > 1){
        // 将当前最后一个选中的状态去掉
        $('.timeLinePart ul li.active').last().removeClass("active");
        $(".mainPart").children(".active").removeClass("active").prev().addClass("active")
    }

    //如果只剩下一个选中状态了，那就是第一步。在第一步时按钮状态为不可点击
    if($('.timeLinePart ul li.active').length == 1){
        $(this).addClass("layui-btn-disabled");
    }

});
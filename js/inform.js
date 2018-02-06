//		使用模块
layui.use(['form', 'layer' ,'laydate'], function() {
	//表单组件
	var form = layui.form;
	var layer = layui.layer;
	
	//拒绝按钮事件绑定
	$("body").on("click", "#reject", function () {
		layer.open({
			type: 1,
			skin: 'dialog-textarea', //多文本输入
			area: ['420px', '300px'],
			content: '<textarea placeholder="aaaaasdasdsadsads"></textarea>',
			fixed:false,
			btn: ["确定", "取消"],
			yes: function (i) {
				var value = $(".dialog-textarea").find("textarea").val();
				alert("你输入的内容是'" + value + "'");
				layer.close(i);
			}
		});
	});
	
	//日期
	var laydate = layui.laydate;
	laydate.render({
	     elem: '#dateInput'
	    ,type: 'month'
	    ,btns: ['confirm']
	    //选择之后的回调
	    ,done: function(value, date, endDate){
	    	//修改头部的值
	    	setDate(value);
		    console.log(value); //得到日期生成的值，如：2017-08-18
		    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
		    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
		}
	});
	
	//选中日历
	$("body").on("click", '.calender_box .list_day li', function  () {
		if(!$(this).children()[0]) return;
		$(this).toggleClass("active");
	});
});




//查看详细文字的绑定
function bindMoreTxt () {
	var theClas = ".more-txt";
	var eles = $(theClas);
	//判断元素文字是否溢出
	eles.each(function () {
		var that = this;
		//绑定
		$(that).on("click", function (e) {
			e.stopPropagation();
		});
		$("body").on("click", function  () {
			$(that).removeClass("active");
		});
		//判断是否溢出
		var scW = that.scrollWidth;
		if(scW > $(that).outerWidth()) {
			$(that).addClass("extend");
		}else {
			$(that).removeClass("extend");
		}
	});
	//给所有em绑定事件
	$(theClas+ "+ em").off("click");
	$(theClas+ "+ em").on("click", function  (e) {
		e.stopPropagation();
		$(".more-txt.extend.active").removeClass("active");
		var more = $(this).prev();
		if(more[0] && more.hasClass("extend")) {
			more.addClass("active");
		}
	});
}
//这个方法用来检测文字是否溢出
bindMoreTxt();
$(window).resize(bindMoreTxt);



//更改 头部的日期
function setDate (date) {
	var nowDate = new Date(date);
	$(".calender_title").find("em").eq(0).text(nowDate.getFullYear());
	$(".calender_title").find("em").eq(1).text(nowDate.getMonth() + 1);
}

//页面初始化设置一个值
setDate(new Date());

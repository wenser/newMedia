//		使用模块
layui.use(['element', 'form'], function() {
	//元素的默认特效
	var element = layui.element;
	//表单组件
	var form = layui.form;

});
//检测频道数量判断是否 展开按钮
tabBar();
function tabBar () {
	var ele = $("#tabBar");
	var length = $(".filter_channel .layui-tab .layui-tab-title li").length;
	if(length > 14) ele.css("display","block");
	else return;
	ele.click(function () {
		$(".filter_channel .layui-tab-title").toggleClass("active");
	});
}

//数据加载后 检测表格点位数是否超过四个显示详细按钮
checkTimeDot ()
function checkTimeDot () {
	var checkElems = $(".hour_box");
	checkElems.each(function () {
		var that = this;
		//如果多过四个 则显示详细
		if($(that).find(".hour").length > 4) {
			$(that).find("label").show();
		}
		//禁止本身传播
		$(that).find("div").on("click", function (e) {
			if($(this).hasClass("active"))
			e.stopPropagation();
		});
		//body点击消除他
		$("body").on("click", function  () {
			$(that).find(".active").removeClass("active");
		});
	});
	
	//给所有label绑定事件
	$(checkElems).find("label").off("click");
	$(checkElems).find("label").on("click", function  (e) {
		e.stopPropagation();
		$(".hour_box div.active").removeClass("active");
		var more = $(this).prev();
			more.addClass("active");
	});
}


//页面滚动时让频道表格一直悬浮
//参数为 div.table-box 那个盒子的唯一选择器
floatThead($(".table_box").eq(0));

function floatThead (tableBoxEle) {
	var that = $(tableBoxEle);
	var floatBox = that.clone();
	floatBox.children().wrapAll("<div class='table_box'>");
	floatBox.addClass("table_float_box").find("tbody").remove();
	floatBox[0].bindEle = that[0];
	
	//插入节点
	floatBox.appendTo("body");
	//滚动事件
	that.find(".abs").on("scroll", function () {
		var sl = this.scrollLeft;
		floatBox.find(".abs")[0].scrollLeft = sl;
	});
	//layui-body 滚动事件
	that.parents(".layui-body").on("scroll", function () {
		floatBox.css("left", 181 - this.scrollLeft);
		
		if(that.offset().top < 2 && that.offset().top > 2 - that.height()) {
			floatBox.addClass("active");
		}else {
			floatBox.removeClass("active");
		}
	});
}
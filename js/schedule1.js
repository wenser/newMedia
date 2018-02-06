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

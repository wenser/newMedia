//更改 头部的日期
function setDate (date) {
	var nowDate = new Date(date);
	$(".calender_title").find("em").eq(0).text(nowDate.getFullYear());
	$(".calender_title").find("em").eq(1).text(nowDate.getMonth() + 1);
}

//页面初始化设置一个值
setDate(new Date());

//		使用模块
layui.use(['element', 'laydate'], function() {
	//元素的默认特效
	var element = layui.element;
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
});
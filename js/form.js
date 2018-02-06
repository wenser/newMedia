
//xui表单插件部分
//声明使用插件的表单
var xui = new Xui({
	el: "form",
	//实例的单独校验方法
	verifier: {
		adsfsadf: function (value, elem, args) {
			
		}
	}
});

//Xui构造函数的类方法  全局通用校验
Xui.configVerifier({
	globelVeri: function (value, elem, args) {
			
	}
});



//表单提交演示
//几个按钮按顺序的点击事件
$("#btn1").click(function () {
	//原生不校验
	$("form").submit();
});
$("#btn2").click(function (e) {
	//原生校验
	var result = xui.verify();
	if(result) {
		$("form").submit();
	}
});
$("#btn3").click(function () {
	//不校验 获取表单json
	var data = xui.getJSON();
	console.log(data);
});
$("#btn4").click(function (e) {
	//校验 获取表单json
	setTimeout(function () {
		var result = xui.verify();
		if(result) {
			var data = xui.getJSON();
			console.log(data);
		}
	},50)
});




//layui模块
layui.use(['element', 'form', 'upload', 'laydate', 'layer' ], function() {
	//元素的默认特效
	var element = layui.element;
	//表单组件
	var form = layui.form;
	//文件上传组件
	var upload = layui.upload;
	//日期组件
	var laydate = layui.laydate;
	//弹出层组件
	var layer = layui.layer;
	
	//--------------------------------upload 上传文件组件栗子-----------------------------------------------------
	//	参数选项	说明	类型	默认值
	//	elem	指向容器选择器，如：elem: '#id'。也可以是DOM对象	string/object	-
	//	url	服务端上传接口，返回的数据规范请详见下文	string	-
	//	method	上传接口的 HTTP 类型	string	post
	//	data	请求上传接口的额外参数	object	-
	//	accept	指定允许上传的文件类型，可选值有：images（图片）、file（所有文件）、video（视频）、audio（音频）	string	images
	//	exts	允许上传的文件后缀。一般结合 accept 参数类设定。假设 accept 为 file 类型时，那么你设置 exts: 'zip|rar|7z' 即代表只允许上传压缩格式的文件。如果 accept 未设定，那么限制的就是图片的文件格式	string	jpg|png|gif|bmp|jpeg
	//	auto	是否选完文件后自动上传。如果设定 false，那么需要设置 bindAction 参数来指向一个其它按钮提交上传	boolean	true
	//	bindAction	指向一个按钮触发上传，一般配合 auto: false 来使用。值为选择器或DOM对象，如：bindAction: '#btn'	string/object	-
	//	field	设定文件域的字段名	string	file
	//	size	设置文件最大可允许上传的大小，单位 KB。不支持ie8/9	number	0（即不限制）
	//	multiple	是否允许多文件上传。设置 true即可开启。不支持ie8/9	boolean	false
	//	number	设置同时可上传的文件数量，一般配合 multiple 参数出现。
	//	drag	是否接受拖拽的文件上传，设置 false 可禁用。不支持ie8/9	boolean	true
	
	//	下面是回调
	//choose	选择文件后的回调函数。返回一个object参数，详见下文	function	-
	//before	文件提交上传前的回调。返回一个object参数（同上），详见下文	function	-
	//done	执行上传请求后的回调。返回三个参数，分别为：res（服务端响应信息）、index（当前文件的索引）、upload（重新上传的方法，一般在文件上传失败后使用）。详见下文	function	-
	//error	执行上传请求出现异常的回调（一般为网络异常、URL 404等）。返回两个参数，分别为：index（当前文件的索引）、upload（重新上传的方法）。详见下文	function	-	
	
	//单文件选择器
	upload.render({
		auto:false, // 不自动上传
		elem: '#test1', //触发按钮元素
	});
	
	//单文件选择器 自动上传 不参与校验
	upload.render({
		elem: '#test2', //触发按钮元素
		url: '/upload/',  //上传地址
		//服务器响应成功回调
		done: function (res) {
			console.log(res)
		},
		//失败
		error: function (err) {
			console.log(err)
		}
	});
	
	//--------------------------------laydate 日期组件栗子-----------------------------------------------------
	//	laydate.render options 配置参数说明
	/*
	laydate.render({
		elem: string/DOMObject : 绑定的元素(输入框)
		type: string 默认 "date"  : year 年选择  | month 月选择 | date 日期选择 | time | 时间选择 | datetime 日期时间选择 
		range: boolean/string 默认false : 如果为true 开启左右面板范围选择
		format: string  默认yyyy-MM-dd : 通过日期时间各自的格式符和长度，来设定一个你所需要的日期格式。
		value: string/dateObj 默认 new Date() :支持传入符合format参数设定的日期格式字符 例如'2018-08-18'，或者 new Date() 
		min/max: 同上  设置最小和最大范围
		btns: Array，默认值：['clear', 'now', 'confirm'] 对应三种按钮
	});
	*
	* */
	//时间选择器
	laydate.render({
		elem: '#test4',
		btns:["confirm"]
	});
	//日期时间选择器
	laydate.render({
		elem: '#test5',
		type: 'datetime', //是否是日期时间选择
		btns:["confirm"]
	});
	//范围选择日期
	laydate.render({
		elem: '#test6',
		range: true, //是否是范围选择
		btns:["confirm"]
	});
	//只选择时间
	laydate.render({
		elem: '#test7',
		type: "time", //是否是只选择时间
		btns:["confirm"]
	});
	//只选择时间范围
	laydate.render({
		elem: '#test8',
		type: "time", 
		range:true, //时间加范围
		btns:["confirm"]
	});
	
	//--------------------------------layer 弹出层组件栗子-----------------------------------------------------
	//点击警告框按钮
	$("#alert").click(function (){
		//调用警告框
		/*
		*@parse1: string 警告的内容 
		*@parse2: obj 配置参数  |  可选
		*@parse3: func 按钮的回调函数  |可选 
		*/
		layer.alert("我警告你把我放下！", {
			title: "我是警告框的标题",//标题
			btn: ["确认"] //按钮会根据这个数组的长度出现，文字就是数组当前元素
		},function (i) {
			console.log("按钮的回调函数");
			//如果写了回调 则必须手动调用close方法 关闭弹窗 否则不会关闭
			layer.close(i);
		});
	});
	//点击确认框按钮
	$("#confirm").click(function (){
		//调用确认
		/*
		*@parse1: string 确认框的内容 
		*@parse2: obj  配置参数   |  可选
		*@parse3: func 确认按钮的回调函数   |  可选
		*@parse4: func 取消按钮的回调函数  一般不传 不传自动关闭  |  可选
		*/
		layer.confirm("我帅么？", {
			title: "我是确认框的标题",//标题
			btn: ["帅","帅"] //按钮会根据这个数组的长度出现，文字就是数组当前元素
		},function (i) {
			console.log("确认按钮的回调函数");
			//如果写了回调 则必须手动调用close方法 关闭弹窗 否则不会关闭
			layer.close(i);
		});
	});
	//点击自定义内容按钮
	$("#defined").click(function (){
		//调用自定义内容
		/*
		*@parse1: obj  配置参数   必填
		*/
		layer.open({
		  type: 1,//类型：Number，默认：0 layer提供了5种层类型。可传入的值有：0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）。 若你采用layer.open({type: 1})方式调用，则type为必填项（信息框除外）
		  //closeBtn: 0, //不显示关闭按钮
		  //anim: 2,//动画方式
		  skin: 'demo', //给元素加样式类名 
		  shade: false, //遮罩层
//		  time: 10000, //10秒后自动关闭
		  shadeClose: true, //开启遮罩关闭
		  content: '内发剪刀手发斯蒂芬按时 按时都发来撒打飞机阿斯顿flag收代理费阿萨德按时 容', //HTML文本  或传入一个元素 比如传入一个 $("#div")
		  area:["500px","500px"], //宽高
		  btn: ["按钮1","按钮2","按钮3","按钮4"],
		  //第一个按钮回调函数
		  yes: function(i) {
		  	alert("yes");
		  	layer.close(i);
		  },
		  //第2个按钮回调函数
		  btn2: function(i) {
		  	alert("btn2");
		  	layer.close(i);
		  },
		  //第3个按钮回调函数
		  btn3: function(i) {
		  	alert("btn3");
		  	layer.close(i);
		  }
		});
	});	
//	测试用的
	$("#a").click(function (){
		layer.open({
			type:1
			,content:$("form")
			,area: ['1000px','500px']
			,btn:["校验"]
			,yes: function () {
				xui.verify();
			}
		});
	});
});

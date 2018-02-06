//		使用模块
layui.use(['element', 'form', 'upload', 'laydate', 'layer' ,'jquery','table','laytpl','laypage'], function() {
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
    //表格组件
    var table = layui.table;

    var $ = layui.jquery;

    var laytpl = layui.laytpl;

    var laypage = layui.laypage;
    //范围选择日期
    laydate.render({
        elem: '#dateSelect',
        range: true, //是否是范围选择
        btns:["confirm"]
    });

    // 表格部分测试数据
	var tableTestData = [
		{
			"id":90,
			"orderId":"170300101221230",
			"orderBelong":"百思极致百思极致百思百思",
			"media":"追书神器器",
			"location":"开机大图开机开机大机",
			"platformType":"双端",
			"executeTime":"2017.6.26 - 2017.7.26",
			"executePrice":"82,000,00",
			"clientName":"LVMHLMH",
			"sales":"哈哈哈哈"
		},
        {
            "id":91,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思百思极致百思极致百思百思百思极致百思极致百思百思百思极致百思极致百思百思",
            "media":"追书神器器百思极致百思极致百思百思百思极致百思极致百思百思百思极致百思极致百思百思百思极致百思极致百思百思思百思极致百思极致百思百思百思极致百思极致百思百思思百思极致百思极致百思百思百思极致百思极致百思百思思百思极致百思极致百思百思百思极致百思极致百思百思思百思极致百思极致百思百思百思极致百思极致百思百思百思极致百思极致百思百思百思极致百思极致百思百思百思极致百思极致百思百思百思极致百思极致百思百思",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":92,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":93,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":94,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":95,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":95,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":97,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":97,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":98,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":100,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":101,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":102,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":103,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":104,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":105,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        },
        {
            "id":106,
            "orderId":"170300101221230",
            "orderBelong":"百思极致百思极致百思百思",
            "media":"追书神器器",
            "location":"开机大图开机开机大机",
            "platformType":"双端",
            "executeTime":"2017.6.26 - 2017.7.26",
            "executePrice":"82,000,00",
            "clientName":"LVMHLMH",
            "sales":"陈思怡1"
        }
	];


    //分页部分完整功能
    // 具体案例请看  http://www.layui.com/doc/modules/laypage.html
    laypage.render({
        // 存放分页的容器
        elem: 'page'
        // 数据总数
        ,count: 100
        // 自定义排版
        ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
        // 切换分页的回调
        ,jump: function(obj){
            console.log(obj)
        }
    });

    //拼接表格数据信息
    var render = function(data, obj){
        var arr = [],thisData = data;
        layui.each(thisData, function(index, item){
            arr.push('<tr>');

            arr.push('<td>');
            arr.push('<input type="checkbox" class="contentCheck" lay-skin="primary">');
            arr.push('</td>');

            arr.push('<td>');
            arr.push(item.id);
            arr.push('</td>');

            //表格中的元素带下划线
            arr.push('<td class="underLineTd"><a>');
            arr.push(item.orderId);
            arr.push('</td></a>');

            arr.push('<td>');
            arr.push(item.media);
            arr.push('</td>');

            //操作按钮
            arr.push('<td class="centerAlign">');
            arr.push('<a class="layui-btn layui-btn-xs" lay-event="edit"><i class="layui-icon">&#xe642;</i>修改</a>');
            arr.push('<a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del"><i class="layui-icon">&#xe640;</i>删除</a>');
            arr.push('<a class="layui-btn layui-btn-warm layui-btn-xs" lay-event="detail"><i class="layui-icon">&#xe6b2;</i>备注</a>');
            // arr.push('<br>');
            arr.push('<a class="layui-btn layui-btn-normal layui-btn-xs" lay-event="detail"><i class="layui-icon">&#xe65e;</i>设置价格</a>');
            arr.push('</td>');


            arr.push('</tr>');
        });
        return arr.join('');
    };

    // 将表格书数据加载到页面中
    $("#test tbody").html(render(tableTestData));
    form.render('checkbox');//如果选项中存在复选框，则需要将添加此语句，修改默认样式


    // 全选复选框的事件
    form.on('checkbox(allChoose)', function(data){
        // 选中复选框则全选
        if(data.elem.checked){
            $("#test").find(".contentCheck").prop("checked",true);
        }else{
            $("#test").find(".contentCheck").prop("checked",false);
        }
        form.render('checkbox');
    });
});

// 保存loading动画效果
var loadingCartoon;

// 点击事件弹出动画效果
$("#openLoadBtn").click(function () {
	//调用弹出动画效果
	// 1为参数，可选参数为0,1,2.分别代表3个不同的动画效果
	//shade为背景效果，数组第一项(0.8)为透明度，数组第二项(#393D49)为背景颜色
	//time为自动关闭的时间,也可以通过调用关闭方法实现
    loadingCartoon = layer.load(1,{shade: [0.1, '#393D49'],time:3000});
	// 关闭loading动画
    // layer.close(loadingCartoon);
});


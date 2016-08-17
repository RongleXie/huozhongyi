
JsInfoLoader = function(){
	var Arr = new Array("无锡市源泽贸易有限公司",             //资质公司名称
					    "南京市建邺区银轮花园02幢7号301室", //资质公司地址
						"400-692-1815",                     //电话
						"42417863",                        //客服QQ号
						"http://120.24.163.148:888/",       //订单系统服务器地址
						"http://tb.53kf.com/kf.php?arg=10124195&style=1",                                      //在线客服系统调用地址
						"0",                                                                                   //循环打开QQ对话框的间隔时间，单位为秒
						"温馨提示：此网站已经通过《315消费者管理协会》审核批准销售，您可以放心购买！",  //客户打开网页时的弹出框内容
						"欢迎访问本公司网站，如需订购产品，请在线下单或者拨打电话！"                                      //JS执行出错时候的提示语句
			   		   );
	//输出公司信息
	function WriteBaseInfo(){
		var name = document.getElementsByName("JS_COM_NAME");
		var address = document.getElementsByName("JS_COM_ADD");
		var tel = document.getElementsByName("JS_COM_TEL");
		
		for(var i=0; i<name.length;i++){
			name[i].innerHTML = Arr[0];
		}
		for(var i=0; i<address.length;i++){
			address[i].innerHTML = Arr[1];
		}
		for(var i=0; i<tel.length;i++){
			tel[i].innerHTML = Arr[2];
		}
	}
	
	//加载访客统计系统JS代码
	function LoadVisitorJS(){
		var js = '<SCR' + 'IPT type="text/javascript" id="BidMisOrderJs" SaveAction="' + Arr[4] + '/Public/SaveVisitor.htm" src="' + Arr[4] + '/Public/BidOrder/GetOrder.js"></SCR' + 'IPT>';
			js += '<br><SCR' + 'IPT type="text/javascript" src="http://s4.cnzz.com/z_stat.php?id=1255468630&web_id=1255468630"></SCR' + 'IPT>';
		document.write(js);
	}
	
	//加载客服分流系统JS代码
	function LoadFlowDispatchJS(){
		var js = '<SCR' + 'IPT type="text/javascript" src="' + Arr[4] + '/Public/FlowDispatch.htm?poduct_id=71"></SCR' + 'IPT>';
		document.write(js);
	}
	
	
	//公共方法，供调用的接口
	this.Load = function(){
		try{LoadFlowDispatchJS();}catch(e){};
		try{WriteBaseInfo();}catch(e){};
		try{LoadVisitorJS();}catch(e){};
	}
};

new JsInfoLoader().Load();
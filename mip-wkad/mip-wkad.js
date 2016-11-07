define('mip-wkad', ['require', 'customElement', 'zepto'], function (require) {

    var $ = require('zepto');
    var customElem = require('customElement').create();
	var loadAd = function(elem, className, content){
		var el = document.createElement('div');
		var script = document.createElement('script');
		var json = JSON.parse(content);
		el.className = className;
		script.type = 'text/javascript';
		script.innerHTML = json.join('');
		$(elem).append(el);
		$(el).append(script);
	};
    // build ������Ԫ�ز��뵽�ĵ�ʱִ�У�����ִ��һ��
    customElem.prototype.build = function () {
     // this.element ��ȡ����ǰʵ����Ӧ�� dom Ԫ��
       var elem = this.element;
	   var elStr = $(elem).attr('el');
	   var adStr = $(elem).attr('ads');
	   loadAd(elem, elStr, adStr);
	}
	return customElem;
});

require(['mip-wkad'], function (plugindemo) {
    MIP.registerMipElement('mip-wkad', plugindemo);
	(function(){
		var ggArr = new Array(); 
		var string = '';
		$.each( keys_arr, function(index, value) { 
			string = string +'|'+ value; 
		});
		ggArr['ad_key'] = string.substr(1);
		setTimeout(function(){
			mobileAd.getAd( ggArr );
		}, 1000)
	})();
});
define('mip-wkad-config', ['require', 'customElement', 'zepto'], function (require) {

    var $ = require('zepto');
    var customElem = require('customElement').create();
	var loadJs = function(elem, url){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        $(elem).append(script);
	};
    // build ������Ԫ�ز��뵽�ĵ�ʱִ�У�����ִ��һ��
    customElem.prototype.build = function () {
        // this.element ��ȡ����ǰʵ����Ӧ�� dom Ԫ��
       var elem = this.element;
	   var attr = $(elem).attr('aid');
	   
	   switch(attr){
		   case 'take_ip': 
			loadJs(elem, 'http://ip.display.xywy.com/take_ip');
		    break;
		   case 'display_load':
			loadJs(elem, 'http://a.xywy.com/display/display_load.js');
		    break;
		   case 'stat':
			loadJs(elem, 'http://a.xywy.com/stat.js');
		    break;
			default:
			break;
	   }
		
	}
	return customElem;
});

require(['mip-wkad-config'], function (plugindemo) {
    MIP.registerMipElement('mip-wkad-config', plugindemo);
});
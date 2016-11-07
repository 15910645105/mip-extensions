define(function (require) {

    var $ = require('zepto');
    var customElem = require('customElement').create();
	var loadJs = function(elem, url, callback){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        $(elem).append(script);
		if(typeof callback != 'function'){
			
			return false;
			
		}else{
			script.onload = function(){
			
				callback();
			}
			
		}
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
			loadJs(elem, 'http://a.xywy.com/display/display_load.js', function(){
					var ggArr = {}; 
					var string = '';
					$.each( keys_arr, function(index, value) { 
					  string = string +'|'+ value; 
					});
					ggArr['ad_key'] = string.substr(1);
					mobileAd.getAd( ggArr );
				});
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
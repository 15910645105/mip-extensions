define('mip-wkfun', ['require', 'zepto'], function (require) {

    var $ = require('zepto');
	var wkFun = {
		searchFun: function(){
			//��������
			var itemInpDef = '����Ѱҽ��ҩ';
			$('#item_so_keyword').on({
				focus:function(){
					if($(this).val() == itemInpDef){
						$(this).val('');
						$(this).css('color','#666');	
					}
				},
				blur:function(){
					if($(this).val() == ''){
						$(this).val(itemInpDef);
						$(this).css('color','#c6c6c6');
					}
				}
			});

			$('.item-hd-so-input-box').on('click',function(){
				$('.item-hd-so-area').addClass('item-hd-so-focus');
			});
			$('.item-hd-so-back').on('click',function(){
				$('.item-hd-so-area').removeClass('item-hd-so-focus');
				$('#item_so_keyword').val(itemInpDef).css('color','#c6c6c6');
			});

			$('#item_hd_form form').on('submit', function(){
				var textVal = $.trim($('#item_so_keyword').val()),
					srcType = $('#item_so_keyword').attr('src_type');
				if(textVal == '����Ѱҽ��ҩ') {
					textVal = '';
				}else {
					textVal = textVal;
				}
				$(this).attr('method', 'post').attr('action', 'http://m.so.xywy.com/comse.php?src='+ srcType + '&keyword=' + encodeURIComponent(textVal));
			});
			$(".login-bar").click(function(){
				$(this).toggleClass("lonsg");
				$(".Extension").toggle();
			});
			//������ͳ��
			window.Quan_X = 0;
			window.Quan_Y = 0;
			var im=new Image; im.src="http://stat-z.xywy.com/test.png?t_c=1&tt"+Math.random();
			function getPos(callback){
				
				var longitude = 0, //����
					latitude = 0, //γ��
					options;
				
				options = {
				   enableHighAccuracy:true,
				   maximumAge: 10000
				};
				
				if(typeof callback != 'function'){
					//alert('callback������Ϊ����');
					return false;
				}
				
				if(localStorage.longitude && localStorage.latitude){
					callback(localStorage.longitude, localStorage.latitude); //ֱ�Ӵ��뱾�ش洢�ľ��Ⱥ�γ��
					return false;
				}
				
				if(navigator.geolocation){
				   navigator.geolocation.getCurrentPosition(showPosition, showError, options);
				}
				
				function showPosition(position){
					localStorage.longitude = longitude = position.coords.longitude; //����
					localStorage.latitude = latitude = position.coords.latitude; //γ��
					callback(longitude, latitude);//���뾭γ��
				}
				
				function showError(error){
					//��λʧ�ܵ�ͳ��
					im=new Image; im.src="http://stat-z.xywy.com/test.png?t_c=3&tt"+Math.random();
					 switch(error.code) {
						case error.PERMISSION_DENIED:
							//alert("��λʧ��,�û��ܾ��������λ");
							break;
						case error.POSITION_UNAVAILABLE:
							//alert("��λʧ��,λ����Ϣ�ǲ�����");
							break;
						case error.TIMEOUT:
							//alert("��λʧ��,�����ȡ�û�λ�ó�ʱ");
							break;
						case error.UNKNOWN_ERROR:
							//alert("��λʧ��,��λϵͳʧЧ");
							break;
					}
				}
				if(navigator.userAgent.indexOf('UCBrowser') > -1){
					return false;
				}else{
					getPos(function(x, y){
						//x--����, y--γ��
						//��λ�ɹ���ͳ��
						im=new Image; im.src="http://stat-z.xywy.com/test.png?t_c=2&tt"+Math.random();
						Quan_X=x;
						Quan_Y=y;
					});
				}
			}
		
		}
		
	};
   
	return wkFun;
});

require(['mip-wkfun'], function (wkFun) {
	wkFun.searchFun();
    //MIP.registerMipElement('mip-bj-fun', plugindemo);
});
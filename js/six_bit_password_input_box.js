/*
 * Javascript Document
 * Creat by Nelson 2016/02/18
 * 
 * Website:http://www.nelson_obj.com
 * 
 * QQ:616859570
 * Email:lirongkun@mytopbrand.com,616859570@qq.com
 * */
Object.prototype.boxInput = function(){
	var container = this;
	return {
		bindBoxinput:function(){
			var realInput = container.findChild(".realInput")[0];
			var bogusInput = container.findChild(".bogusInput")[0];
			var bogusInputArr = bogusInput.children;
			var maxLength = bogusInputArr[0].getAttribute("maxlength");
			realInput.onkeyup = function(){
				var real_str = this.value;
				for(var i = 0 ; i < maxLength ; i++){
					bogusInputArr[i].value = real_str[i]?real_str[i]:"";
				}
			}
		},
		getBoxInputValue:function(){
			var bogusInput = container.findChild(".bogusInput")[0];
			var bogusInputArr = bogusInput.children;
			var realValue = "";
			for(var i in bogusInputArr){
				if(!bogusInputArr[i].value){
					break;
				}
				realValue += bogusInputArr[i].value;
			}
			return realValue;
		}
	}
}

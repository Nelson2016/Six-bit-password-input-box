/*
 * CSS Document
 * 
 * Creat by Nelson 2016/02/18
 * 
 * Website:https://segmentfault.com/u/nelson2016
 * 
 * QQ:616859570
 * 
 * Email:Nelson_Lee@outlook.com , Nelson2016@aliyun.com
 * */
(function(){
	var container = document.getElementById("inputBoxContainer");
		boxInput = {
		maxLength:"",
		realInput:"",
		bogusInput:"",
		bogusInputArr:"",
		init:function(){
			var that = this;
			that.realInput = container.children[0];
			that.bogusInput = container.children[1];
			that.bogusInputArr = that.bogusInput.children;
			that.maxLength = that.bogusInputArr[0].getAttribute("maxlength");
			that.realInput.oninput = function(){
				that.setValue(this.value);
			}
			that.realInput.onpropertychange = function(){
				that.setValue(this.value);
			}
		},
		setValue:function(real_str){
			for(var i = 0 ; i < this.maxLength ; i++){
				this.bogusInputArr[i].value = real_str[i]?real_str[i]:"";
			}
			if(real_str.length >= this.maxLength){
				this.realInput.value = real_str.substring(0,6);
			}
		},
		getBoxInputValue:function(){
			var realValue = "";
			for(var i in this.bogusInputArr){
				if(!this.bogusInputArr[i].value){
					break;
				}
				realValue += this.bogusInputArr[i].value;
			}
			return realValue;
		}
	}
})()

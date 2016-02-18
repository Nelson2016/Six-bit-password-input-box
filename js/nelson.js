/*
 * Javascript Document
 * Creat by Nelson 2016/02/18
 * 
 * Website:http://www.nelson_obj.com
 * 
 * QQ:616859570
 * Email:lirongkun@mytopbrand.com,616859570@qq.com
 * */
Object.prototype.findChild = function(str){
	var flag = str.substring(0,1);
	var real_str = str.substring(1,str.length);
	this.dom = this;
	this.childArr = [];
	this.cd = this.children;
	this.child = "";
	switch(flag){
		case "#":
			for(var i in this.cd){
				if(this.cd[i].id = real_str){
					this.child = this.cd[i];
					break;
				}
			}
		break;
		case ".":
			for(var i in this.cd){
				if(this.cd[i].classList){
					if(this.cd[i].classList.contains(real_str)){
						this.childArr.push(this.cd[i])
					}
				}
			}
		break;
			
	}
	if(this.child){
		return this.child;
	}
	if(this.childArr){
		return this.childArr;
	}
	return null;
}

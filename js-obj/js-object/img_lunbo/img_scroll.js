function ImgScroll(id,imgList){
    this.box = document.getElementById(id);
    this.list = imgList;
}

ImgScroll.prototype = {
    constructor:ImgScroll,
    getStyle:function(dom,attr){
        return dom.currentStyle ?
        dom.currentStyle[attr] : window.getComputedStyle(dom,null)[attr]
    },
    animate:function(ele,json,times,callback){},
    creatDom:function(){
        var box = this.box;
        var list = this.list;
        //创建图片
        var oUl = '<ul>';
        var oP = '<p>';
        for(var i = 0;i<list.length;i++){
            oUl += '<li><a href="'+list[i].href+'"><img src="'+list[i].url+'"><a></li>';
            oP += '<span></span>'
        }
        oUl += '<li><a href="'+list[0].href+'"><img src="'+list[0].url+'"><a></li></ul>';
        oP +='</p>';
   
        box.innerHTML += oUl+oP;

        box.innerHTML += '<a>&lt;</a><a>&gt;</a>'
    },
        setStyle:function(){
            var box = this.box;//缓存容器对象
            var list = this.list;//缓存图片列表
            var w = box.clientWidth;
            var h = box.clientHeight;
            //添加样式
            box.innerHTML = '<style>#banner{width:'+(w*(list.length+1))+'px;overflow:hidden;position:absolute;left:0;top:0;}#banner li{float:left;width:'+w+'px;}#banner li img{display:block;width:'+w+'px;height:'+h+'px;}#banner li a{display:block;}</style>';
            this.creatDom();
        }
    
}

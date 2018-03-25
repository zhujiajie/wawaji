var imgarray=['images/1.png','images/2.png','images/wupin.png','images/1.png','images/2.png','images/wupin.png','images/3.png','images/4.png','images/wupin.png','images/1.png','images/2.png','images/1.png','images/2.png','images/wupin.png','images/3.png','images/4.png','images/wupin.png','images/1.png','images/2.png','images/1.png','images/2.png','images/wupin.png','images/3.png','images/4.png','images/wupin.png','images/1.png','images/2.png',];
var img_array=[];
var imgList=document.getElementById("img_list");
var num=document.getElementsByClassName("img_num");

for(var i=0;i<imgarray.length;i++){
	var Img="<img class='img_num' style='width:1.73rem;height:1.66rem;top:0;position:absolute;' src='" + imgarray[i]+ "'>"
	img_array.push(Img);
}

var img_array_=img_array.join('');

var listdiv_=document.createElement("div");
	  listdiv_.style.width=100+"%";
	  listdiv_.style.overflow="hidden";
	  listdiv_.innerHTML = img_array_;
	  imgList.appendChild(listdiv_);
	  for(var i=0;i<num.length;i++){
	  	num[i].style.left = i*2.8+"rem";
	  }



$('#btn').on('click',function(){
	catch_();
});

function catch_(){
	$('#zhua').addClass('zhuaanimation');
	setTimeout(function(){
		$('#zhua').removeClass('zhuaanimation');
	},2000);
	var x=$('#point').offset();
	console.log(x.top);
	setTimeout(function(){
		if(x.top>50){
			//执行拉起娃娃
			action();
		}
	},1000);
};

var time=60;
function  time_(){
	var time_=setInterval(function(){
		time--;
		if(time<0){
			clearInterval(time_);
			alert('时间到');
			location.reload();
		}
		$('#count-text').html(time+'s');
	},1000)
};
time_();


function action(){
	for (var i=0;i<num.length;i++){ 
		var thing=$(".img_num:eq("+i+")").offset();
		var thing_left=thing.left;
		//console.log(thing_left);
		var clientWidth =document.body.clientWidth;
		if(thing_left< clientWidth/2-70 || thing_left>clientWidth/2){
    		num[i].style.display = "block";
    		num[i].className = "img_num";
    	} else {
    		num[i].className = "img_num giftup";
    		num[i].style.position = "fixed";
    		fenshu(i);
    	}
    }
}
var lastfenshu=$('#newscore').html();
lastfenshu=parseInt(lastfenshu);

function fenshu(number){
	var src=num[number].src;
	src=src.substring(src.lastIndexOf("/")+1);
	//console.log(src);
	if(src=="wupin.png"){
		$('.reducescore').show();
		setTimeout(function(){
			$('.reducescore').hide();
		},1000);
		lastfenshu-=50;
		$('#newscore').html(lastfenshu);
	}else{
		$('.addscore').show();
		setTimeout(function(){
			$('.addscore').hide();
		},1000);
		lastfenshu+=50;
		$('#newscore').html(lastfenshu);
	}
};
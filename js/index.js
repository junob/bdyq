$(function(){
	$(".con").fullpage({
		navigation:true,
		navigationTooltips:['登录百度舆情','领先数据收集与处理','全面：舆情分析逻辑及架构','专业：专业数据可视化'],
		afterLoad:function(){
			$(".ship").toggleClass("active");
            $(".con2").toggleClass("active");
            $(".con3").toggleClass("active");
            $(".con4").toggleClass("active");
        }

	});
	 $(".btn").click(function(){
        	$.fn.fullpage.moveSectionDown()
      })
})
require(['jquery',"vender/a",'test'],function(){

 // bootstrap 依赖jquery
 require(['bootstrap']);
 // 首页nav 导航切换
 $('#content .nav li').on('click',function(e){
    var $index = $(this).index();
    var active = $('#content .nav li.active').index();
    if($index != active) {
     $('#content .nav li.active').removeClass('active');
     $(this).addClass('active');
    }
 });

});

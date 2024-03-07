$(function(){

    $(".slider li").eq(0).siblings().hide();
    // $(".slider li").hide();
    // $(".slider li").eq(0).show();

    var n=0;

    setInterval(function(){
        $(".slider li").eq(n).fadeOut();
        
            if(n==2){
                n=0;
            }else{
                n++;
            }
        
        $(".slider li").eq(n).fadeIn();

        // console.log(n)
    }, 3000)




    //토글메뉴
    $(".m_btn").click(function(){
        $(".m_nav").stop().slideToggle("fast");
    })
    

}) //jquery
$(function(){

    /* 네비게이션 */
    $('nav ul.gnb> li ').hover(function(){
        $('ul.sub').stop().slideDown()
    },function(){
        $('ul.sub').stop().slideUp()
    })

    /* a 무력화 */
    $('.contents1 .sub_banner li a').click(function(e){
        e.preventDefault()
    })


    /* 메인 슬라이드 시작 */
    $('ul.slide li').eq(0).siblings().hide(); //숨기기
    let slideIndex = 0; //0번 부터 돌게
    const slideLength = $('ul.slide li').length -1; // 0,1,2,3,4 라고 돌려줘야 돼서 5마리기 때문에 -1 해준것임
    //setInterval(function(){},3000) 함수를 따로 뻄 뭔 가 할게 많아ㅓㅅ
    let inter = setInterval(goSlide,4000); //변수가 잇어야 클리어 인터벌 ㅎ할 수 있어서 let

    $('.main_Visual .right_btn').click(function(){
        clearInterval(inter);
        goSlide();
        inter = setInterval(goSlide,3000);
    });

    $('.main_Visual .left_btn').click(function(){
        clearInterval(inter);
        backSlide();
        inter = setInterval(goSlide,3000);
    });

    $('.main_Visual .pause').click(function(){
        clearInterval(inter)
    });
    $('.main_Visual .play').click(function(){
        inter = setInterval(goSlide,3000);
    });

    $('.main_Visual ul.pager li').click(function(){
        clearInterval(inter);
        let myIndex = $(this).index();
        slideIndex = myIndex;
        rollingSlide();
        inter = setInterval(goSlide,3000)
    })

    function goSlide(){
        if(slideIndex<slideLength){
            slideIndex++;
        }else{
            slideIndex = 0;
        }
        //console.log(slideIndex) 1,2,3,4,0 반복
        // $('ul.slide li').eq(slideIndex).siblings().fadeOut()
        //$('ul.slide li').eq(slideIndex).fadeIn()
        rollingSlide();
    }

    function backSlide(){
        if(slideIndex == 0){
            slideIndex = slideLength; //0일 때는 4로 되게 
        }else{
            slideIndex --;
        }
        rollingSlide();
    }

    function rollingSlide(){
        $('ul.slide li').eq(slideIndex).siblings().fadeOut()
        $('ul.slide li').eq(slideIndex).fadeIn()
        $('.main_Visual ul.pager li').removeClass('active').eq(slideIndex).addClass(
            'active'
        )
    }
    //메인 슬라이드 끝

    var productI=0;
    /* 사업분야 슬라이드 */
    $('.ottugi_news .right_btn').click(function(){
        if(productI<2){
            productI++;
        }else{
            /* productI=0; */
        }
        $('.ottugi_news ul').animate({left:productI*(-300)},500)
    });

    $('.ottugi_news .left_btn').click(function(){
        if(productI==0){
            /* productI=3; */
        }else{
            productI--;
        }
        $('.ottugi_news ul').animate({left:productI*(-288)},500)

    });

    //오뚜기 인기상품 슬라이드 시작
    let faI = 0;
    $('.fa_rt').click(function(){
        if(faI < 1){
            faI++;
        }
        faRolling();
    });
    $('.fa_lt').click(function(){
        if(faI !=0){
            faI--;
        }
        faRolling();
    });
    function faRolling(){
        $('ul.fa_slide').animate({left : (-100*faI)+ '%'},500);
    };
    //오뚜기 인기상품 슬라이드 끝

    //이벤트 슬라이드 시작
    let eventSI =0;
    setInterval(function(){
       if(eventSI<1){
        eventSI++;
       }else{
        eventSI = 0;
       }
       //console.log(eventSI)
       $('.event_slide ul').animate({left : (eventSI * -100)+'%'},500)
    },6000)
    //이벤트 슬라이드 끝

    
    /* sns 탭메뉴 */
    $('section.ottogi_sns ul.tab_menu li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var i = $(this).index();
        $('section.ottogi_sns ul.tab_con>li').eq(i).addClass('on').siblings().removeClass('on')
    });

});/* ready end */
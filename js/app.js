// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


var imgshome_ary = [];
imgshome_ary.push($('#oscarBigHome_1'));
imgshome_ary.push($('#oscarBigHome_2'));
imgshome_ary.push($('#oscarBigHome_3'));
imgshome_ary.push($('#oscarBigHome_4'));

var currImgHome = 0;
var prevImgHome;
var delayImgHome = 5;
var transImgHome = .5;


$(window).load(function(){
    
   onInit(); 
});

function onInit()
{
    hideAllFeatures(0);

    showingFeature($('#oscarFeature'), 0, 1);

    hideAllHomeImg();
    showImgHome($('#oscarBigHome_1'), 0);

    TweenMax.delayedCall(delayImgHome, playHomeImgs);

    $('#galeriaCarousel').slick({


        variableWidth: false
    });
}

function hideAllFeatures(newTime){
    hidingFeature($('#oscarFeature'), newTime, 0);
    hidingFeature($('#bibianaFeature'), newTime, 0);
    hidingFeature($('#raulFeature'), newTime, 0);
    hidingFeature($('#marianaFeature'), newTime, 0);
    hidingFeature($('#vilmaFeature'), newTime, 0);
    hidingFeature($('#pabloFeature'), newTime, 0);
}

function hidingFeature(_feat, newTime, newHeight){
    TweenMax.to(_feat, newTime, {alpha:newHeight, onComplete:function(){
        $(_feat).css('display', 'none');
    }});
}

function showingFeature(_feat, newTime, newHeight){

    $(_feat).css('display', 'block');
    
    TweenMax.to(_feat, newTime, {alpha:newHeight});
}


$('#oscarCV').click(function(){
    clickCV($('#oscarFeature'));
});

$('#raulCV').click(function(){
    clickCV($('#raulFeature'));
});

$('#bibianaCV').click(function(){
    clickCV($('#bibianaFeature'));
});

$('#marianaCV').click(function(){
    clickCV($('#marianaFeature'));
});

$('#vilmaCV').click(function(){
    clickCV($('#vilmaFeature'));
});

$('#pabloCV').click(function(){
    clickCV($('#pabloFeature'));
});

function clickCV(_div){
    scrollCVS();

    hideAllFeatures(.5);

    TweenMax.delayedCall(.7, function(){

        showingFeature(_div,.5, 1);
    });
}

function scrollCVS(){
    var curScroll = {x:getScrollX(), y:getScrollY()};
    var divoffset = $('#maestros').offset();
    
    TweenLite.to(curScroll,.5, {y:divoffset.top, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }});
}
//returns the current horizontal scroll position
function getScrollX() {
    return (window.pageXOffset != null) ? window.pageXOffset : (document.documentElement.scrollLeft != null) ? document.documentElement.scrollLeft : document.body.scrollLeft;
}
//returns the current vertical scroll position
function getScrollY() {
    return (window.pageYOffset != null) ? window.pageYOffset : (document.documentElement.scrollTop != null) ? document.documentElement.scrollTop : document.body.scrollTop;
}


function clickMenu(_secc){
    var curScroll = {x:getScrollX(), y:getScrollY()};
    var divoffset = $(_secc).offset();

    TweenLite.to(curScroll,.5, {y:divoffset.top, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }});
}


$('#inicioMenu').click(function(){
    clickMenu($('#home'));
});

$('#acercaMenu').click(function(){
    clickMenu($('#acercade'));
});

$('#horariosMenu').click(function(){
    clickMenu($('#horarios'));
});

$('#maestrosMenu').click(function(){
    clickMenu($('#maestros'));
});

$('#formacionesMenu').click(function(){
    clickMenu($('#formaciones'));
});

$('#talleresMenu').click(function(){
    clickMenu($('#talleres'));
});

$('#contactoMenu').click(function(){
    clickMenu($('#contacto'));
});








function showImgHome(_div, newTime){
    $(_div).css('display', 'block');
    TweenMax.to(_div, newTime, {alpha:1});
}

function hideImgHome(_div, newTime){
    TweenMax.to(_div, newTime, {alpha:0, onComplete:function(){
        $(_div).css('display', 'none');
    }});
}


function hideAllHomeImg(){
    $.each(imgshome_ary, function(){
        hideImgHome($(this), 0);
    });
}


function playHomeImgs(){

    if(currImgHome<imgshome_ary.length-1){
        
        prevImgHome = currImgHome;
        currImgHome++;
    }
    else{
        prevImgHome = currImgHome;
        currImgHome = 0;
    }

    hideImgHome(imgshome_ary[prevImgHome],transImgHome);
    TweenMax.delayedCall(transImgHome, function(){
        showImgHome(imgshome_ary[currImgHome],transImgHome);
    });

    TweenMax.delayedCall(delayImgHome, playHomeImgs);
    
}













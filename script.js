$(function(){
    $(document).scroll(function(){
        var $nav=$('.nav')
        $nav.toggleClass('scrolled',$(this).scrollTop() > $nav.height());
    });
})

var manubar=document.getElementById("bar")
var items=document.getElementById("navbar")

items.style.right="-360px";

manubar.addEventListener("click",()=>{

    if(items.style.right=="-360px"){
        items.style.right="0"
    }else{
        items.style.right="-360px"
    }
})

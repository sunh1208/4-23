define( function() {
    console.log(2)
    let index=0;
    let lis=document.querySelectorAll("li");
    let sps=document.querySelector(".scroll span");
    lis.forEach((item,i)=>{
        item.onclick=function(){
            lis[index].style.color="#999";
            lis[index].querySelector("dt").style.background="#999";
            item.style.color="#f00";
            item.querySelector("dt").style.background="#f00";
            index=i;
            spSt(sps,index*70)
            // sps.style.top=`${index*70}px`
        }
    })
    function spSt(sps,news){
        let old=sps.offsetTop;
        let c=news-old;//差
        let sc=c/300;  //每秒的差值
        let time=0;     //计时器

        let ss=setInterval(function(){
            if(time>=300){
                clearInterval(ss)
            }
            time+=10;
            t=old+sc*time;
            console.log(t)
            sps.style.top=`${t}px` 
        },10)
    }
});
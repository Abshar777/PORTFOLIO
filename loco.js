var mini=document.querySelector("#minicircle");

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true

});
function loadertime(){
    var a=0;
    setInterval(function(){
        a++
        if(a<100){
            document.querySelector("#loader h1").innerHTML=a+"%";
        }
        else{
            a=100;
            document.querySelector("#loader h1").innerHTML=a+"%";
        }
    },150)
}
function loadere(){
    gsap.to("#loader",{
        delay:0.5,
        duration:1,
        y:-100+"vh",
    })
    gsap.to("#loader h1",{
        delay:0.5,
        duration:1.5,
        onStart:loadertime()
        
    })
   }  
   


var timeout;
function firstPageAnime() {
    var tl = gsap.timeline();
  
   loadere();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        delay:0.5,
        
        duration: 2,
        ease: Expo.easeInOut
        
    })
        .to(".boundelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .2

        })
        .to(".boundelemb", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1.6,
            stagger: .2

        })
    tl.from("#footer", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })

}
function circlescew() {

    var xscale = 1;
    var yscale = 1;

    var xpev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.7, 1.1, dets.clientX - xpev);
        yscale = gsap.utils.clamp(.7, 1.1, dets.clientY - yprev);

        xpev = dets.clientX;
        yprev = dets.clientY;
        circlemove(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1) `;
        }, 100)

    });
}

function circlemove(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale}) `;

    })
}
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotete = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets) {
        // imge.style.top=dets.y + "px"
      
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power1,
         duration:0.5,

        })


    });
});
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotete = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets) {
        // imge.style.top=dets.y + "px"
        mini.style.backgroundColor = "white";
      
        gsap.to(elem.querySelector(".linkcircle"), {
            opacity: 0,
            ease: Power1,
         duration:0.5,

        })


    });
});
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotete = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function (dets) {
        // imge.style.top=dets.y + "px"
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotete;
        rotete = dets.clientX;
        
        mini.style.backgroundColor = "transparent";
        gsap.to(elem.querySelector(".linkcircle"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX-35+"px",
            rotate: gsap.utils.clamp(-20,20,diffrot*0.5)
           

        })


    });
});
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotete = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function (dets) {
        // imge.style.top=dets.y + "px"
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotete;
        rotete = dets.clientX;
      
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,//-225+"px",
            rotate: gsap.utils.clamp(-20,20,diffrot*0.5)


        })


    });
});
circlemove();
firstPageAnime();
circlescew();

const n=5
for(var i=0;i<n;i++){
    
    
}



 function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
})

 }
 locomotive();
 
 var loader = gsap.timeline()
 loader.from(".loader h3",{
  x:40,
  stagger:0.2,
  opacity:0,
  duration:1,
 })
 
 loader.to(".loader h3",{
  x:-40,
  stagger:0.2,
  opacity:0,
  duration:1,
 })

 loader.to(".loader",{
  display:"none",
 })
function crsr1(){
  var page1Content = document.querySelector(".page1-content");
  var crsr = document.querySelector(".cursor");
 
   page1Content.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
     x:dets.x,
     y:dets.y,
    })
 
  })
  page1Content.addEventListener("mouseenter",function(){
     gsap.to(crsr,{
         scale:1,
         opacity:1,
     })
  })
  page1Content.addEventListener("mouseleave",function(){
     gsap.to(crsr,{
         scale:0,
         opacity:0,
     })
  })
}
crsr1();

loader.from(".page1-content nav",{
  scale:1,
  opacity:0,
  y:30,
  stagger:0.4,
  duration:1,
})

loader.from(".page1-content h1",{
  scale:1,
  opacity:0,
  y:100,
  stagger:0.4,
  duration:1,
})

gsap.from(".text h3",{
  y:"100%",
  stagger:0.2,
  opacity:0,
  duration:1,
  delay:3,
  scrollTrigger:{
    trigger:".page2",
    scroller:"#main",
    start:"top 110%",
    end: "top 113%",
    // markers:true,
    scrub:2
  }
})

gsap.from(".txt-top h5",{
  y:"100%",
  opacity:0,
  duration:1,
  delay:3,
  scrollTrigger:{
    trigger:".page3",
    scroller:"#main",
    start:"top 110%",
    end: "top 113%",
    // markers:true,
    scrub:2
  }
})

gsap.from(".pg3-txt h3",{
  y:"100%",
  stagger:0.2,
  opacity:0,
  duration:1,
  delay:3,
  scrollTrigger:{
    trigger:".page3",
    scroller:"#main",
    start:"top 110%",
    end: "top 113%",
    // markers:true,
    scrub:2
  }
})

gsap.from(".pg4-txt h3",{
  y:"100%",
  stagger:0.2,
  opacity:0,
  duration:1,
  delay:3,
  scrollTrigger:{
    trigger:".page4",
    scroller:"#main",
    start:"top 110%",
    end: "top 113%",
    // markers:true,
    scrub:2
  }
})

gsap.from(".pg5-txt h3",{
  y:"100%",
  stagger:0.2,
  opacity:0,
  duration:1,
  delay:3,
  scrollTrigger:{
    trigger:".page5",
    scroller:"#main",
    start:"top 110%",
    end: "top 113%",
    // markers:true,
    scrub:2
  }
})
gsap.from(".message h5",{
  y:"100%",
  opacity:0,
  duration:1,
  delay:3,
  scrollTrigger:{
    trigger:".message",
    scroller:"#main",
    start:"top 160%",
    end: "top 163%",
    // markers:true,
    scrub:2
  }
})

gsap.from(".message-heading h3",{
  y:"100%",
  opacity:0,
  duration:1,
  delay:3,
  scrollTrigger:{
    trigger:".message",
    scroller:"#main",
    start:"top 160%",
    end: "top 163%",
    // markers:true,
    scrub:2
  }
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
});

gsap.from(".f-txt h1",{
  y:"100%",
  stagger:0.2,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".footer-btm",
    scroller:"#main",
    start:"top 190%",
    // end: "top 113%",
    // markers:true,
  }
})






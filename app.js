function loco_scroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco_scroll()
gsap.to("h1",{
    x:-90,
    filter: "blur(8px)",
  
 
    scrollTrigger:{
        trigger:"h1",
        scroller:".main",

        start:"top50%",
        scrub:2
    
    }
   
})
gsap.to("h2",{
    x:90,
    filter: "blur(8px)",
 
    scrollTrigger:{
        trigger:"h1",
        scroller:".main",
      
        start:"top50%",
        scrub:1
    
    }
})
gsap.from("h1",{
    y:100,
    opacity:0
})
gsap.from("h2",{
    y:100,
    opacity:0,
    delay:.3
})
gsap.to("video",{
   
 width:"90%",
    scrollTrigger:{
        trigger:"h1",
        scroller:".main",
      
        start:"top50%",
        scrub:1
    
   }})
  gsap.to(".main",{
    backgroundColor:"#fff",
    
    scrollTrigger:{
        trigger:"p",
        scroller:".main",
    
        start:"top 90%",
        end:"top 70%",
       
     
        scrub:3
    }
  })
  
gsap.from(".page2 p",{
    scale:.3,
    opacity:0,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
     
        scrub:1
    }

})
gsap.from(".page2 .page2-l",{
   x:-200,
    opacity:0,
    delay:2,
  
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
     
        scrub:1
    }

})
gsap.from(".page2 .page2-r",{
    x:200,
     opacity:0,
     delay:2,
   
     scrollTrigger:{
         trigger:".page2",
         scroller:".main",
      
         scrub:1
     }
 
 })

 

gsap.from(".h1",{
    y:200,
     opacity:0,
     duration:1,
     filter:"blur(8px)",
     
    
   
   
     scrollTrigger:{
         trigger:".page3",
         scroller:".main",
      
         start:"top 20%",
         end:"top 15%",
         scrub:2
        
         
     }
 
 })
gsap.from(".part1 video",{
    y:200,
     opacity:0,
     duration:1,
     filter:"blur(8px)",
     
    
   
   
     scrollTrigger:{
         trigger:".page3",
         scroller:".main",
       
         start:"top 10%",
         end:"top 5%",
         scrub:2
        
         
     }
 
 })
gsap.from(".part1 img",{
    y:200,
     opacity:0,
     duration:1,
     filter:"blur(8px)",
     
    
   
   
     scrollTrigger:{
         trigger:".page3",
         scroller:".main",
   
         start:"top 5%",
         end:"top 0%",
         scrub:2
        
         
     }
 
 })
gsap.from(".part2 img",{
    y:200,
     opacity:0,
     duration:1,
     filter:"blur(8px)",
     
    
   
   
     scrollTrigger:{
         trigger:".page3",
         scroller:".main",
      
         start:"top -95%",
         end:"top -90%",
         scrub:2
        
         
     }
 
 })
gsap.from(".part2 video",{
    y:200,
     opacity:0,
     duration:1,
     filter:"blur(8px)",
     
    
   
   
     scrollTrigger:{
         trigger:".page3",
         scroller:".main",
    
         start:"top -80%",
         end:"top -70%",
         scrub:2   
         
     }
 
 })
 gsap.to(".page3",{
    backgroundColor:"#0F0D0D",
    
    scrollTrigger:{
        trigger:".part2 video",
        scroller:".main",
    
        start:"bottom 101%",
        end:"top -98%",
   
       
     
        scrub:true
    }
  })


var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +20+ 20+"px"
    crsr.style.top = dets.y +20+ 20+"px"
})
var boxes = document.querySelectorAll(".BAXA")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})
var h4 = document.querySelector(".nav .two")
var purple = document.querySelector(".pur1")
console.log(h4);
h4.addEventListener("mouseenter",function(){
    purple.style.display = "block"   
    purple.style.opacity = "1"
})
h4.addEventListener("mouseleave",function(){
    purple.style.display = "none"   
    purple.style.opacity = "0"
})
var h1 = document.querySelector(".nav .one")
var pur = document.querySelector(".pur")
console.log(h1);
h1.addEventListener("mouseenter",function(){
    pur.style.display = "block"   
    pur.style.opacity = "1"
})
h1.addEventListener("mouseleave",function(){
    pur.style.display = "none"   
    pur.style.opacity = "0"
})
var h2 = document.querySelector(".nav .three")
var pur2 = document.querySelector(".pur2")
console.log(h2);
h2.addEventListener("mouseenter",function(){
    pur2.style.display = "block"   
    pur2.style.opacity = "1"
})
h2.addEventListener("mouseleave",function(){
    pur2.style.display = "none"   
    pur2.style.opacity = "0"
})
var h3 = document.querySelector(".nav .four")
var pur3 = document.querySelector(".pur3")
console.log(h3);
h3.addEventListener("mouseenter",function(){
    pur3.style.display = "block"   
    pur3.style.opacity = "1"
})
h3.addEventListener("mouseleave",function(){
    pur3.style.display = "none"   
    pur3.style.opacity = "0"
})
var h5 = document.querySelector(".nav .five")
var pur4 = document.querySelector(".pur4")
console.log(h5);
h5.addEventListener("mouseenter",function(){
    pur4.style.display = "block"   
    pur4.style.opacity = "1"
})
h5.addEventListener("mouseleave",function(){
    pur4.style.display = "none"   
    pur4.style.opacity = "0"
})




    
  
   
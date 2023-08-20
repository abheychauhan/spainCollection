
function locoscroll(){
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    scroller: '#main',
    markers: false
  });
  
  var scroll = new LocomotiveScroll( {
      el: document.querySelector( '#main' ),
      smooth: true,
      multiplier: 0.2,
      getDirection: true,
  });
  
  // Update scroll position
  scroll.on( 'scroll', ( instance ) => {
      ScrollTrigger.update();
      document.documentElement.setAttribute( 'data-scrolling', instance.direction );
  });
  
  // Scroll position for ScrollTrigger
  ScrollTrigger.scrollerProxy( '#main', {
      scrollTop( value ) {
          return arguments.length ? scroll.scrollTo( value, 0, 0 ) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector( '#main' ).style.transform ? "transform" : "fixed"
  } );
  
  
  ScrollTrigger.addEventListener( 'refresh', () => scroll.update() );
  ScrollTrigger.refresh();
  
  
}

locoscroll();

gsap

gsap.from(".c1",{
  scale:.8,
  y:-800,
  duration:2,
  opacity:.6
})
gsap.from("#i , #nav",{
  scale:.9,
  y:-200,
  duration:1.9,
  opacity:.6

})
gsap.from("#centext h2 ,#centext h1",{
  delay:.2,
  scale:.2,
  duration:2,
  opacity:0,
  transform:"rotateX(-90deg) rotateY(-0deg) rotateZ(-28deg)",
  color:"white",
  stagger:.5
})






gsap.to(".centext1",{
    y:-230,
    scrollTrigger:{
      trigger:".centext1",
      scrroller:"#main",
      start:"top 25%",
      end:"top -150%",
      scrub:true
    }
  })
  gsap.to("#navv",{
    y:-210,
    
    scrollTrigger:{
      trigger:".centext1",
      scrroller:"#main",
      start:"top 25%",
      end:"top -100%",
      scrub:1
    }
  })
  gsap.to("#ii",{
    y:-149,
    
    scrollTrigger:{
      trigger:"#page1",
      scrroller:"#main",
      start:"top 0%",
      end:"top -60%",
      scrub:true
    }
  })
  
  
  gsap.to("#vid",{
   width:"100vw",
   marginLeft:"40px",
   marginRight:"40px",

    scrollTrigger:{
      trigger:"#page1",
      scrroller:"#main",
      start:"top -50%",
      end:"top -200%",
      scrub:true,
      pin:true,
    
    }
  })
  gsap.to("#videos",{
    backgroundColor:"black",
 
     scrollTrigger:{
       trigger:"#videos",
       scrroller:"#main",
       start:"top -105%",
       end:"top -120%",
       scrub:true,
     }
   })
   gsap.to("#h1 h1",{
    y:-650,
 
     scrollTrigger:{
       trigger:"#h1",
       scrroller:"#main",
       start:"top 90%",
       end:"top 0%",
       scrub:1,
     }
   })




   gsap.to("#page3 , #page4",{
    backgroundColor:"white",
    Transition:"all ease 1s",
    scrollTrigger:{
      trigger:("#page3"),
      scroller:("#main"),
      start:("top 0%"),end:("top -1"),scrub:true
    }
   })


   gsap.to(".belem .elem ",{
    transform:"translateY(10px)",
    Transition:"all ease .2s",

    scrollTrigger:{
      trigger:("#bbox"),
      scroller:("#main"),
      start:("top 5%"),end:("top -70%"),scrub:true
    }
  })

  gsap.to(".belem #bel1 , .belem #bel3 , .belem .no , .belem .text",{
    transform:"translateY(-70px)",
    scrollTrigger:{
      trigger:("#bbox"),
      scroller:("#main"),
      start:("top 5%"),end:("top -140%"),scrub:true
    }
  })
  gsap.to(".belem",{
    transform:"translateY(-90px)",
    scrollTrigger:{
      trigger:("#bbox"),
      scroller:("#main"),
      start:("top -17%"),end:("top -205%"),
    }
  })
  gsap.to(".belem .bel",{
    height:"57vh",

    scrollTrigger:{
      trigger:("#bbox"),
      scroller:("#main"),
      start:("top -39%"),end:("top -320%"),scrub:true
    }
  })

  gsap.from("#page6 #text",{
    x:-50,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"top 60%",end:"top -60%",scrub:true
    }
  })
  gsap.to("#page6 .card",{
    x:-200,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"top 0%",end:"top -150%",scrub:true
    }
  })
  gsap.from("#footer h1",{
    y:400,
    scrollTrigger:{
      trigger:"#footer",
      scroller:"#main",
      start:"top 0%",end:"top -20%",scrub:true
    }
  })



  

function cursor(){  
  var c=document.querySelector("#cursor")
  document.addEventListener("mousemove",function(dets){
     c.style.left = dets.x+ 10+"px"
     c.style.top = dets.y+"px"
  })

}
cursor();

 



















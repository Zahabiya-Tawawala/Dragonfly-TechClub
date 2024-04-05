


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.top = "0"
}
function closemenu(){
    sidemenu.style.top = "-300px"
}
// -----------------------------navbar------------------------------
//   
// ---------------------------Page1-------------------------
function lodingAnimation(){
    gsap.from(".page1 .left-col h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stager:0.2
    })
    gsap.from(".page1 p",{
        y:90,
        opacity:0,
        delay:0.6,
        duration:0.8,
    })
    gsap.from(".page1  .get_started-btn",{
        y:80,
        opacity:0,
        delay:0.7,
        duration:0.8,
    })
    gsap.from(".page1 .contact_us-btn",{
       y:80,
       opacity:0,
       delay:0.9,
       duration:0.8 
    })
    gsap.from(".page1 .right-col img",{
        x:100,
        opacity:0,
        delay:0.6,
        duration:0.8,
        transation:0.6,
        stager:0.2
    })

}
lodingAnimation()
// ------------------------------------Purpose and Outlook-----------------------------------------
function lodingAnimationPage2(){
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from(".head-disc h1 ,.head-disc p ,.head-disc h3  ",{
        y:100,
        delay:0.4,
        opacity:0,
        scale:0.8,
       duration:0.5,
        stager:0.4,
        scrollTrigger:{
            trigger:".head-disc h1",
            
        }

    })
    gsap.from(".head-disc  .card",{
        y:100,
        opacity:0,
        scale:1,
        delay:0.3,
        duration:0.5,
        scrollTrigger:{
            trigger:".head-disc  .card",
            
        }
    })
    
  
}
lodingAnimationPage2()
// -----------------------------Communities------------------
function lodaingAnimationCommunity(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".page2",{
        y:100,
        opacity:0,
        delay:0,
        duration:0.8,
        scrollTrigger:{
            trigger:".page2",
           
        }
    })
    gsap.from(".page2 .card1",{
        x:-100,
        opacity:0,
        delay:0.6,
        duration:0.8,
        scrollTrigger:{
            trigger:".page2 .card1",
            
        }
    })
    gsap.from(".page2 .card2",{
        x:100,
        opacity:0,
        delay:0.6,
        duration:0.8,
        scrollTrigger:{
            trigger:".page2 .card1",
           
        }
    })
    gsap.from(".page2 .card3",{
        x:-100,
        opacity:0,
        delay:0.6,
        duration:0.8,
        scrollTrigger:{
            trigger:".page2 .card3",
           
        }
    })
    gsap.from(".page2 .card4",{
        x:100,
        opacity:0,
        delay:0,
        duration:0.8,
        scrollTrigger:{
            trigger:".page2 .card4",
            
        }
    })
    gsap.from(".page2 .card5",{
        x:-100,
        opacity:0,
        delay:0,
        duration:0.8,
        scrollTrigger:{
            trigger:".page2 .card5",
           
        }
    })
    gsap.from(".page2 .card6",{
        x:100,
        opacity:0,
        delay:0.6,
        duration:0.8,
        scrollTrigger:{
            trigger:".page2 .card6",
          
        }
    })
}
lodaingAnimationCommunity()
// ---------------------------Join Community------------------------
function lodaingAnimationJoinComMunity(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".join-community-container h2 , .join-community-container p, .join-community-container ul, .join-community-container button",{
        y:100,
        opacity:0,
        delay:0.4,
        duration:0.3,
        scrollTrigger:{
            trigger:".join-community-container h2",
           
           //Add 100vh to css -----** 
        }
    })

}
lodaingAnimationJoinComMunity()
//---------------------------------Page3------------------------
//-------------------------------About us----------------------------
 function lodaingAnimationAboutUs(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".about_us h2",{
        y:100,
        opacity:0,
        delay:0.4,
        duration:0.6,
        scrollTrigger:{
            trigger:".about_us h2",
            
        }
    })
    gsap.from(".about_us h4",{
        y:100,
        opacity:0,
        delay:0.4,
        duration:0.6,
        scrollTrigger:{
            trigger:".about_us h4",
            
            
        }
    })
    gsap.from(".about_us p",{
        y:100,
        opacity:0,
        delay:0.4,
        duration:0.6,
        scrollTrigger:{
            trigger:".about_us p",
            
        }
    })
}
lodaingAnimationAboutUs()

function loadingAnimationFooter(){
     gsap.registerPlugin(ScrollTrigger);
     gsap.from("footer",{
        x:-1100,
        delay:0.4,
        duration:0.4,
        scrollTrigger:{
            trigger:"footer",
            
        }
     })
}
loadingAnimationFooter()
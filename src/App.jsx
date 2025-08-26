import React, { useState } from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App(){

  let [showContent,setshowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate: 10,
      duration:2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
    .to(".vi-mask-group",{
      scale: 10,
      duration: 2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
         if(this.progress() >= 0.9){
          document.querySelector(".svg").remove();
          setshowContent(true);
          this.kill();
         }
      }
    })
  });
   
  useGSAP(() => {

    if(!showContent) return;
    
    gsap.to(".main",{ 
       scale:1,
       rotate:0,
       duration:2,
       delay:-1,
       ease:"Expo.easeInOut",  
    });

    gsap.to(".sky",{ 
       scale:1.1,
       rotate:0,
       duration:2,
       delay:-0.8,
       ease:"Expo.easeInOut",  
    });


     gsap.to(".bg",{ 
       scale:1.1,
       rotate:0,
       duration:2,
       delay:-0.8,
       ease:"Expo.easeInOut",  
    });

  gsap.to(".character",{ 
       scale:0.7,
       x:"-50%",
       rotate:0,
       bottom:"-65%",
       duration:2,
       delay:-0.8,
       ease:"Expo.easeInOut",  
    });

      gsap.to(".text",{ 
       scale:1,
       rotate:0,
       duration:2,
       delay:-0.8,
       ease:"Expo.easeInOut",  
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
     const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

     gsap.to(".main .text",{
     x: `${xMove * 0.4}%`,
     });

     gsap.to(".sky",{
     x: xMove,
     });

     gsap.to(".bg",{
     x: xMove * 1.7,
     });

    });  

  },[showContent]);

  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black"/>
            <g className="vi-mask-group">
              <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial black"              
                >
                  VI
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="./bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
          />
      </svg>
    </div>
    {showContent && (
      <div className="main w-full rotate-[-10deg] scale-[1.7]">
        <div className="landing overflow-hidden relative w-full h-screen bg-black">
          <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
            <div className="logo flex gap-7">
              <div className="lines flex flex-col gap-[3px]">
                <div className="line w-10 h-1.5 bg-white"></div>
                <div className="line w-6 h-1.5 bg-white"></div>
                <div className="line w-2 h-1.5 bg-white"></div>
              </div>
              <h3 className="text-2xl mt-[2px] leading-none text-white">Rockstar</h3>
            </div>
          </div>
          
          <div className="imagesdiv relative overflow-hidden w-full h-screen">
            <img
             className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" 
             src="./sky.png" alt="" />

            <img
             className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0  w-full h-full object-cover" 
             src="./bg.png" alt="" />

            <div className="text text-white flex flex-col gap-2 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
              <h1 className="text-[7rem] leading-none -ml-40">grand</h1>
              <h1 className="text-[7rem] leading-none -ml-20">theft</h1>
              <h1 className="text-[7rem] leading-none -ml-40">auto</h1>
            </div> 

            <img 
            className="absolute character -bottom-[150%] left-1/2 scale-[0.7] rotate-[-20deg] left-1/2 -translate-x-1/2" 
            src="./girlbg.png" alt=""/>

          </div>
          <div className="bottombar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4 items-center">
              <i className="text-3xl ri-arrow-down-line"></i>
              <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
            </div>
            <img className="absolute h-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./ps5.png" alt="" />
         
          </div>
        </div> 
        <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="cntnr flex text-white w-full h-[80%] ">
        <div className="limg relative w-1/2 h-full">
        <img className="absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
        </div>
        <div className="rg w-[30%]">
          <h1 className="text-5xl">Still Runnig</h1>
          <h1 className="text-5xl">Not Hunting</h1>
          <p className="mt-8 text-3l font-[Helvetica_Now_Display]">
           Grand Theft Auto VI (GTA 6) is Rockstar Games’ highly anticipated next entry in the open-world series, releasing in 2025 for PlayStation 5 and Xbox Series X|S. 
           The game returns to Vice City, a vibrant, neon-soaked world filled with urban areas, beaches, swamps, and countryside.
          </p>
          <p className="mt-3 text-3l font-[Helvetica_Now_Display]">
          For the first time in the franchise, GTA 6 introduces a female protagonist, Lucia, 
          alongside her male partner, bringing a fresh twist to the story. Powered by Rockstar’s updated engine, 
          the game features enhanced graphics, smarter NPCs, and immersive gameplay built around heists, chaos, and modern culture.

          </p>
          <p className="mt-5 text-3l font-[Helvetica_Now_Display]">
           Players can expect a living, breathing world with evolving weather, realistic crowds, and new ways to interact with the environment. Rockstar has hinted at ongoing updates to keep the game fresh, raising excitement as fans worldwide count down to launch.
            </p>
            <button className="bg-yellow-500 px-4 py-4 text-xl text-black mt-5">Download Now</button>
          
        </div>
        </div>
        </div>
      </div>
     )}
    </>
  );
}


export default App;
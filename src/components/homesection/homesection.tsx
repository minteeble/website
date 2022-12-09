import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faChevronDown, faDiagramProject, faHandsBubbles, faLightbulb } from "@fortawesome/free-solid-svg-icons";

import ReactPlayer from 'react-player'

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Type from "../Type";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";


const homesection = () => {

  const mainShape = useRef<HTMLDivElement>(null);
  const ringR = useRef<HTMLDivElement>(null);
  const ringL = useRef<HTMLDivElement>(null);
  const patternShape = useRef<HTMLDivElement>(null);
  const bPatternShape = useRef<HTMLDivElement>(null);
  const longShape = useRef<HTMLDivElement>(null); 
  const shortShape = useRef<HTMLDivElement>(null); 
  const bLongShape = useRef<HTMLDivElement>(null); 
  const bShortShape = useRef<HTMLDivElement>(null); 
  const cLongShape = useRef<HTMLDivElement>(null); 
  const cShortShape = useRef<HTMLDivElement>(null); 
  const lonelyShape = useRef<HTMLDivElement>(null); 
  const dLongShape = useRef<HTMLDivElement>(null); 
  const dShortShape = useRef<HTMLDivElement>(null); 

  useEffect(()=>{
    document.addEventListener("mousemove",(e)=>{
      if(window.innerWidth > 1180){
        if(mainShape.current){
          mainShape.current.style.right = `${-2+(e.clientX/1000)}rem`
        }
        if(ringR.current){
          ringR.current.style.right = `${0+(e.clientX/200)}rem`
          ringR.current.style.top = `${18+(e.clientY/200)}%`
        }
        if(ringL.current){
          ringL.current.style.left = `${0-(e.clientX/300)}rem`
        }
        if(patternShape.current){
          patternShape.current.style.left = `${0-(e.clientX/100)}rem`
        }
        if(bPatternShape.current){
          bPatternShape.current.style.right = `${0+(e.clientX/100)}rem`
        }
        if(longShape.current){
          longShape.current.style.left = `${22-(e.clientX/300)}%`
        }
        if(shortShape.current){
          shortShape.current.style.left = `${20.5-(e.clientX/200)}%`
        }
        if(bLongShape.current){
          bLongShape.current.style.left = `${45-(e.clientX/350)}%`
        }
        if(bShortShape.current){
          bShortShape.current.style.left = `${45-(e.clientX/250)}%`
        }
        if(cLongShape.current){
          cLongShape.current.style.left = `${0-(e.clientX/150)}%`
        }
        if(cShortShape.current){
          cShortShape.current.style.left = `${4-(e.clientX/350)}%`
        }
        if(lonelyShape.current){
          lonelyShape.current.style.left = `${5-(e.clientX/250)}%`
        }
        if(dLongShape.current){
          dLongShape.current.style.left = `${-5-(e.clientX/200)}%`
        }
        if(dShortShape.current){
          dShortShape.current.style.left = `${-5-(e.clientX/100)}%`
        }
      }
    })
  },[])

  return (
    <section className="section-home" >
      <div className="shapes">

        <div ref={mainShape} className="main-shape common-b">
        </div>
        <div ref={ringR} className="ring-r common-b"></div>
        <div ref={ringL} className="ring-l common-b"></div>
        <div  className="ring-shape"></div>
        <div ref={patternShape} className="pattern-shape common-b "></div>
        <div ref={bPatternShape} className="b-pattern-shape common-b "></div>

        <div ref={longShape} className="long-shape common-a common-b" >
        </div>
        <div ref={shortShape} className="common-a short-shape common-b">
        </div>
        <div ref={bLongShape} className="b-long-shape common-a common-b "></div>
        <div ref={bShortShape} className="b-short-shape common-a common-b"></div>
        <div ref={cLongShape} className="c-long-shape common-a common-b"></div>
        <div ref={cShortShape} className="c-short-shape common-a common-b"></div>
        <div ref={lonelyShape} className="lonely-shape common-a common-b"></div>
        <div ref={dLongShape} className="d-long-shape common-a common-b "></div>
        <div ref={dShortShape} className="d-short-shape common-a common-b"></div>


        <div className=" common-b animation">
          <div className="icon-animated">
            <img src="/build/images/minty.svg" />
          </div>
        </div>
        <div className=" common-b a-animation">
          <div className="a-icon-animated">
            <FontAwesomeIcon className="eth" icon={faEthereum} />
          </div>
        </div>
        <div className=" common-b b-animation">
          <div className="b-icon-animated">

          </div>
        </div>
        <div className=" common-b c-animation">
          <div className="c-icon-animated">

          </div>
        </div>
      </div>
      <div className="container" id="home-section">
        <div className="row">
          <div className="column-r width-a">
            <p className="border-radius padding span bold toggle">
              <span className="Highlighter" ><FontAwesomeIcon icon={faLightbulb} />
                Awesome</span> Landing Page
            </p>
            <p></p> <h1 className="bold">Minteeble</h1>
            <p className="Highlighter f-size bold"> <Type /> </p>
            <p className="f-size description" >Build your own awesome Web3
              applications and start exploring this new world. What are you
              waiting for?</p>
            <div className="nav">
              <form className="margin-right" action="#features"><button className="b-decoration a-decoration b-backgr-color">
                Know more  <FontAwesomeIcon icon={faChevronDown} />
              </button></form>
              {/* <form action="Portfolio#website" ><button className="b-decoration a-decoration a-backgr-color">
                Our Portfolio  <FontAwesomeIcon icon={faDiagramProject} />
              </button></form> */}
            </div>


          </div>
          <div className="column-r width-b">
            <div className="iphone14pro">

              <div className="screen">
                <div className="notch"></div>

                <img className="zb" src="/build/images/zb.webp" alt="screen-exe" />
                <img className="benjis" src="/build/images/benjis.webp" alt="screen-exe" />
                <img src="/build/images/green.webp" alt="screen-exe" />
                <img src="/build/images/crash.webp" alt="screen-exe" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default homesection;
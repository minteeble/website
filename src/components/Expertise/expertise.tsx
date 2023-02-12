import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonActionType } from "@minteeble/ui-components";
import { count } from "console";



const Expertise = () => {

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
    console.log(new Date().getTime());
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  let timer: NodeJS.Timeout;

  const counter = (
    id: string,
    start: number,
    end: number,
    duration: number
  ) => {
    let obj = document.querySelector(id),
      current = start,
      range = end > start ? end - start : start - end,
      step = duration / range < 10 ? 10 : duration / range,
      increment = Math.floor(1 + (range / 1000 >= 0 ? 40 * (range / 1000) : 0));

    timer = setInterval(() => {
      if (start < end) {
        current += increment;
      } else {
        current -= increment;
      }
      // @ts-ignore
      obj.textContent = current.toString();

      if (
        (start > end && Math.floor(current) <= end) ||
        (start < end && Math.floor(current) >= end)
      ) {
        // @ts-ignore
        obj.textContent = end.toString();

        clearInterval(timer);
      }
    }, step);
  };
  const [allowCounter, setAllowCounter] = useState(true);

  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if(scrollY + window.innerHeight >=(ref.current?.offsetTop || 0)  && allowCounter){
      counter(".dyn3",0,150,10000);
      setTimeout(()=>{
        counter(".dyn2",0,100,10000);
        setTimeout(()=>{
          counter(".dyn1",0,200,10000);

        })
      },100
      )
      setAllowCounter(false);
    }
  },[scrollY]);



  return (
    <>
     <section className="services" id="features">
          <div className="exp-container">
            <div className="exp-heading">
              <h2 className="exp-heading-text" id="services">Expertise</h2>
              <h4 className="exp-h4">Trusted by over 130 clients</h4>
              <p className="exp-text">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="exp-cards">
              <div className="exp-jobs exp-sect">
                <h4 className="sect-number">+<span ref={ref} className="dyn1"></span></h4>
                <p className="sect-text">Jobs completed</p>
                <Button text={"Get in touch"} actionType={1} url="https://wy7qp680aox.typeform.com/to/WpoqqxS5" ></Button>
              </div>
              <div className="exp-smart exp-sect">

              <h4 className="sect-number">+<span className="dyn2"></span></h4>
                <p className="sect-text">Smart contracts written</p>
                <Button text={"Request smart contract"} actionType={ButtonActionType.Anchor} url="https://wy7qp680aox.typeform.com/to/WpoqqxS5" ></Button>
                {/* <button href="https://wy7qp680aox.typeform.com/to/WpoqqxS5" className="sect-button">Request smart contract</button> */}
              </div>
              <div className="exp-req exp-sect">

              <h4 className="sect-number">+<span className="dyn3"></span></h4>
                <p className="sect-text">NFT collection launched</p>
                <Button text={"Request NFT collection"} actionType={ButtonActionType.Anchor} url="https://wy7qp680aox.typeform.com/to/WpoqqxS5" ></Button>
                {/* <button href="https://wy7qp680aox.typeform.com/to/WpoqqxS5" className="sect-button">Request NFT collection</button> */}
              </div>
            </div>
          </div>
      
      </section>
    </>
  )
}


export default Expertise;
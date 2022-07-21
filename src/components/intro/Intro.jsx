import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import { GitHub, Mail, LinkedIn } from "@material-ui/icons";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Student at Carnegie Mellon", "Data Analyst at CPI", "Avid Programmer", "EDM Enjoyer"],
    });
  }, []);

  
  return (
    <div className="intro" id="intro">
      <div className="left">
          <div className="imgcontainer"> 
            <a href="#about">
              <img src="assets/man2.png" alt=""/>
            </a>
          </div>
          <br></br>
          <div className="inline-block"> 
            <a href= "https://www.linkedin.com/in/ryan-mcgrady-599897200/" target="_blank" rel="noopener" data-toggle="tooltip" data-placement="bottom" title="linkedin.com/in/ryan-mcgrady"> <LinkedIn className="icon"/> </a> <a href="https://github.com/zeptose" target="_blank" rel="noopener" data-toggle="tooltip" data-placement="bottom" title="github.com/zeptose"> <GitHub className="icon"/></a> <a href="mailto:rmcgrady@andrew.cmu.edu" data-toggle="tooltip"
					data-placement="bottom" title="rmcgrady@andrew.cmu.edu"> <Mail className="icon"/> </a>
            
          </div>

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Ryan McGrady</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>

      </div>
      </div>
  )
}

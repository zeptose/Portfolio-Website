import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        <p> During my courses and my internships I have had to design and create many websites, projects, and dashboards using Figma, Html, CSS, JavaScript, Ruby and other design skills, here is a link to a website I helped revamp at my intenrship in Fall 2021 for <a href="https://www.mattinglysolutions.com/" target="_blank" rel="noopener"
        >Mattingly Solutions </a
    > </p>,
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/apps.png",
      title: "Apps and Games",
      desc:
        <p>Over my time as a Software Engineer, I created an app called Covid Connect that helps connect patients infected with covid with doctors, a multiplayer chess app, a balloons tower defense game and many more. Most of these projects can be found on my 
        <a href="https://github.com/zeptose" target="_blank" rel="noopener"
        > GitHub </a
      ></p>,
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Backend",
      desc:
      <p>During most of my courses I have learned various complex computer systems topics such as dynamic memory allocation, caching, proxy web servers, simulations of shells and much more. I am very interested in backend and am eager to learn more!
    </p>,
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="slider" 
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map(d => ( 
        <div className="container">
          <div className="item">
            <div className="left"> 
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
              </div>
            </div>
            <div className="right">
            <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
            </div>
          </div>
        </div>))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

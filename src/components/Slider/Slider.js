import React, { useCallback, useState, useEffect, useRef } from 'react';
import { dataSlides } from "./dataSlides";
import rightArrow from "../../assets/images/rightarrow.png";
import leftArrow from "../../assets/images/leftarrow.png";
import "./style.css";


const Slider = () => {
  const getWidth = () => window.innerWidth;

  const ref = useRef(null);
  const [sliderTranslate, setSliderTranslate] = useState(getWidth())
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (!ref.current || !ref.current.getBoundingClientRect().width) return;
    setWindowWidth(ref.current.getBoundingClientRect().width);
  }, []);

  const handleRightClick = useCallback(
    (width) => {
      setSliderTranslate(sliderTranslate - width / 2);
      ref.current.style.transform = `translateX(${-sliderTranslate}px)`;
      console.log(ref.current.style.translate);
    },
    [sliderTranslate, setSliderTranslate],
  );


  return (

    <>
      <section className="slider" >
        <div className="slider__wrapper" ref={ref}>
          {dataSlides.map(item =>
            <div className="slider__item" key={item.value}>
              <div>
                <img alt={item.value} src={item.img} />
              </div>
            </div>
          )}

        </div>
        <img src={leftArrow} alt="left"
          className="slider__control slider__control_left"
        />
        <img
          className="slider__control slider__control_right"
          src={rightArrow} alt="right"
          onClick={() => handleRightClick(windowWidth)}
        />
      </section>

    </>

  );
};

export default Slider;
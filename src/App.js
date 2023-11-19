import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { add, getDay } from "date-fns";
function App() {
  const [countDownStart, setCountDownStart] = useState({
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 41,
  });

  useEffect(() => {
    setTimeout(() => {
      setCountDownStart({ ...countDownStart, seconds: countDownStart.seconds - 1 });
    }, 1000);

    if (countDownStart.seconds === 0) {
      setCountDownStart({
        ...countDownStart,
        minutes: countDownStart.minutes - 1,
        seconds: 60,
      });
    }
    if (countDownStart.minutes === 0) {
      setCountDownStart({
        ...countDownStart,
        hours: countDownStart.hours - 1,
        minutes: 60,
      });
    }
    if (countDownStart.hours === 0) {
      setCountDownStart({
        ...countDownStart,
        days: countDownStart.days - 1,
        hours: 24,
      });
    }
  }, [countDownStart]);

  //  useEffect(()=>{
  //   setTimeout(()=>{
  //     setSeconds((countToDate.getSeconds() - today.getSeconds())-1)
  //   },1000)
  //  })
  const nd = add(new Date(), {
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 30,
  });
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(11);
  const [seconds, setSeconds] = useState(42);
 const [prevSecond,setPrevSecond] = useState(43)
  function cs() {
    setSeconds(seconds - 1);
    setPrevSecond(prevSecond-1)
  }
  

  return (
    <div className="App">
      <main className="main">
        <h1>We're launching soon</h1>
        <section className="flipClock">
          <div className="flipClockCards">
            <div className="top">{countDownStart.days}</div>
            <div className="bottom">{countDownStart.days}</div>
          </div>
          <div className="flipClockCards">
            <div className="top">{countDownStart.hours}</div>
            <div className="bottom">{countDownStart.hours}</div>
          </div>
          <div className="flipClockCards">
            <div className="top">{countDownStart.minutes}</div>
            <div className="bottom">{countDownStart.minutes}</div>
          </div>
          <div className="flipClockCards">
            {/* <div className="topUnder" onAnimationStart={() => seconds}> */}
            {/* <div key={seconds} className="top"  onAnimationEnd={cs}> */}

            <div className="topHalfFlipCard" >{seconds}</div>
            <div className="topHalfAnimatedFlipCardCover" key={prevSecond}>{prevSecond}</div>
            <div className="bottomHalfFlipCard">{seconds}</div>
            <div className="bottomHalfAnimatedFlipCardCover" onAnimationEnd={cs}  >{prevSecond}</div>
          </div>
          <div className="countDownCaption">Days</div>
          <div className="countDownCaption">Hours</div>
          <div className="countDownCaption">Minutes</div>
          <div className="countDownCaption">Seconds</div>
        </section>
      </main>

      <footer className="socials">
        <img src="images/icon-facebook.svg" alt="#" />
        <img src="images/icon-pinterest.svg" alt="#" />
        <img src="images/icon-instagram.svg" alt="#" />
      </footer>
    </div>
  );
}

export default App;

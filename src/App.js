import React, { useState } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState("8");
  const [prevdays, setPrevDays] = useState("9");
  const [hours, setHours] = useState("23");
  const [prevhours, setPrevHours] = useState("24");
  const [minutes, setMinutes] = useState("55");
  const [prevMinutes, setPrevMinutes] = useState("56");
  const [seconds, setSeconds] = useState("41");
  const [prevSecond, setPrevSecond] = useState("42");

  const [minutesAnimation, setMinutesAnimation] = useState(false);
  const [hoursAnimation, setHoursAnimation] = useState(false);
  const [daysAnimation, setDaysAnimation] = useState(false);

  function secondsHandler() {
    if (seconds === 0) {
      setMinutesAnimation(true);
      setMinutes(minutes - 1);
      setPrevMinutes(prevMinutes - 1);
      setSeconds(59);
      return setPrevSecond(0);
    }
    if (seconds === 59) {
      setSeconds(58);
      return setPrevSecond(59);
    }

    setSeconds(seconds - "1");
    setPrevSecond(prevSecond - "1");
  }
  function minutesHandler() {
    if (minutes === 0) {
      setHoursAnimation(true);
      setHours(hours - 1);
      setMinutes(59);
      return setPrevMinutes(0);
    }
    if (minutes === 59) {
      setMinutes(58);
      return setPrevMinutes(59);
    }
  }
  function hourHandler() {
    if (hours === 0) {
      setDaysAnimation(true);
      setDays(days - 1);
      setHours(59);
      return setPrevHours(0);
    }
    if (hours === 59) {
      setHours(58);
      return setPrevHours(59);
    }
  }
  function daysHandler() {
    if (days === 0) return;
  }

  return (
    <div className="App">
      <main className="main">
        <h1>We're launching soon</h1>
        <section className="flipClock">
          <div className="flipClockCards">
            <div className="topHalfFlipCard">
              <div>{days}</div>
            </div>
            <div className={`topHalfAnimatedFlipCardCover ${daysAnimation === false ? "animationNone" : ""} `} key={prevdays}>
              <div>{prevdays}</div>
            </div>
            <div className="bottomHalfFlipCard">
              <div>{prevdays}</div>
            </div>
            <div
              className={`bottomHalfAnimatedFlipCardCover ${daysAnimation === false ? "animationNone" : ""}`}
              onAnimationEnd={daysHandler}
              key={days}
            >
              <div>{days}</div>
            </div>
          </div>

          <div className="flipClockCards">
            <div className="topHalfFlipCard">
              <div>{hours}</div>
            </div>
            <div className={`topHalfAnimatedFlipCardCover ${hoursAnimation === false ? "animationNone" : ""} `} key={prevhours}>
              <div>{prevhours}</div>
            </div>
            
            <div className="bottomHalfFlipCard">
              <div>{prevhours}</div>
            </div>
            <div
              className={`bottomHalfAnimatedFlipCardCover ${hoursAnimation === false ? "animationNone" : ""}`}
              onAnimationEnd={hourHandler}
              key={hours}
            >
              <div>{hours}</div>
            </div>
          </div>

          <div className="flipClockCards">
            <div className="topHalfFlipCard">
              <div>{minutes}</div>
            </div>
            <div
              className={`topHalfAnimatedFlipCardCover ${minutesAnimation === false ? "animationNone" : ""} `}
              key={prevMinutes}
            >
              <div>{prevMinutes}</div>
            </div>
            <div className="bottomHalfFlipCard">
              <div>{prevMinutes}</div>
            </div>
            <div
              className={`bottomHalfAnimatedFlipCardCover ${minutesAnimation === false ? "animationNone" : ""}`}
              onAnimationEnd={minutesHandler}
              key={minutes}
            >
              <div>{minutes}</div>
            </div>
          </div>

          <div className="flipClockCards">
            <div className="topHalfFlipCard">
              <div>{seconds}</div>
            </div>
            <div className="topHalfAnimatedFlipCardCover red" key={prevSecond}>
              <div>{prevSecond}</div>
            </div>
            <div className="bottomHalfFlipCard">
              <div>{prevSecond}</div>
            </div>
            <div className="bottomHalfAnimatedFlipCardCover red" onAnimationEnd={secondsHandler} key={seconds}>
              <div>{seconds}</div>
            </div>
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

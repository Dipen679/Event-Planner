import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";

import headerImg from "../assets/img/party-people.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import NavBar from "../NavBar";
import Skills from "./Skills";
import Projects from "./Projects";
import Venue from "./Venue";
import {useNavigate} from "react-router-dom"
import Footer from "./Footer";


export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Birthday Party", "Engagement Party", "Official Event", "Halloween", "Kitty Party"];
  const period = 2000;

  const nav = useNavigate()
  useEffect(() => {
    const un = localStorage.getItem("un")
    if (un == null)
      nav("/")
  }, []);
  


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <>
      <NavBar />
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center flex" >
            <Col xs={12} md={6} xl={7} className="banner-text-container">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to Midaas Events</span>
                    <h1>{`Planning an Event?`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Birthday Party", "Engagement Party", "Official Event", "Kitty Party" ]'><span className="wrap">{text}</span></span></h1>
                    <p>We are an Event Planning and Scheduling platform that enables users and the event organizers to connect in order for the users to have an extra-ordinary experience. It is not easy but we achieve it by bringing together the best event planners together on a cross platform that has user-friendly UI and features for all age groups and classified allocation of different events.</p>
                    <button onClick={() => console.log('connect')
                  } ><a href="http://localhost:3000/form">
                    Let’s Connect <ArrowRightCircle size={25} /></a></button>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5} className="banner-img-container">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
      <Skills />
      <Projects />
      <Venue />
      <Footer />

    </>
  )
}
export default Hero;
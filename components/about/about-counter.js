import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import aboutImage from "../../assets/images/resources/about-counter-1-1.jpg";
import aboutHeart from "../../assets/images/shapes/about-count-heart-1-1.png";

const AboutCounter = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="about-counter pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              <p>
                <img src={heartImage} width="15" alt="" />
                Help People Now
              </p>
              <h3>
                Charity for the people <br />
                you care about.
              </h3>
            </div>
            <p className="about-counter__text">
              Lorem Ipsum is simply dummy text of the printing and <br />{" "}
              typesetting industry. Have you done google research which <br />{" "}
              works all the time.{" "}
            </p>
            <ul className="list-unstyled ul-list-one">
              <li>Nsectetur cing elit.</li>
              <li>Suspe ndisse suscipit sagittis leo.</li>
              <li>Entum estibulum dignissim posuere.</li>
            </ul>
            <div className="about-counter__count">
              <h3 className="odometer">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 8860 : 0} />
                </VisibilitySensor>
              </h3>
              <p>
                Donation campaigns <br /> are running
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              <div className="about-counter__image-content">
                <img src={aboutHeart} alt="" />
                <p>We’re here to support you every step of the way.</p>
              </div>
              <img src={aboutImage} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;

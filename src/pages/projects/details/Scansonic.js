import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import "../Projects.css";
import { style } from "glamor";
// import { Fade } from "react-reveal";

function Scansonic(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });
  // /Users/callum/Documents/coding/react-portfolio/src/assests/images/scansonic1.png

  return (
    <>
      <div className="projects-main">
        <Header theme={theme} setTheme={props.setTheme} />
        <div className="basic-projects">
          <h1 className="projects-heading-text" style={{ color: theme.text }}>
            AI Robotic Welding Robot
          </h1>
          <div className="projects-heading-div">
            <div>
              <p
                className="projects-header-detail-text subTitle"
                align="left"
                style={{ color: theme.secondaryText }}
              >
                During the summer of 2022, I had the opportunity to intern at{" "}
                <a href="https://www.scansonic.de/en/">Scansonic</a>, a company
                within the Berlin Industrial Group that develops laser
                processing and sensor systems for automated joining in modern
                manufacturing processes. While there, I worked with the Sceye
                team, which focuses on the visual processing systems of welding
                robots. My responsibilities included assisting with the training
                of a deep learning model to accurately detect weld defects in
                manufacturing environments.
              </p>

              <iframe
                src="https://www.youtube.com/embed/tI2O0CRRyto"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                width="90%"
                height="100%"
              />

              <br></br>
              <br></br>
              <p
                className="projects-header-detail-text subTitle"
                align="left"
                style={{ color: theme.secondaryText }}
              >
                To fulfill these duties, I:
              </p>
              <ul
                className="projects-header-detail-text subTitle"
                align="left"
                style={{ color: theme.secondaryText }}
              >
                <li>
                  Implemented several features for the annotation tool used to
                  tag training data (Python, TKinter)
                </li>
                <li>
                  Integrated an internal C/C++ library to significantly increase
                  the speed of data loading times
                </li>
                <li>
                  Implemented an automated test suite for the inference software
                  (Python, unittest, unittest.mock)
                </li>
                <li>
                  Researched and integrated automated coverage analysis for the
                  inference software (Python, coverage, Linux, bash)
                </li>
                <li>
                  Participated in agile software development teams using the
                  SCRUM method
                </li>
                <li>
                  Researched internal Python web server frameworks (Flask,
                  Eventlet)
                </li>
                <li>Documented requirements for the inference software</li>
                <li>Researched industrial-grade inference hardware</li>
                <li>Completed laser safety training</li>
                <li>Engaged in video data annotation for AI training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </>
  );
}

export default Scansonic;

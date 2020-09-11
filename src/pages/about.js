import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import MyProfilePicture from "images/MyProfilePicture.png";
import OpenToWork from "images/opentowork.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default () => {
  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl style={{ color: "#B9B8B8" }}>
          <div style={{ backgroundColor: "#121212", color: "#1976D2", padding: "10px 10px 10px 0", position: "-webkit-sticky", position: "sticky", top: "0", width: "100%" }}>
            <Link to="/home">
              <FontAwesomeIcon icon={["fas", "arrow-left"]} size="lg" /> &nbsp;
              <span style={{ fontSize: '22px' }}><b>back</b></span>
            </Link>
          </div>
          <br /><br />
          <img src={MyProfilePicture} style={{ width: "100%", borderRadius: '0.75rem' }} /> <br /><br />
          <span style={{ fontSize: '20px' }}>
            Hey, gorgeous human! <b>Arko</b> here. 👋 <br /> <br />
            Welcome to my online residence! Very kind of you to stop by. 🤗&nbsp;
            While design is omnipresent, I'm not. I'm currently based out of 📍 <b>Bangalore, India</b>.
            <br /><br />
            To give you an idea about the kind of design that I dabble in,
            I'm into <b>Interface</b>, <b>Experience</b> & <b>Graphic</b> design.
            If you think about it, design is what makes life, life. (P.S: I've never formally trained as
            a designer. I'm just trying to learn as much as I can from this beautiful thing called the
            internet! 😄) <br /> <br />
            Some of my major clients so far have been the following:
            a bunch of talented <b>high school kids</b> 👶, a <b>blogger</b>, my <b>heart</b> ♥️ and my <b>mind</b> 🧠.
            Yes, you read that right! 😛&nbsp; Really looking forward to add to this list. <br /><br />
            Apart from design, I write <a href="https://github.com/arko97x" style={{ textDecoration: "underline", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">code</a> too.
            <br />
            Graduated in 2019 from <a href="https://www.pes.edu/" style={{ textDecoration: "underline", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">PES University, Bangalore</a> with
            a degree in Computer Science & Engineering.
          </span> <br /><br /><br />
          <hr style={{ borderColor: "#707070" }} />
          <br /><br />
          <img src={OpenToWork} style={{ width: "100%", borderRadius: '0.75rem', border: "0.5px solid #F8F8F8" }} /> <br />
          <span style={{ fontSize: '20px' }}><a href="https://www.dropbox.com/s/5og87z89eo2unif/Sept-2020-arko-resume.pdf?dl=0" style={{ textDecoration: "underline", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">Résumé</a></span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span style={{ fontSize: '20px' }}><a href="mailto:bhattacharjee.arkoprabho@gmail.com" style={{ textDecoration: "underline", fontWeight: "bold" }}>Email</a></span>
          <br /><br /><br /><hr style={{ borderColor: "#707070" }} /><br />

          <span style={{ fontSize: '30px', fontWeight: "700", color: "#F8F8F8" }}>Currently</span><br />
          <span style={{ fontSize: '20px', fontWeight: '350' }}>Looking for design oppportunities</span><br /><br />

          <span style={{ fontSize: '30px', fontWeight: "700", color: "#F8F8F8" }}>Previously</span><br />
          <span style={{ fontSize: '14px', fontWeight: '350', color: "#63a3ff" }}>Full-time, July '19 - June '20</span><br />
          <span style={{ fontSize: '20px', fontWeight: '350' }}>Squadcast India, Software Engineer</span><br /><br />

          <span style={{ fontSize: '14px', fontWeight: '350', color: "#63a3ff" }}>Intern, Feb '19 - March '19</span><br />
          <span style={{ fontSize: '20px', fontWeight: '350' }}>Double Slit Media Tech, Designer</span><br /><br />

          <span style={{ fontSize: '14px', fontWeight: '350', color: "#63a3ff" }}>Intern, Jan '19 - March '19</span><br />
          <span style={{ fontSize: '20px', fontWeight: '350' }}>IntelliSoft, Mobile App Dev</span><br /><br />

          <hr style={{ borderColor: "#707070" }} /><br />

          <div style={{ backgroundColor: "#121212", color: "#1976D2", padding: "10px 10px 10px 0", bottom: "0", width: "100%" }}>
            <Link to="/home">
              <FontAwesomeIcon icon={["fas", "arrow-left"]} size="lg" /> &nbsp;
              <span style={{ fontSize: '22px' }}><b>back</b></span>
            </Link>
          </div>
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};
import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import MyProfilePicture from "images/MyProfilePicture.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default () => {
  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl style={{ textAlign: "justify" }}>
          <div style={{ backgroundColor: "white", padding: "10px 10px 10px 0", position: "-webkit-sticky", position: "sticky", top: "0", width: "100%" }}>
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
          <hr />
          <br /><br />
          <span style={{ fontSize: '20px' }}><a href="https://www.dropbox.com/s/5og87z89eo2unif/Sept-2020-arko-resume.pdf?dl=0" style={{ textDecoration: "underline", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">Résumé</a></span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span style={{ fontSize: '20px' }}><a href="mailto:bhattacharjee.arkoprabho@gmail.com" style={{ textDecoration: "underline", fontWeight: "bold" }}>Email</a></span>
          <br /><br /><br /><hr /><br />
          <div style={{ backgroundColor: "white", padding: "10px 10px 10px 0", bottom: "0", width: "100%" }}>
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
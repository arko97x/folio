import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import ThumbnailPortfolio from "images/thumbnail-portfolio.png";
import Folio1 from "images/folio1.png";
import Folio2 from "images/folio2.png";
import Folio3 from "images/folio3.png";
import Folio4 from "images/folio4.png";
import Folio5 from "images/folio5.png";
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
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>Portfolio Redesign</span>
                    <br /><span style={{ fontSize: '20px', fontWeight: '350' }}>Responsive Web Design</span>
                    <br /> <br />
                    <img src={ThumbnailPortfolio} style={{ width: "100%", borderRadius: '0.0rem' }} /> <br /><br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        CASE STUDY STRUCTURE
                    </span> <br />
                    <span style={{ fontSize: '20px' }}>
                        Deliverables&nbsp;<FontAwesomeIcon icon={["fa", "angle-right"]} />&nbsp;
                        Problems&nbsp;<FontAwesomeIcon icon={["fa", "angle-right"]} />&nbsp;
                        Goals&nbsp;<FontAwesomeIcon icon={["fa", "angle-right"]} />&nbsp;
                        Research&nbsp;<FontAwesomeIcon icon={["fa", "angle-right"]} />&nbsp;
                        The Redesign&nbsp;<FontAwesomeIcon icon={["fa", "angle-right"]} />&nbsp;
                        Impact
                    </span>
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} /> <br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        OVERVIEW
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        This project was to restructure and redesign my personal portfolio website. The
                        several reasons for this redesign are stated in the <b>PROBLEMS</b> section. Spent
                        about a week and a half to design and build the whole website.
                    </span>
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} />
                    <br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        DELIVERABLES
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        A responsive and performant (fast) website that precisely describes me, my work
                        and my life's story so far.
                    </span>
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} />
                    <br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        PROBLEMS
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px', textAlign: 'left' }}>
                        <li>
                            Lack of a <b>"Home"</b> section/page.
                            This forced me to use the <b>"About"</b> page as the landing page for my website.
                            There's just way too much content. It also lacks a concise two/three-liner explaining
                            what I actually do. Lack of visual hierarchy fails to pack a punch!
                        </li>
                    </span> <br />
                    <img src={Folio1} style={{ width: "100%", borderRadius: '0.75rem', border: "0.1px solid #f8f8f8" }} />
                    <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        <li>
                            Poor visibility of content in the existing layout. The use of
                            Accordions (collapsible sections) to differentiate my work into separate
                            categories reduced the visibility of content, I feel. A visitor wasn't
                            immediately able to view my work.
                            Also, the whole point of a portfolio website is to showcase a subset of the
                            work that you've done and thus restrict yourself to showcasing only your
                            best work. I should ideally showcase some of my visual design pieces on the
                            website, instead of re-directing them to IG/dribbble.
                        </li>
                    </span> <br />
                    <img src={Folio2} style={{ width: "100%", borderRadius: '0.75rem', border: "0.1px solid #f8f8f8" }} />
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} />
                    <br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        GOALS
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        <li>Enhance the visibility of content on the site.</li>
                        <li>I am trying to convey my work and general design thinking-thought process better.</li>
                        <li>I am also trying to land a design job. I want this website to be the conversation starter.</li>
                    </span>
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} /> <br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        RESEARCH
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        The research phase was really to understand how other designers had structured
                        their websites. In essence, I was trying to understand their Information Architectures
                        and hopefully find a pattern that I could replicate. Aesthetics wasn't something that I was
                        focussing on, yet.<br /> <br />
                        This phase involved quite a bit of 'stalking' on the internet, specifically, a [brilliant] curated list by <a href="https://brianlovin.com/overthought/product-design-portfolios"
                            target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} rel="noopener noreferrer">Brian Lovin</a> that
                        I found thanks to <a href="https://hvpandya.com/" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} rel="noopener noreferrer">Hardik Pandya</a>.
                        Since I'm only getting started in the field of professional design, I don't have too many actual projects to
                        showcase. As a result, the goal of this phase was also to get an idea of the kind of work (personal projects/
                        real world work) that other designers are displaying on their portfolios.
                    </span>
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} /> <br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        THE REDESIGN
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        I followed a mobile-first approach while designing this website, to ensure
                        that I was heading towards a layout that would allow me to present the most
                        relevant content, in the most apt way possible.
                    </span> <br /><br />
                    <img src={Folio3} style={{ width: "100%", borderRadius: '0.75rem', border: "0.5px solid #F8F8F8" }} />
                    <br /><br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>V1</span>
                    <br /><br />
                    <img src={Folio4} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <br /><br />
                    <span style={{ fontSize: '20px' }}>
                        I've also added a <b>"Case Study Structure"</b> at the beginning of every case study, that lists out all
                        the sections involved. This serves the purpose of a site map, if you will.
                    </span> <br /><br />
                    <img src={Folio5} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} /> <br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        IMPACT
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        The following are some of the salient features of the redesign:
                        <li>
                            All information is more structured and is presented in clearer way.
                        </li>
                        <li>
                            Enhanced visibility of content.
                        </li>
                        <li>
                            Clear distinction between Client & Personal projects.
                        </li>
                        <li>
                            More structured case studies.
                        </li>
                        <li>
                            Adding an element of (hopefully) pleasant surprise by way of a
                            deliberate interaction for all new visitors that land on my site.
                        </li>
                    </span>
                    <br /><br /><br /><hr style={{ borderColor: "#707070" }} /><br />
                    <div style={{ backgroundColor: "#121212", color: "#1976D2", padding: "10px 10px 10px 0", position: "-webkit-sticky", position: "sticky", top: "0", width: "100%" }}>
                        <Link to="/home">
                            <FontAwesomeIcon icon={["fas", "arrow-left"]} size="lg" /> &nbsp;
                            <span style={{ fontSize: '22px' }}><b>back</b></span>
                        </Link>
                    </div>
                </ContentWithPaddingXl>
            </Container>
        </AnimationRevealPage >
    );
};
import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import ThumbnailInFlo from "images/thumbnail-inflo.png";
import InFloIdeation from "images/inflo-ideation.png";
import InFloRefined from "images/inflo-refined.png";
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
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>InFlo</span>
                    <br /><span style={{ fontSize: '20px', fontWeight: '350' }}>Logo • Product Design</span>
                    <br /> <br />
                    <img src={ThumbnailInFlo} style={{ width: "100%", borderRadius: '0.0rem' }} /> <br /><br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        OVERVIEW
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        This was my first ever freelance project, that I undertook back in 2019. <br />
                        The project is a brainchild of the following wonderful folks: Sarthak Kejriwal, Udit Dey,
                        Sanidhya Bajoria & Shiv Kapoor. <br />
                        I was tasked with designing the logo, app UI and also the flow within the app.
                        I find myself unable to share the UI prototypes (yet), as the app is yet to hit
                        the App/Play Stores. However, I'll take you through the logo design process.
                    </span>
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} />
                    <br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        IDEATION & INITIAL SKETCHES
                    </span> <br /> <br />
                    <img src={InFloIdeation} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>1 - wave (indicating propagation); 2 - megaphone</span>
                    <br /><br />
                    <span style={{ fontSize: '20px' }}>
                        <b>InFlo</b> was being built to be a platform of sorts. <br />The idea was to
                        come up with a logomark that would incorporate a feel of <b>"flow
                        of information"</b>. A logomark, by definition, <i>is a symbol which
                        represents a brand, and usually does not include the name of that company</i>.
                    </span>
                    <br /><br />
                    <span style={{ fontSize: '20px' }}>
                        The first concept was too abstract and wasn't able to capture the essence
                        of <b>InFlo</b> and what it represented as a product. I was more inclined
                        towards exploring and refining the second concept. Sarthak &
                        the rest of the team were on the same page, w.r.t this.
                    </span>
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} />
                    <br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        REFINEMENT
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        In this phase, I moved the sketches over to the computer and employed the
                        services of <i>Inkscape</i>, a pretty potent tool, if you ask me.
                        <br /><br />
                        I began by digitally recreating the basic structure of the logomark;
                        used a grid to aid me in the process. Then came the brand colors.
                        And VOILA!
                    </span>
                    <br /><br />
                    <img src={InFloRefined} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <br /><br /><br /><hr style={{ borderColor: "#707070" }} /><br />
                    <div style={{ backgroundColor: "#121212", color: "#1976D2", padding: "10px 10px 10px 0", position: "-webkit-sticky", position: "sticky", top: "0", width: "100%" }}>
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
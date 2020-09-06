import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import ThumbnailChehakChirps from "images/thumbnail-chehakchirps.png";
import ChehakChirpsIdeation from "images/chehakchirps-ideation.png";
import ChehakChirpsRefined1 from "images/chehakchirps-refined-1.png";
import ChehakChirpsRefined2 from "images/chehakchirps-refined-2.png";
import ChehakChirpsRefined3 from "images/chehakchirps-refined-3.png";
import ChehakChirpsRefined4 from "images/chehakchirps-refined-4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default () => {
    return (
        <AnimationRevealPage>
            <Container>
                <ContentWithPaddingXl>
                    <div style={{ backgroundColor: "white", padding: "10px 10px 10px 0", position: "-webkit-sticky", position: "sticky", top: "0", width: "100%" }}>
                        <Link to="/folio/#/home">
                            <FontAwesomeIcon icon={["fas", "arrow-left"]} size="lg" /> &nbsp;
                            <span style={{ fontSize: '22px' }}><b>back</b></span>
                        </Link>
                    </div>
                    <br /><br />
                    <span style={{ fontSize: '35px', fontWeight: 'bold' }}>ChehakChirps</span>
                    <br /><span style={{ fontSize: '20px', fontWeight: 'lighter', }}>Logo • Branding</span>
                    <br /> <br />
                    <img src={ThumbnailChehakChirps} style={{ width: "100%", borderRadius: '0.0rem' }} /> <br /><br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        OVERVIEW
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        A while back, Chehak Nayar started a blog
                        called <a href="https://www.instagram.com/chehakchirps/"
                            style={{ textDecoration: "underline", fontWeight: "bold" }}
                            target="_blank"
                            rel="noopener noreferrer">ChehakChirps</a>.
                        In short, she envisions ChehakChirps as a one-stop for relatable content,
                        life hacks & elevating everyday life with a pinch of positivity! 🔥
                        <br />
                        I absolutely loved the name the moment I saw it. And that's when a logo
                        emerged from the labyrinth of my mind! It was dramatic. Trust me.
                        But jokes aside, here's how I arrived at it!

                    </span>
                    <br /><br />
                    <hr />
                    <br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        IDEATION & INITIAL SKETCHES
                    </span> <br /> <br />
                    <img src={ChehakChirpsIdeation} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>several concepts for both the logomark & the logotype</span>
                    <br /><br />
                    <span style={{ fontSize: '20px' }}>
                        Right from the beginning, one absolutely essential necessity was
                        that the logomark had to be a bird. The most noticeable bird-like logo
                        out there is perhaps that of Twitter. So, obviously, I had to come up
                        with a logo that didn't look like Twitter's. <br />
                    </span>
                    <br /><br />
                    <span style={{ fontSize: '20px' }}>
                        The idea was to somehow embed the 2 <b>C</b>s from ChehakChirps into the logomark.
                    </span>
                    <br /><br />
                    <hr />
                    <br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        REFINEMENT
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        In this phase, I moved the sketches over to the computer and employed the
                        services of <i>Inkscape</i>, a pretty potent tool, if you ask me.
                        <br /><br />
                        I began by digitally recreating the basic structure of the logomark. Several
                        variations of the logo were then shared with the client.
                    </span>
                    <br /><br />
                    <img src={ChehakChirpsRefined1} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <br /><br />
                    <img src={ChehakChirpsRefined2} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        Post this, I explored a few visual identity pieces. Started the process by trying to extract a pattern
                        from the logomark.
                    </span>
                    <br /><br />
                    <img src={ChehakChirpsRefined3} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <span style={{ fontSize: '14px' }}>attempting to extract a pattern from the logomark</span>
                    <br /><br />
                    <img src={ChehakChirpsRefined4} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>a pattern that can find use in branding campaigns</span>
                </ContentWithPaddingXl>
            </Container>
        </AnimationRevealPage>
    );
};
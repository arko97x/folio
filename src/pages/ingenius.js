import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import ThumbnailinGenius from "images/thumbnail-inGenius.png";
import i1 from "images/i1.png";
import i2 from "images/i2.png";
import i3 from "images/i3.png";
import i4 from "images/i4.png";
import i5 from "images/i5.png";
import i6 from "images/i6.png";
import vd4 from "images/vd4.png";
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
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>inGenius</span>
                    <br /><span style={{ fontSize: '20px', fontWeight: '350' }}>Graphic Design • Merch</span>
                    <br /> <br />
                    <img src={ThumbnailinGenius} style={{ width: "100%", borderRadius: '0.0rem' }} /> <br /><br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        OVERVIEW
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        These designs were done for an event called inGenius. inGenius is an annual,
                        24-hour hackathon hosted by PESIT, BSC (my alma mater). I was in charge of the
                        Design team (2-3 other people, really :P). We were responsible for designing posters
                        and merch (t-shirts, notepad covers, laptop stickers, bookmarks, etc.). This isn't
                        really a 'client project'. It, however, is real work that was done for real
                        people and was used as part of a real event. :P
                    </span>
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} />
                    <br /><br />
                    <img src={vd4} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>the launch poster</span>
                    <br /> <br />
                    <img src={i1} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>notepad front cover</span>
                    <br /><br />
                    <img src={i2} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>ID cards</span>
                    <br /><br />
                    <img src={i3} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>certificates</span>
                    <br /> <br />
                    <img src={i4} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>promo poster, before ticket sales started</span>
                    <br /> <br />
                    <img src={i5} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>the t-shirt (a dabbing pointer, cuz who likes a dangling pointer!?)</span>
                    <br /> <br />
                    <img src={i6} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <span style={{ fontSize: '14px' }}>the event brochure</span>
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
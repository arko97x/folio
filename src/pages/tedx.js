import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import ThumbnailTEDx from "images/thumbnail-tedx.png";
import img1 from "images/tedx2018.png";
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
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>TEDxPESITBSC 2018</span>
                    <br /><span style={{ fontSize: '20px', fontWeight: '350' }}>Graphic Design • Merch</span>
                    <br /> <br />
                    <img src={ThumbnailTEDx} style={{ width: "100%", borderRadius: '0.0rem' }} /> <br /><br />
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>
                        OVERVIEW
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        These designs were done for an event called TEDxPESITBSC. TEDxPESITBSC is an annual,
                        TEDx event hosted by PESIT, BSC (my alma mater). I was the in charge of the
                        Design team (2-3 other people, really :P). We were responsible for designing posters
                        and merch (t-shirts, notepad covers, laptop stickers, bookmarks, etc.).
                    </span>
                    <br /> <br />
                    <img src={img1} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    {/* <span style={{ fontSize: '14px' }}>a pattern that can find use in branding campaigns</span> */}
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
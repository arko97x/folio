import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import VD1 from "images/dv1.png";
import VD2 from "images/dv2.png";
import VD3 from "images/dv3.png";
import VD4 from "images/dv4.png";
import VD5 from "images/dv5.png";
import VD6 from "images/dv6.png";
import VD7 from "images/dv7.png";
import VD8 from "images/dv8.png";
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
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>Visual Design Pieces</span>
                    <br /><span style={{ fontSize: '20px', fontWeight: '350', }}>Graphic Design • Illustrations</span>
                    <br /> <br />
                    <img src={VD8} style={{ width: "100%", borderRadius: '0.75rem' }} /> <br /><br />
                    <img src={VD1} style={{ width: "100%", borderRadius: '0.75rem' }} /> <br /><br />
                    <img src={VD2} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} /> <br /><br />
                    <img src={VD3} style={{ width: "100%", borderRadius: '0.75rem' }} /> <br /><br />
                    <img src={VD4} style={{ width: "100%", borderRadius: '0.75rem' }} /> <br /><br />
                    <img src={VD5} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} /> <br /><br />
                    <img src={VD6} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} /> <br /><br />
                    <img src={VD7} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
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
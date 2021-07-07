import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import VD1 from "images/vd1.png";
import VD2 from "images/vd2.png";
import VD3 from "images/vd3.png";
import VD4 from "images/vd4.png";
import VD5 from "images/vd5.png";
import VD6 from "images/vd6.png";
import VD7 from "images/vd7.png";
import VD8 from "images/vd8.png";
import VD9 from "images/vd9.png";
import VD10 from "images/vd10.png";
import VD11 from "images/vd11.png";
import VD12 from "images/vd12.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                    <img src={VD8} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Thinking out loud
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            The beauty of a beautiful thought -<br />
                            a lifetime of joy;<br />
                            and when to another mind this idea is taught,<br />
                            a flurry of imagination it can help deploy.<br /><br />
                            Initially designed as a poster, this piece can find use on a tshirt or even a book cover as well.
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD9} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Shriek Kebab
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            Not your usual Seekh Kebab! 😝<br />
                            While this felt like a cute illustration for a tshirt, it is dynamic enough to be used as a fun laptop
                            sticker too!
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD10} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Chheenk Kebab
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            Another one in the Kebab series! 🤪<br />
                            While this too felt like a cute illustration for a tshirt, it is dynamic enough to be used as a fun laptop
                            sticker too!
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD1} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Compassion
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            We are like a garden of flowers. A garden that requires to be watered with compassion; and over time, it will bloom into a gorgeous, colourful spectacle.
                            <br />Compassion counts; at all levels!<br /><br />
                            Can be used on several print media.
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD11} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Bugs Lightyear
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            This one's for the devs! 💻<br />
                            Can work well as a tshirt graphic and also as a laptop sticker.
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD12} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Wallpaper
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            This was an attempt (more like 24 attempts 🥵 ) to design a 3D-ish wallpaper! It's basically a bunch of shelves for the apps on your home screen.
                            <br /><br />
                            P.S: the plant that you see photobombing, was purchased for that exact same reason! 😂
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD2} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Hoap (Packaging Design)
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            This piece was conceptualised in response to a Weekly Design prompt on Dribbble.
                            The task was to design a label for a fictional brand of soap.
                            While this label has been made for a bar of soap, it could very well be used for a liquid hand-wash too.
                            <br /><br />
                            I chose to call this fictional brand of soap 'hoap' (as in, soap + hope 😛). <br />
                            In these dire times of COVID-19, hope (along w/ social distancing and washing hands and all of that) is of paramount importance. I wanted the branding to instill a sense of confidence and love; hence the color pink. <br />
                            Pink represents compassion, nurturing and love, all of which are essential elements to generate a sense of hope.
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD3} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Folder Ali
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            Meet Folder Ali, a fictional character (and a fictional mobile app of the same name) that helps create and password-protect private folders! <br /><br />
                            But really, who is he, you ask? <br />
                            The protector of Folders and owner of THE KEY, <br />
                            he is the one and only Folder Ali 😝 <br /><br />
                            (basically, he's Muhammad Ali, but for folders. Get it? 😂) <br /><br />
                            Very random..I know 🙈 I had first come up with this concept for a merchandise for a college event.
                            I however have changed the character's design from the previous iteration.
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD4} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            inGenius 2018
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            This was the launch poster (coming soon) for a college hackathon from back in 2018.
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD5} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Inside Out
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            This was a poster that I had designed for a TEDx event in college.
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD6} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Capt. Bottle Guard
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            Meet Capt. Bottle Guard! He sure ain't a fan of bottle gourd (a vegetable). 🙈
                            <br />This "punny" illustration was made from a very random idea that I had one evening.
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <img src={VD7} style={{ width: "100%", borderRadius: '0.75rem', border: '1px solid' }} />
                    <Accordion style={{ backgroundColor: "#121212", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontWeight: "600" }}
                        >
                            Nap-king
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ fontWeight: "100" }}
                        >
                            I'm well aware that that ain't a napkin. But you get the point, don't you? 😛
                        </AccordionDetails>
                    </Accordion> <br /><br />
                    <br /><hr style={{ borderColor: "#707070" }} /><br />
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
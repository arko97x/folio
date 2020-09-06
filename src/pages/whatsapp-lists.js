import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import ThumbnailWhatsAppLists from "images/thumbnail-whatsapp.png";
import wa1 from "images/wa1.png";
import wa2 from "images/wa2.png";
import wa3 from "images/wa3.png";
import wa4 from "images/wa4.png";
import wa5 from "images/wa5.png";
import wa6 from "images/wa6.png";
import wa7 from "images/wa7.png";
import wa8 from "images/wa8.png";
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
                    <span style={{ fontSize: '35px', fontWeight: 'bold' }}>Interactive Lists in WhatsApp</span>
                    <br /><span style={{ fontSize: '20px', fontWeight: 'lighter', }}>Product Design</span>
                    <br /> <br />
                    <img src={ThumbnailWhatsAppLists} style={{ width: "100%", borderRadius: '0.0rem' }} /> <br /><br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        CASE STUDY STRUCTURE
                    </span> <br />
                    <span style={{ fontSize: '20px' }}>
                        Problems&nbsp;<FontAwesomeIcon icon={["fa", "angle-right"]} />&nbsp;
                        Goals&nbsp;<FontAwesomeIcon icon={["fa", "angle-right"]} />&nbsp;
                        Research&nbsp;<FontAwesomeIcon icon={["fa", "angle-right"]} />&nbsp;
                        Prototyping&nbsp;<FontAwesomeIcon icon={["fa", "angle-right"]} />&nbsp;
                        Impact
                    </span>
                    <br /><br />
                    <hr /> <br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        OVERVIEW
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        On Jan 17, 2019, I had posted my first ever design article. As a regular user of
                        WhatsApp, I attempted to work on an unsolicited feature addition to their
                        Android app. The exercise here was to explore a feature that could add versatility to WhatsApp and
                        thus cater to a dynamic use case - allowing the creation and sharing
                        of interactive lists.
                        <br />More than a year later and based on reviews by a friend of
                        mine, <a href="https://www.linkedin.com/in/naveenaidu/" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} rel="noopener noreferrer">@Naveen Naidu</a>,
                        I've redesigned the interface to further align the interaction with other similar
                        interactions in the app.
                    </span>
                    <br /><br />
                    <hr />
                    <br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        PROBLEMS
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        <li>
                            There's no provision for creating or sharing lists on WhatsApp. The closest you get to a
                            list is in fact a 'normal' message (like any other) that can be structured to look like a
                            list using bullet points (or some similar method).
                        </li>
                    </span> <br />
                    <img src={wa1} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        <li>
                            I'd like to use a scenario to explain why this might be problematic. <br /><br />
                            Imagine that your mother needs you to buy groceries
                            on your way back home from work. <br />
                            Take a look at the floor-plan of the store from which you'll be buying. <b>I1 through I12</b> (in
                            that order) are the items that your mother has messaged to you.
                            Notice how they’re scattered all over the place.
                        </li>
                    </span> <br />
                    <img src={wa2} style={{ width: "100%", borderRadius: '0.75rem', border: "0.5px solid" }} />
                    <br /><br />
                    <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
                        There is no way for you to strike out items that you’ve already added
                        to your shopping basket. Making a mental note can be hard when the list is long.
                        Thus, you run the risk of forgetting items.
                    </span>
                    <br /><br />
                    <span style={{ fontSize: '20px' }}>
                        <li>
                            Another scenario which is more relevant to the pandemic situation we're in right now is the following:
                            Most small shop owners have created Business accounts on WhatsApp and are
                            accepting orders through the platform. A grocery shop right opposite my
                            apartment has resorted to this method too. The inability to create a list from
                            which items can be struck off does feel like a limitation that requires fixing.
                        </li>
                        <br />
                    </span>
                    <hr />
                    <br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        GOALS
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        <li>Design an interface (& experience) that is consistent with the rest of WhatsApp.</li>
                        <li>Ensure visibility & easy accessibily of the feature.</li>
                    </span>
                    <br />
                    <hr /> <br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        RESEARCH
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        The extent of user research that I had done for this project was limited to conversations
                        with various types of users (shop/business owners, general users) of WhatsApp. The conversations
                        helped me understand if they would find such a feature useful and how they might go about
                        using it. The number of conversations though, were substantially small and in no way can it reflect
                        the needs of 'every' possible user of the platform.<br /><br />
                        The other goal of the "research" phase was to find an existing interaction in the app that resembled
                        the interaction that users would engage with, in case they were to create and share lists. This was
                        important since familiarity had to be maintained. <br />
                        From initial explorations in WhatsApp, I found that the interaction involved in <b>"sharing
                        location"</b> could closely resemble that of creating and sharing lists.
                    </span>
                    <br /> <br />
                    <img src={wa3} style={{ width: "100%", borderRadius: '0.75rem', border: "0.5px solid" }} />
                    <br /><br />
                    <hr /> <br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        PROTOTYPING
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        After conversations with several people who classify as the target audience for
                        such a feature, the ability to create and share lists seemed like it needed to be
                        a <b>"primary action"</b>. <br />
                        Hence, I’ve added an icon for the same in the message-input-bar. <b>This ensures
                        easy access.</b>
                    </span> <br /><br />
                    <img src={wa4} style={{ width: "100%", borderRadius: '0.75rem' }} /> <br /><br />
                    <span style={{ fontSize: '20px' }}>
                        Additionally, the interface also allows the user to type out a message to accompany
                        the list. This message could be an instruction or whatever it is that the user wishes
                        to convey. It is not mandatory.
                    </span> <br /><br />
                    <img src={wa5} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <br /><br />
                    <span style={{ fontSize: '20px' }}>
                        This is what it looks like, when the receiver receives the message from the sender.
                    </span> <br /><br />
                    <img src={wa6} style={{ width: "100%", borderRadius: '0.75rem' }} />
                    <br /><br />
                    <span style={{ fontSize: '20px' }}>
                        Next, I'd like to take you through the <b>"interactive"</b> part of the feature.
                    </span> <br /><br />
                    <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
                        Once the receiver strikes an item off on their side,
                        the same change reflects on the sender's side (phone), to indicate
                        to them that the receiver has already procured and added the item to their
                        cart. <br /><br />
                    </span>
                    <img src={wa7} style={{ width: "100%", borderRadius: '0.75rem' }} /> <br /><br />
                    <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
                        Additionally, if the sender had accidentally added an item to the list, they
                        can strike it off from their end and the same would reflect on the receiver's side
                        to let them know that they no longer have to procure that item. <br /><br />
                    </span>
                    <img src={wa8} style={{ width: "100%", borderRadius: '0.75rem' }} /> <br /><br />
                    <hr /> <br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        IMPACT
                    </span> <br /> <br />
                    <span style={{ fontSize: '20px' }}>
                        Since this was a self initiated project, I express my inability to present any data that
                        could speak about this idea's impact. However, if the WhatsApp team did decide to roll out
                        such a feature, they could employ the following methods to test its effect. <br /><br />
                        <li>
                            Track its <b>adoption rate</b> amongst existing users.
                        </li>
                        <li>
                            Track how many small shop owners (with WhatsApp Business accounts)
                            introduce it to their customer base as a means
                            to simplify the ordering process from their business/shop.
                        </li>
                    </span> <br /><br />
                </ContentWithPaddingXl>
            </Container>
        </AnimationRevealPage>
    );
};
import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
        props.featured &&
        css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col rounded-lg`;
const Info = tw.div`p-8 border-2 border-t-0 bg-new-CardBG text-new-PrimHeading rounded-lg rounded-t-none`;
const Description = tw.div``;

export default ({
    poems = [
        poem2(),
        poem8(),
        poem12(),
        poem11(),
        poem9(),
        poem5(),
        poem10(),
        poem7(),
        poem6(),
        poem1(),
        poem4(),
        poem3(),
    ],
}) => {
    const [visible] = useState(12);
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
                    <span style={{ fontSize: '40px', fontWeight: "700", color: "#F8F8F8" }}>Poetry</span>
                    <br /><span style={{ fontSize: '20px', fontWeight: '350', }}>By Yours Truly</span>
                    <br /> <br /><hr style={{ borderColor: "#707070" }} />
                    <Posts>
                        {poems.slice(0, visible).map((post, index) => (
                            <PostContainer key={index} featured={post.featured}>
                                <Post className="group" as="a" style={{ border: "0.1px solid #f8f8f8", overflow: "hidden" }}>
                                    {/* <div style={{ padding: "50px", fontSize: "25px", fontWeight: "lighter" }}>( ͡• ͜ʖ ͡•)<br />f</div> */}
                                    <Info><Description style={{ fontSize: "20px", fontWeight: "lighter" }}>{post.description.split('\n').map(str => <p>{str}<br /></p>)}</Description></Info>
                                </Post>
                            </PostContainer>
                        ))}
                    </Posts>
                    <br /><br />
                    <hr style={{ borderColor: "#707070" }} />
                    <br />
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

const poem1 = () => ({
    description: "Dark was the night,\nwarm was the air;\n\nthe candle tried with all its might,\nto burn away - bright and fair.\n\nThe vastness of the void\nheld in its midst a flame - \n\na ball of fire that of all tethers was devoid;\na ball of fire on which none could lay claim.",
});

const poem2 = () => ({
    description: "In the depths of the ocean,\nand high above in the sky;\n\na bundle of unfathomable emotion,\nwhich the living call Peace, am I.\n\nNo man living can have me;\nnot bound by earthly tethers,\nI am the synonym of free.",
});

const poem3 = () => ({
    description: "Be the symphony\n\nthat can make even chaos dance to its harmony.\n\n\n\n\n\n\n\n\n\n",
});

const poem4 = () => ({
    description: "\"In your poetry, I find emotion..\nemotion so unfathomably deep,\nthat it could make an entire ocean sob and weep.\"\n\nsaid the ocean to the might sky.\n\n\n\n\n",
});

const poem5 = () => ({
    description: "The stars and the sun,\nthey play hide and seek.\n\nBehind each other they run,\ntoo shy to speak.",
});

const poem6 = () => ({
    description: "If the heart had a mind,\nand the mind, a heart...\n\ncould they together,\na revolution start?\n\n\n",
});

const poem7 = () => ({
    description: "The human mind once said to Freedom:\n\n\"Grant me an audience and I will show you what it feels like, to fly.\"\n\n",
});

const poem8 = () => ({
    description: "To dusk asked dawn,\n\"Why are you to the darkness drawn?\"\n\n\"For there I was born,\namongst the stars, away from scorn.\nTo embrace the stars I long;\nand with them, I desire, to sing nature's song.\"\n",
});

const poem9 = () => ({
    description: "The stars that night\nsang darkness to sleep.\n\nThe latter did put up a fight\nonly to sob and weep.",
});

const poem10 = () => ({
    description: "The universe must be a poet - \nshedding tears of joy\ninto trickling streams;\n\nwhile in tempestuous seas\nit leaves\ntraces\nof its violent dreams.",
});

const poem11 = () => ({
    description: "My thoughts and I,\nwe talk all day long.\n\nUnder the sky we lie,\nsinging life's song.",
});

const poem12 = () => ({
    description: "The wind danced down the aisle\n to a rousing ovation from the trees.\n\nThe leaves couldn't help but smile,\nas they gently swayed in the breeze.\n\n",
});
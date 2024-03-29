import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import MyGIF from "images/GIF1.gif";
import ThumbnailInFlo from "images/thumbnail-inflo.png";
import ThumbnailChehakChirps from "images/thumbnail-chehakchirps.png";
import ThumbnailinGenius from "images/thumbnail-inGenius.png";
// import ThumbnailPortfolio from "images/thumbnail-portfolio.png";
import ThumbnailWhatsAppLists from "images/thumbnail-whatsapp.png";
import ThumbnailVisualDesigns from "images/vd8.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
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
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 bg-new-CardBG text-new-PrimHeading rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-new-PrimBody italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-new-PrimHeading`;
const Description = tw.div``;

export default ({
  client = [
    InFlo(),
    ChehakChirps(),
    inGenius()
  ],
  personal = [
    // PortfolioRedesign(),
    WhatsAppLists(),
    VisualDesign()
  ]
}) => {
  const [visible] = useState(7);
  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl style={{ color: "#F8F8F8" }}>
          <span style={{ fontSize: '40px', fontWeight: "900" }}>Hi, Arko here.</span> <br />
          <span style={{ fontSize: '25px', fontWeight: "350", color: "#B9B8B8" }}>
            Welcome to my online residence! 👋 <br />I’m a designer based out of Bangalore, India.
            I'm on a mission to elicit joy and
            I yearn to be the storm of calmness in an ocean of chaos. Currently studying <b>Human-Centered Design</b> at <b>Srishti Manipal Institute of Art, Design and Technology</b>.
          </span><br />
          <span style={{ fontSize: '25px', fontWeight: "bold", display: "inline-block" }}>
            <Link to="/about" style={{ color: "#1976D2" }}>
              More about me
              →
            </Link>
            <br />
          </span> <br /><br />
          <Image imageSrc={MyGIF} style={{ borderRadius: "7px", height: "450px" }} />
          <span style={{ fontSize: '14px', color: "#B9B8B8" }}>That's my Voxel self, chilling with a cup of coffee<br /></span>
          <br /><br />
          <hr style={{ borderColor: "#707070" }} />
          <br />
          <span style={{ fontSize: '40px', fontWeight: "700" }}>🛠 Client Projects</span>
          <br /> <br />
          <span style={{ fontSize: '25px', fontWeight: "350", color: "#B9B8B8" }}>
            In this section, I present some work that I've done for actual people. Looking forward to add to this list!
          </span>
          <Posts>
            {client.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Link to={post.url}>
                  <Post className="group" as="a" style={{ border: "0.1px solid #f8f8f8", overflow: "hidden" }}>
                    <motion.div
                      whileHover={{ scale: 1.09 }}
                      transition={{ duration: 0.3 }}
                      whileTap={{
                        scale: 0.97,
                      }}
                    >
                      <Image imageSrc={post.imageSrc} />
                      {/* <div style={{ padding: "50px", textAlign: "center", fontSize: "25px", fontWeight: "lighter" }}>( ͡• ͜ʖ ͡•)</div> */}
                    </motion.div>
                    <Info style={{ border: "none", zIndex: 1 }}>
                      {/* <Category>{post.category}</Category> */}
                      <CreationDate>{post.date}</CreationDate>
                      <Title>{post.title}</Title>
                      {post.featured && post.description && <Description>{post.description}</Description>}
                    </Info>
                  </Post>
                </Link>
              </PostContainer>
            ))}
          </Posts>
          <br /><br />
          <hr style={{ borderColor: "#707070" }} />
          <br />
          <span style={{ fontSize: '40px', fontWeight: "700" }}>👨‍🍳 Personal Projects</span>
          <br /> <br />
          <span style={{ fontSize: '25px', fontWeight: "350", color: "#B9B8B8" }}>
            Here, I present work that I've done in an attempt to exercise and exhibit my
            problem solving process, product thinking, & design skills.
            Projects include Case Studies of existing apps (where I identify areas of improvement
            for existing digital products that I use on a daily basis) and
            explorations in graphic design & illustrations.
          </span>
          <Posts>
            {personal.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Link to={post.url}>
                  <Post className="group" as="a" style={{ border: "0.1px solid #f8f8f8", overflow: "hidden" }}>
                    <motion.div
                      whileHover={{ scale: 1.09 }}
                      transition={{ duration: 0.3 }}
                      whileTap={{
                        scale: 0.97,
                      }}
                    >
                      <Image imageSrc={post.imageSrc} />
                    </motion.div>
                    <Info style={{ border: "none", zIndex: 1 }}>
                      {/* <Category>{post.category}</Category> */}
                      <CreationDate>{post.date}</CreationDate>
                      <Title>{post.title}</Title>
                      {post.featured && post.description && <Description>{post.description}</Description>}
                    </Info>
                  </Post>
                </Link>
              </PostContainer>
            ))}
          </Posts>
          <br /><br />
          <hr style={{ borderColor: "#707070" }} />
          <br />
          <span style={{ fontSize: '40px', fontWeight: "700" }}>✍️ Miscellaneous</span>
          <br /><br />
          <span style={{ fontSize: '25px', fontWeight: "350", color: "#B9B8B8" }}>
            Tagore and I could've been pen pals. I was only late by a century and a half. But that doesn't stop me from writing! 😛
            &nbsp; I've also tried my hand at playing the guitar. I'm pretty sure the guitar went<br />
            <b>"Babe, I'm gonna leave you"</b> right after! 😆
          </span>
          <br /> <br />
          <span style={{ fontSize: '25px', fontWeight: "bold", display: "inline-block" }}>
            <Link to="/poetry" style={{ color: "#1976D2" }}>
              My poetry
              →
            </Link>
            <br />
          </span>
          <br /><br />
          <hr style={{ borderColor: "#707070" }} />
          <br />
          <span style={{ fontSize: '40px', fontWeight: "700" }}>🤙 Get in touch</span>
          <br /> <br />
          <span style={{ fontSize: '25px', fontWeight: "350", color: "#B9B8B8" }}>
            While this is my official, online residence,
            elsewhere on the internet, I can be found holidaying
            on the following platforms from time to time.
          </span>
          <br /><br />
          <a href="https://twitter.com/ark_ohh" target="_blank" rel="noopener noreferrer" style={{ color: "#1976D2" }}>
            <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
          </a> &nbsp; &nbsp;
          <a href="https://www.linkedin.com/in/arkoprabho-bhattacharjee/" target="_blank" rel="noopener noreferrer" style={{ color: "#1976D2" }}>
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" />
          </a> &nbsp; &nbsp;
          <a href="https://dribbble.com/arko97x" target="_blank" rel="noopener noreferrer" style={{ color: "#1976D2" }}>
            <FontAwesomeIcon icon={["fab", "dribbble"]} size="lg" />
          </a> &nbsp; &nbsp;
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};

// const PortfolioRedesign = () => ({
//   imageSrc: ThumbnailPortfolio,
//   category: "Personal Project",
//   date: "Responsive Web Design",
//   title: "Portfolio Redesign",
//   description:
//     "Redesigning, restructuring, & rebuilding my personal portfolio website.",
//   url: "/portfolio_redesign"
// });

const InFlo = () => ({
  imageSrc: ThumbnailInFlo,
  category: "Client Project",
  date: "Logo • Product Design",
  title: "InFlo",
  description:
    "Logo exploration and Product Design for a unique networking platform for schools and school kids. Being built by high school kids!",
  url: "/inflo"
});

const ChehakChirps = () => ({
  imageSrc: ThumbnailChehakChirps,
  category: "Client Project",
  date: "Logo • Branding",
  title: "ChehakChirps",
  description:
    "A logo exploration for a personal blog by Chehak Nayar.",
  url: "/chehakchirps"
});

const inGenius = () => ({
  imageSrc: ThumbnailinGenius,
  category: "Client Project",
  date: "Graphic Design • Merch",
  title: "inGenius",
  description:
    "",
  url: "/ingenius"
});

const WhatsAppLists = () => ({
  imageSrc: ThumbnailWhatsAppLists,
  category: "Personal Project",
  date: "Product Design",
  title: "Lists in WhatsApp",
  description:
    "Interactive lists in WhatsApp.",
  url: "/whatsapp_lists"
});

const VisualDesign = () => ({
  imageSrc: ThumbnailVisualDesigns,
  category: "Personal Project",
  date: "Graphic Design • Illustrations",
  title: "Visual Design",
  description:
    "My explorations in graphic design. Includes posters, stickers, and stand-alone illustrations.",
  url: "/visual_designs"
});
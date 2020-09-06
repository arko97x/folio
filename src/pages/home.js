import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import MyGIF from "images/GIF1.gif";
import ThumbnailInFlo from "images/thumbnail-inflo.png";
import ThumbnailChehakChirps from "images/thumbnail-chehakchirps.png";
import ThumbnailPortfolio from "images/thumbnail-portfolio.png";
import ThumbnailWhatsAppLists from "images/thumbnail-whatsapp.png";
import ThumbnailVisualDesigns from "images/thumbnail-visualdesigns.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

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
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

export default ({
  client = [
    InFlo(),
    ChehakChirps()
  ],
  personal = [
    PortfolioRedesign(),
    WhatsAppLists(),
    VisualDesign()
  ]
}) => {
  const [visible] = useState(7);
  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl style={{ textAlign: "justify" }}>
          <span style={{ fontSize: '35px' }}>Hey, <b>Arko</b> here! 👋</span> <br /> <br />
          <span style={{ fontSize: '20px' }}>A <b>designer</b> on a mission to <b>elicit joy</b>. The amalgamation of <b><i>art</i></b>, <b><i>design</i></b>, <b><i>poetry</i></b>, and <b><i>technology</i></b> excites me.</span>
          <Posts>
            <PostContainer featured='true'>
              <Link to="/about">
                <Post className="group" as="a">
                  <Image imageSrc={MyGIF} />
                  <Info>
                    <Title>More about me</Title>
                    <Description>
                      Based out of 📍<b>Bangalore, India</b>, I'm currently engaged in levelling up
                    my design know-how! <br /> <b><i>I'm also on the lookout for Designer openings, so hit me up!</i></b>
                      <br /><br />
                    Until recently (June, 2020), I was a Software Engineer at <a href="http://squadcast.com/" target="_blank" rel="noopener noreferrer">Squadcast</a>.
                    <br /><br /> Click to read my story.
                  </Description>
                  </Info>
                </Post>
              </Link>
            </PostContainer>
          </Posts>
          <br /><br />
          <hr />
          <br />
          <span style={{ fontSize: '35px', fontWeight: 'bold' }}>Client Projects 🛠</span>
          <br /> <br />
          <span style={{ fontSize: '20px' }}>
            In this section, I present some work that I've done for actual people. Looking forward to add to this list!
          </span>
          <Posts>
            {client.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Link to={post.url}>
                  <Post className="group" as="a">
                    <Image imageSrc={post.imageSrc} />
                    <Info>
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
          <hr />
          <br />
          <span style={{ fontSize: '35px', fontWeight: 'bold' }}>Personal Projects 👨‍🍳</span>
          <br /> <br />
          <span style={{ fontSize: '20px' }}>
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
                  <Post className="group" as="a">
                    <Image imageSrc={post.imageSrc} />
                    <Info>
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
          <hr />
          <br />
          <span style={{ fontSize: '35px', fontWeight: 'bold' }}>Get in touch 🤙</span>
          <br /> <br />
          <span style={{ fontSize: '20px' }}>
            While this is my official, online residence,
            elsewhere on the internet, I can be found holidaying
            on the following platforms from time to time.
          </span>
          <br /><br />
          <a href="https://twitter.com/ArkoprabhoB" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
          </a> &nbsp; &nbsp;
          <a href="https://www.linkedin.com/in/arkoprabho-bhattacharjee/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" />
          </a> &nbsp; &nbsp;
          <a href="https://dribbble.com/arko97x" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "dribbble"]} size="lg" />
          </a> &nbsp; &nbsp;
          <a href="https://www.instagram.com/thepngguyy/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
          </a>
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};

const PortfolioRedesign = () => ({
  imageSrc: ThumbnailPortfolio,
  category: "Personal Project",
  date: "Responsive Web Design",
  title: "Portfolio Redesign",
  description:
    "Redesigning, restructuring, & rebuilding my personal portfolio website.",
  url: "/portfolio_redesign"
});

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
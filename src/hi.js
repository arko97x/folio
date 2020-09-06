import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GIF1 from "images/knockKnock-1.gif";
import GIF2 from "images/knockKnock-2.gif";
import GIF3 from "images/knockKnock-3.gif";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg group-hover:cursor-default`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none group-hover:cursor-default`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-secondary-500 transition duration-300 cursor-default`;

const DisplayText = ['knock knock', 'you', 'yoohooo  :D']
const ButtonText = ['WHO\'S THERE? ✊', 'YOU WHO? 👁', 'WELCOME! 👋']
const GIF = [GIF1, GIF2, GIF3]
const Count = [1, 2, 3]

class Hi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CurrentDisplay: DisplayText[0],
            CurrentButton: ButtonText[0],
            CurrentGIF: GIF[0],
            CurrentCount: Count[0]
        }
    }

    render() {
        return (
            <AnimationRevealPage disabled={true}>
                <Container>
                    <ContentWithPaddingXl>
                        <div style={{ textAlign: 'center' }}>
                            <span><b>{this.state.CurrentCount}</b> of 3</span>
                        </div>
                        <Posts>
                            <PostContainer style={{ margin: 'auto', display: 'block' }}>
                                <Post className="group" as="a">
                                    <Image imageSrc={this.state.CurrentGIF} />
                                    <Info>
                                        <Title style={{ textAlign: 'center' }}>{this.state.CurrentDisplay}</Title>
                                    </Info>
                                </Post>
                            </PostContainer>
                        </Posts>
                        <br />
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            whileTap={{
                                scale: 0.97,
                            }}
                        >
                            {this.state.CurrentButton === ButtonText[2] ? <Link to="/folio/#/home" >
                                <Button
                                    variant='outlined'
                                    style={{
                                        color: '#243E63',
                                        backgroundColor: 'white',
                                        borderColor: '#243E63',
                                        fontWeight: `700`,
                                        width: `${tw`w-full`}`,
                                        padding: '10px 90px 10px 90px',
                                        margin: 'auto',
                                        display: 'block'
                                    }}
                                    onClick={event => {
                                        this.setState({
                                            CurrentDisplay: this.state.CurrentButton === ButtonText[0] ? DisplayText[1] : DisplayText[2],
                                            CurrentButton: this.state.CurrentButton === ButtonText[0] ? ButtonText[1] : ButtonText[2],
                                            CurrentGIF: this.state.CurrentButton === ButtonText[0] ? GIF[1] : GIF[2],
                                            CurrentCount: this.state.CurrentButton === ButtonText[0] ? Count[1] : Count[2]
                                        })
                                    }}
                                >
                                    {this.state.CurrentButton}
                                </Button>
                            </Link>
                                : <Button
                                    variant='outlined'
                                    style={{
                                        color: '#243E63',
                                        backgroundColor: 'white',
                                        borderColor: '#243E63',
                                        fontWeight: `700`,
                                        width: `${tw`w-full`}`,
                                        padding: '10px 90px 10px 90px',
                                        margin: 'auto',
                                        display: 'block'
                                    }}
                                    onClick={event => {
                                        this.setState({
                                            CurrentDisplay: this.state.CurrentButton === ButtonText[0] ? DisplayText[1] : DisplayText[2],
                                            CurrentButton: this.state.CurrentButton === ButtonText[0] ? ButtonText[1] : ButtonText[2],
                                            CurrentGIF: this.state.CurrentButton === ButtonText[0] ? GIF[1] : GIF[2],
                                            CurrentCount: this.state.CurrentButton === ButtonText[0] ? Count[1] : Count[2]
                                        })
                                    }}
                                >
                                    {this.state.CurrentButton}
                                </Button>
                            }
                        </motion.div>
                        <br />
                        {this.state.CurrentButton !== ButtonText[2] && <div style={{ textAlign: 'center' }}>
                            <Link to="/folio/#/home">SKIP</Link>
                        </div>
                        }
                    </ContentWithPaddingXl>
                </Container>
            </AnimationRevealPage >
        );
    }
}

export default Hi;
import styled from "styled-components";
import { motion } from "framer-motion";

import {
    LargeBodyText,
    MonoLabel,
} from "../Styles/Typography";

const Hero = () => {
    return (
        <Wrapper>
            <Content
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <MonoLabel>
                    Front-End Web Developer · Multimedia Artist · Musician
                </MonoLabel>

                <Name>
                    Aidan
                    <br />
                    Charlton
                </Name>

                <LargeBodyText>
                    Montréal-based front-end web developer with a background in
                    digital communications, multimedia production, sound design, and
                    interactive browser-based audiovisual projects.
                </LargeBodyText>

                <Links>
                    <HeroLink
                        href="https://github.com/AidanCharlton"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </HeroLink>

                    <Divider>•</Divider>

                    <HeroLink
                        href="https://linkedin.com/in/aidancharlton"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </HeroLink>

                    <Divider>•</Divider>

                    <HeroLink href="mailto:aidan.charlton613@gmail.com">
                        Email
                    </HeroLink>
                </Links>
            </Content>
        </Wrapper>
    );
};

export default Hero;

const Wrapper = styled.section`
  min-height: 82vh;
  display: flex;
  align-items: flex-start;
  padding: 180px 80px 120px;
  @media (max-width: 768px) {
    padding: 160px 32px 120px;
  }
`;

const Content = styled(motion.div)`
  max-width: 1100px;
`;

const Name = styled.h1`
  margin: 100px 0 50px 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: clamp(82px, 14vw, 220px);
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: -0.08em;
  color: rgba(245, 245, 245, 0.96);
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 60px;
`;

const Divider = styled.span`
  color: rgba(255, 255, 255, 0.22);
`;

const HeroLink = styled.a`
  font-family: "Courier New", monospace;
  font-size: 14px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  &:hover {
    opacity: 1;
    color: white;
    transform: translateY(-1px);
  }
`;
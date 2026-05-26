import styled from "styled-components";
import { motion } from "framer-motion";

import {
    SectionHeading,
    LargeBodyText,
} from "../Styles/Typography";

const Contact = () => {
    return (
        <Wrapper>
            <Content
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >

                <SectionHeading>
                    Let’s
                    <br />
                    connect
                </SectionHeading>

                <LargeBodyText>
                    Open to opportunities involving front-end development,
                    creative technology, digital media, and interactive
                    audiovisual work.
                </LargeBodyText>

                <Links>
                    <ContactLink href="mailto:aidan.charlton613@gmail.com">
                        Email
                    </ContactLink>

                    <Divider>•</Divider>

                    <ContactLink
                        href="https://github.com/AidanCharlton"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </ContactLink>

                    <Divider>•</Divider>

                    <ContactLink
                        href="https://linkedin.com/in/aidancharlton"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </ContactLink>
                </Links>
            </Content>
        </Wrapper>
    );
};

export default Contact;

const Wrapper = styled.section`
  min-height: 72vh;
  display: flex;
  align-items: center;
  padding: 180px 80px 140px;
  @media (max-width: 768px) {
    min-height: auto;
    padding: 140px 32px 120px;
  }
`;

const Content = styled(motion.div)`
  max-width: 900px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 64px;
`;

const Divider = styled.span`
  color: rgba(255, 255, 255, 0.22);
`;

const ContactLink = styled.a`
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
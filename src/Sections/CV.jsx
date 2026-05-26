import styled from "styled-components";
import { motion } from "framer-motion";

import {
    SectionHeading,
    BodyText,
    ItemTitle,
    MonoLabel,
    SmallMonoText,
    DateLabel,
} from "../Styles/Typography";

const CV = () => {
    return (
        <Wrapper>
            <TopSection
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <SectionHeading
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Work & Background
                </SectionHeading>
            </TopSection>

            <Group>
                <MonoLabel as="h3">Work Experience</MonoLabel>

                <Item>
                    <Header>
                        <ItemTitle>Digital Communications Officer</ItemTitle>

                        <DateLabel>2023 — 2026</DateLabel>
                    </Header>

                    <SmallMonoText>
                        Health Canada · Remote
                    </SmallMonoText>

                    <BodyText>
                        Coordinated, reviewed, and provided quality assurance for
                        content published to Health Canada pages on Canada.ca,
                        ensuring accessibility, usability, clarity, and alignment
                        with Government of Canada web standards.
                    </BodyText>

                    <BodyText>
                        Collaborated with multiple teams and stakeholders to manage
                        incoming publishing requests, organize updates, and support
                        the timely delivery of public-facing communications.
                    </BodyText>
                </Item>
            </Group>
            <Group>
                <MonoLabel as="h3">Skills</MonoLabel>
                <Item>
                    <Header>
                        <ItemTitle>
                            Front-End & Multimedia Development
                        </ItemTitle>
                    </Header>

                    <SkillList>
                        <SkillTag>React</SkillTag>
                        <SkillTag>JavaScript</SkillTag>
                        <SkillTag>HTML/CSS</SkillTag>
                        <SkillTag>Node.js</SkillTag>
                        <SkillTag>MongoDB</SkillTag>
                        <SkillTag>Tone.js</SkillTag>
                        <SkillTag>Leaflet</SkillTag>
                        <SkillTag>Accessibility</SkillTag>
                        <SkillTag>Responsive Design</SkillTag>
                        <SkillTag>Git</SkillTag>
                    </SkillList>

                    <BodyText>
                        Experience building responsive web applications,
                        browser-based sound tools, and interactive audiovisual
                        systems using the MERN stack and modern JavaScript
                        frameworks.
                    </BodyText>
                </Item>

                <Item>
                    <Header>
                        <ItemTitle>
                            Audio Engineering & Sound Design
                        </ItemTitle>
                    </Header>

                    <BodyText>
                        Background in audio production, recording, live sound,
                        mixing, editing, and sound design across studio,
                        performance, and multimedia environments.
                    </BodyText>
                </Item>

            </Group>


            <Group>
                <MonoLabel as="h3">Education</MonoLabel>

                <Item>
                    <Header>
                        <ItemTitle>Full-Stack Web Development</ItemTitle>
                        <DateLabel>2022</DateLabel>
                    </Header>

                    <SmallMonoText>
                        Concordia University
                    </SmallMonoText>

                    <BodyText>
                        Full-stack web development training focused on MongoDB,
                        Express, React, and Node.js.
                    </BodyText>
                </Item>

                <Item>
                    <Header>
                        <ItemTitle>BFA Electroacoustic Studies</ItemTitle>
                        <DateLabel>2012 — 2017</DateLabel>
                    </Header>
                    <SmallMonoText>Concordia University</SmallMonoText>
                    <BodyText>
                        Studied sound recording, electroacoustic composition,
                        sound design, and experimental media practices across
                        studio and live performance environments.
                    </BodyText>
                </Item>
            </Group>
        </Wrapper>
    );
};

export default CV;

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 220px 80px;

  @media (max-width: 768px) {
    padding: 160px 32px;
  }
`;

const TopSection = styled(motion.div)`
  max-width: 920px;
  margin-bottom: 20px;
`;

const Group = styled.div`
  margin-bottom: 140px;
`;

const Item = styled.div`
  max-width: 920px;
  margin-bottom: 72px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
`;

const SkillTag = styled.div`
  padding: 12px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  font-family: "Courier New", monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.72);
  transition: all 0.25s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
`;
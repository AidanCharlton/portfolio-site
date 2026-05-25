import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { LandingWrapper, Sidebar, SidebarButton, MainContent, LandingIntro, ContentSection, SectionLabel, ProjectsContainer, LeftProject, RightProject, CVGroup, CVSectionTitle, CVItem, CVHeader, CVTitle, CVDate, CVSubTitle, CVText, SkillList, SkillTag, AboutText } from "../Styles/Styles";
import stmbus from "../Assets/busgif.gif";
import skate from "../Assets/skate.gif";


const Landing = () => {
  const [activeSection, setActiveSection] = useState("projects");

  return (
    <LandingWrapper>
      <Sidebar>
        {["projects", "cv"].map((section) => (
          <SidebarButton
            key={section}
            $active={activeSection === section}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </SidebarButton>
        ))}
      </Sidebar>

      <MainContent>
        {/* <LandingIntro>front-end web developer</LandingIntro> */}

        {activeSection === "projects" && (
          <ContentSection>
            <SectionLabel>Projects</SectionLabel>

            <ProjectsContainer>
              <LeftProject>
                <ProjectCard
                  title="Transit Noise"
                  date="2025"
                  image={stmbus}
                  url="https://stmbus.netlify.app"
                  descriptionText="Interactive audiovisual sonification of live STM bus data built with React, Leaflet, and Tone.js."
                />
              </LeftProject>

              <RightProject>
                <ProjectCard
                  title="Montreal Skate Spots"
                  date="2022"
                  image={skate}
                  url="https://www.youtube.com/watch?v=I8Z2AJtrdhs"
                  descriptionText="Full-stack web application documenting and showcasing skateboarding locations across Montreal."
                />
              </RightProject>
            </ProjectsContainer>
          </ContentSection>
        )}

        {activeSection === "cv" && (
          <ContentSection>
            <SectionLabel>CV</SectionLabel>


            <CVGroup>
              <CVSectionTitle>About</CVSectionTitle>
              <AboutText>
                Montréal-based front-end web developer with a background in
                digital communications, multimedia production, and interactive
                web-based projects.
              </AboutText>
            </CVGroup>


            <CVGroup>
              <CVSectionTitle>Experience</CVSectionTitle>

              <CVItem>
                <CVHeader>
                  <CVTitle>Digital Communications Officer</CVTitle>
                  <CVDate>2023 – 2026</CVDate>
                </CVHeader>

                <CVSubTitle>Health Canada · Remote</CVSubTitle>

                <CVText>
                  Coordinated, reviewed, and provided quality assurance for content being
                  published to Health Canada pages on Canada.ca, helping ensure information
                  was clear, accurate, accessible, and aligned with Government of Canada web
                  standards.
                </CVText>

                <CVText>
                  Worked with multiple teams and stakeholders to manage incoming publishing
                  requests, organize web updates, and support the timely delivery of digital
                  communications and public-facing content.
                </CVText>
              </CVItem>

              <CVItem>
                <CVHeader>
                  <CVTitle>Front-End & Multimedia Development</CVTitle>
                </CVHeader>

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
                  <SkillTag>Netlify</SkillTag>
                </SkillList>

                <CVText>
                  Experience building responsive front-end interfaces,
                  interactive web applications, browser-based audiovisual
                  systems, and multimedia-focused projects using modern
                  JavaScript frameworks and web technologies.
                </CVText>
              </CVItem>

              <CVItem>
                <CVHeader>
                  <CVTitle>Audio Engineering & Sound Design</CVTitle>
                </CVHeader>

                <CVText>
                  Background in audio production, audio engineering, live sound, recording,
                  mixing, editing, and sound design across music, multimedia, and digital
                  media projects.
                </CVText>
              </CVItem>
            </CVGroup>

            <CVGroup>
              <CVSectionTitle>Education</CVSectionTitle>

              <CVItem>
                <CVHeader>
                  <CVTitle>Full-Stack Web Development</CVTitle>
                  <CVDate>2022</CVDate>
                </CVHeader>

                <CVSubTitle>Concordia University</CVSubTitle>

                <CVText>
                  Full-stack web development training focused on the
                  MERN stack: MongoDB, Express, React, and Node.js.
                </CVText>
              </CVItem>

              <CVItem>
                <CVHeader>
                  <CVTitle>BFA Electroacoustic Studies</CVTitle>
                  <CVDate>2012 – 2017</CVDate>
                </CVHeader>

                <CVSubTitle>Concordia University</CVSubTitle>

                <CVText>
                  Studied sound recording, electroacoustic composition, sound design, and
                  digital audio production, with a focus on creative and experimental media
                  practices across studio and live performance environments.
                </CVText>
              </CVItem>
            </CVGroup>
          </ContentSection>
        )}
      </MainContent>
    </LandingWrapper>
  );
};

export default Landing;


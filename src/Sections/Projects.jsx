import styled from "styled-components";
import { motion } from "framer-motion";

import ProjectCard from "../Components/ProjectCard";

import { SectionHeading } from "../Styles/Typography";

import stmbus from "../Assets/bus1.png";
import skate from "../Assets/mtlspots.png";

const Projects = () => {
    return (
        <Wrapper>
            <SectionHeading
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Selected Projects
            </SectionHeading>

            <ProjectsContainer>
                <LeftProject
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <ProjectCard
                        title="Transit Noise"
                        date="2025"
                        image={stmbus}
                        url="https://stmbus.netlify.app"
                        descriptionText="Interactive audiovisual sonification of live STM bus data"
                    />
                </LeftProject>

                <RightProject
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.15 }}
                >
                    <ProjectCard
                        title="Montreal Skate Spots"
                        date="2022"
                        image={skate}
                        url="https://www.youtube.com/watch?v=I8Z2AJtrdhs"
                        descriptionText="Mapping and documentation of skateboarding locations across Montreal"
                    />
                </RightProject>
            </ProjectsContainer>
        </Wrapper>
    );
};

export default Projects;

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 180px 80px;
  @media (max-width: 768px) {
    padding: 160px 32px;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 220px;
  @media (max-width: 768px) {
    gap: 140px;
  }
`;

const LeftProject = styled(motion.div)`
  width: min(900px, 82vw);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightProject = styled(motion.div)`
  width: min(900px, 82vw);
  margin-left: auto;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

import styled from "styled-components";

const LandingWrapper = styled.section`
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    background: #ffffff;
    display: flex;
`;

const Sidebar = styled.aside`
    position: sticky;
    top: 64px;
    height: calc(100vh - 64px);
    width: 190px;
    padding: 32px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 14px;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.92);

    @media (max-width: 800px) {
        position: fixed;
        top: auto;
        bottom: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 64px;
        padding: 10px 16px;
        flex-direction: row;
        justify-content: center;
        overflow-x: auto;
        border-right: none;
        border-top: 1px solid rgba(0, 0, 0, 0.12);
    }
`;

const SidebarButton = styled.button`
    border: none;
    background: transparent;
    padding: 8px 0;

    color: ${({ $active }) =>
        $active ? "rgba(51, 92, 186, 0.95)" : "rgba(0, 0, 0, 0.45)"};

    font-family: "Courier New", monospace;
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: left;
    cursor: pointer;

    border-bottom: ${({ $active }) =>
        $active
            ? "1px solid rgba(51, 92, 186, 0.75)"
            : "1px solid transparent"};

    transition: color 0.2s ease, border-color 0.2s ease;

    &:hover {
        color: rgba(51, 92, 186, 0.9);
    }

    @media (max-width: 800px) {
        white-space: nowrap;
    }
`;

const MainContent = styled.main`
    flex: 1;
    box-sizing: border-box;
    padding: 20px 24px 120px 48px;
    display: flex;
    flex-direction: column;
    gap: 72px;

    @media (max-width: 800px) {
        padding: 20px 16px 120px 16px;
    }
`;

const LandingIntro = styled.p`
    max-width: 760px;
    margin: 0;
    color: rgba(51, 92, 186, 0.9);
    font-family: "Josefin Sans", sans-serif;
    font-size: clamp(18px, 3vw, 20px);
    line-height: 1.6;
    letter-spacing: 0.5px;
`;

const ContentSection = styled.section`
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 56px;
`;

const SectionLabel = styled.div`
    width: fit-content;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.45);
    font-family: "Courier New", monospace;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

const ProjectsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    `;

const LeftProject = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-start;
    transform: translateX(80px);

    @media (max-width: 900px) {
        width: 100%;
        transform: translateX(0);
    }
`;

const RightProject = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-end;
    transform: translateX(-80px);
        @media (max-width: 900px) {
            width: 100%;
            transform: translateX(0);
    }
`;

const CVGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;

const CVSectionTitle = styled.h2`
    margin: 0;
    color: rgba(0, 0, 0, 0.88);
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.5px;
`;

const CVItem = styled.article`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const CVHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    @media (max-width: 650px) {
        flex-direction: column;
        gap: 4px;
    }
`;

const CVTitle = styled.h3`
  margin: 0;
  color: rgba(0, 0, 0, 0.88);
  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  line-height: 1.2;
`;

const CVDate = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.45);
  font-family: "Courier New", monospace;
  font-size: 13px;
  line-height: 1.5;
  white-space: nowrap;
`;

const CVSubTitle = styled.p`
  margin: 0;
  color: rgba(51, 92, 186, 0.85);
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
  line-height: 1.5;
`;

const CVText = styled.p`
  max-width: 760px;
  margin: 0;
  color: rgba(0, 0, 0, 0.75);
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
  line-height: 1.8;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.div`
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.72);
  font-family: "Courier New", monospace;
  font-size: 12px;
  letter-spacing: 0.5px;
`;

const AboutText = styled.p`
  max-width: 760px;
  margin: 0;
  color: rgba(0, 0, 0, 0.82);
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
  line-height: 1.9;
`;


export {
    LandingWrapper, Sidebar, SidebarButton, MainContent, LandingIntro, ContentSection, SectionLabel, ProjectsContainer, LeftProject, RightProject, CVGroup, CVSectionTitle, CVItem, CVHeader, CVTitle, CVDate, CVSubTitle, CVText, SkillList, SkillTag, AboutText

};







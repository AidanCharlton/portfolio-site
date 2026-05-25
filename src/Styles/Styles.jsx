import styled from "styled-components";

/* Layout */

const LandingWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
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

const ContentSection = styled.section`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

/* Sidebar */

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
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
  border-bottom: ${({ $active }) =>
    $active ? "1px solid rgba(51, 92, 186, 0.75)" : "1px solid transparent"};
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: rgba(51, 92, 186, 0.9);
  }

  @media (max-width: 800px) {
    white-space: nowrap;
  }
`;

/* Typography */

const SectionLabel = styled.div`
  width: fit-content;
  padding-bottom: 6px;
  color: rgba(0, 0, 0, 0.55);
  font-family: "Courier New", monospace;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
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

const IntroText = styled.p`
  max-width: 760px;
  margin: 8px 0 0 0;
  color: rgba(0, 0, 0, 0.78);
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.85;
`;

const AboutText = styled.p`
  max-width: 760px;
  margin: 0;
  color: rgba(0, 0, 0, 0.82);
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
  line-height: 1.9;
`;

/* Projects */

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

/* CV Header */

const CVTopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 8px;
`;

const CVName = styled.h1`
  margin: 0;
  color: rgba(0, 0, 0, 0.88);
  font-family: "Josefin Sans", sans-serif;
  font-size: clamp(42px, 7vw, 72px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.5px;
`;

const CVContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  color: rgba(0, 0, 0, 0.58);
  font-family: "Courier New", monospace;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.7;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

const CVContactItem = styled.span`
  white-space: nowrap;
`;

const CVContactDivider = styled.span`
  color: rgba(0, 0, 0, 0.4);
`;

const CVContactLink = styled.a`
  color: rgba(51, 92, 186, 0.92);
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: rgba(51, 92, 186, 1);
    border-bottom: 1px solid rgba(51, 92, 186, 0.7);
  }
`;

/* CV Content */

const CVGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const CVSectionTitle = styled.h2`
  margin: 0;
  color: rgba(0, 0, 0, 0.88);
  font-family: "Josefin Sans", sans-serif;
  font-size: 36px;
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
  color: rgba(0, 0, 0, 0.62);
  font-family: "Courier New", monospace;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.4px;
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
  color: rgba(0, 0, 0, 0.78);
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.85;
`;

/*  Skills */

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.div`
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.82);
  font-family: "Courier New", monospace;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
`;

/* =========================
   Exports
========================= */

export {
  IntroText,
  LandingWrapper,
  Sidebar,
  SidebarButton,
  MainContent,
  LandingIntro,
  ContentSection,
  SectionLabel,
  ProjectsContainer,
  LeftProject,
  RightProject,
  CVGroup,
  CVSectionTitle,
  CVItem,
  CVHeader,
  CVTitle,
  CVDate,
  CVSubTitle,
  CVText,
  SkillList,
  SkillTag,
  AboutText,
  CVTopSection,
  CVName,
  CVContactRow,
  CVContactItem,
  CVContactDivider,
  CVContactLink,
};
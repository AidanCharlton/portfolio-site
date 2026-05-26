import styled from "styled-components";

const ProjectCard = ({ image, title, date, descriptionText, url }) => {
  return (
    <Card>
      <ImageLink href={url} target="_blank" rel="noopener noreferrer">
        <ImageContainer>
          {image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <PlaceholderText>Project Screenshot</PlaceholderText>
          )}
        </ImageContainer>
      </ImageLink>

      <TitleGroup>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDate>{date}</ProjectDate>
      </TitleGroup>

      <ProjectContent>
        <TextColumn>{descriptionText}</TextColumn>
      </ProjectContent>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const ImageLink = styled.a`
  text-decoration: none;
  display: block;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  box-shadow:
    0 30px 90px rgba(0, 0, 0, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.03);

  margin-bottom: 10px;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  &:hover {
    transform: translateY(-8px) scale(1.01);
    border-color: rgba(255, 255, 255, 0.18);
    box-shadow:
      0 40px 120px rgba(0, 0, 0, 0.5),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  filter: saturate(0.85) contrast(1.05);
  transition:
    transform 0.45s ease,
    filter 0.45s ease;

  ${ImageContainer}:hover & {
    transform: scale(1.035);
    filter: saturate(1) contrast(1.08);
  }
`;

const PlaceholderText = styled.p`
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.45);
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProjectTitle = styled.h2`
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: clamp(26px, 4vw, 48px);
  font-weight: 500;
  letter-spacing: -0.03em;
  color: rgba(245, 245, 245, 0.96);
`;

const ProjectDate = styled.p`
  margin: 0;
  font-family: "Courier New", monospace;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.42);
`;

const ProjectContent = styled.div`
  width: 100%;
  max-width: 720px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`;

const TextColumn = styled.p`
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: clamp(16px, 1.4vw, 20px);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.68);
`;

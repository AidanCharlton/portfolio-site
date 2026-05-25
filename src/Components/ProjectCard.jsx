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
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0px;
  @media (max-width: 900px) {
    width: 70%;
  }
`;

const ImageLink = styled.a`
  text-decoration: none;
  display: block;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 3.5 / 2;
  background: rgba(220, 225, 235, 0.7);
  border: 1px solid rgba(51, 92, 186, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 10px 10px 0px 1px rgba(51, 92, 186, 0.9);
  margin-bottom: 24px;
  transition: all 0.2s ease;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 14px 14px 0px 1px rgba(51, 92, 186, 0.9);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const PlaceholderText = styled.p`
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.45);
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProjectTitle = styled.h2`
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 600;
  color: rgba(51, 92, 186, 0.95);
`;

const ProjectDate = styled.p`
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(51, 92, 186, 0.6);
`;

const ProjectContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextColumn = styled.p`
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(20, 20, 20, 0.82);
`;

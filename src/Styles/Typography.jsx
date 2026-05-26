import styled from "styled-components";
import { motion } from "framer-motion";

const SectionHeading = styled(motion.h2)`
  margin: 0 0 100px 0;

  font-family: "Josefin Sans", sans-serif;

  font-size: clamp(56px, 10vw, 120px);

  font-weight: 500;

  letter-spacing: -0.05em;

  line-height: 0.92;

  color: rgba(245, 245, 245, 0.96);

  @media (max-width: 768px) {
    margin-bottom: 72px;

    font-size: clamp(42px, 16vw, 72px);

    line-height: 0.95;
  }
`;

const LargeBodyText = styled.p`
  margin: 0;

  font-family: "Josefin Sans", sans-serif;

  font-size: clamp(22px, 2vw, 34px);

  font-weight: 400;

  line-height: 1.5;

  letter-spacing: -0.02em;

  color: rgba(255, 255, 255, 0.72);

  @media (max-width: 768px) {
    font-size: 20px;

    line-height: 1.6;
  }
`;

const BodyText = styled.p`
  margin: 0 0 14px 0;

  font-family: "Josefin Sans", sans-serif;

  font-size: clamp(17px, 1.4vw, 20px);

  font-weight: 400;

  line-height: 1.75;

  letter-spacing: -0.01em;

  color: rgba(255, 255, 255, 0.72);

  @media (max-width: 768px) {
    font-size: 16px;

    line-height: 1.7;
  }
`;

const ItemTitle = styled.h3`
  margin: 0;

  font-family: "Josefin Sans", sans-serif;

  font-size: clamp(28px, 3vw, 42px);

  font-weight: 500;

  line-height: 1.05;

  letter-spacing: -0.04em;

  color: rgba(245, 245, 245, 0.95);

  @media (max-width: 768px) {
    font-size: clamp(24px, 8vw, 34px);

    line-height: 1.1;
  }
`;

const MonoLabel = styled.p`
  margin: 0 0 32px 0;

  font-family: "Courier New", monospace;

  font-size: clamp(12px, 2vw, 14px);

  font-weight: 500;

  line-height: 1.4;

  letter-spacing: 0.14em;

  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.62);

  @media (max-width: 768px) {
    margin-bottom: 24px;

    letter-spacing: 0.1em;
  }
`;

const SmallMonoText = styled.p`
  margin: 0 0 20px 0;

  font-family: "Courier New", monospace;

  font-size: clamp(13px, 2vw, 15px);

  font-weight: 400;

  line-height: 1.5;

  color: rgba(255, 255, 255, 0.64);

  @media (max-width: 768px) {
    margin-bottom: 18px;
  }
`;

const DateLabel = styled.p`
  margin: 0;

  font-family: "Courier New", monospace;

  font-size: clamp(11px, 1.8vw, 13px);

  font-weight: 400;

  line-height: 1.4;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.56);

  @media (max-width: 768px) {
    letter-spacing: 0.08em;
  }
`;

export {
  SectionHeading,
  LargeBodyText,
  BodyText,
  ItemTitle,
  MonoLabel,
  SmallMonoText,
  DateLabel,
};
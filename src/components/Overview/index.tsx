import {
  OverviewContainer,
  ImgContainer,
  IntroductionContainer,
  IntroductionDesc,
  IntroductionTitle,
  ButtonsContainer,
} from "./styles";
import { InlineButton } from "@/components/InlineButton";
import colorMan from "../../../public/img/developer-pic-1.png";
import Image from "next/image";
import HomeButton from "../HomeButton";

const Overview = () => {
  return (
    <OverviewContainer>
      <ImgContainer>
        <Image src={colorMan} alt="Color man" />
      </ImgContainer>
      <IntroductionContainer>
        <IntroductionTitle>
          Turning Vision Into Reality With Code And Design.{" "}
        </IntroductionTitle>
        <IntroductionDesc>
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </IntroductionDesc>
        <ButtonsContainer>
          <HomeButton />
          <InlineButton href="https://t.me/Dinviz">Contact</InlineButton>
        </ButtonsContainer>
      </IntroductionContainer>
    </OverviewContainer>
  );
};

export default Overview;

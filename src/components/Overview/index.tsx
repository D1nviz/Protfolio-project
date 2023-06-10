import { FC } from "react";
import {
  OverviewContainer,
  ImgContainer,
  IntroductionContainer,
  IntroductionDesc,
  IntroductionTitle,
  ButtonsContainer,
} from "./styles";
import { InlineButton } from "@/ui/InlineButton";
import colorMan from "../../../public/img/developer-pic-1.png";
import Image from "next/image";
import HomeButton from "@/ui/HomeButton";

const Overview: FC = () => {
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
          As a skilled frontend developer, I am dedicated to turning ideas into
          innovative web applications. Explore my latest projects and articles,
          showcasing my expertise in React.js and web development.
        </IntroductionDesc>
        <ButtonsContainer>
          <HomeButton />
          <InlineButton href="https://t.me/Dinviz" target="_blank">
            Contact
          </InlineButton>
        </ButtonsContainer>
      </IntroductionContainer>
    </OverviewContainer>
  );
};

export default Overview;

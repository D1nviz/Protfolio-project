import { FC } from "react";
import { FancyButton } from "./styles";

const HomeButton: FC = () => {
  return (
    <FancyButton>
      <span className="text">Resume </span>
      <span className="top-key"></span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </FancyButton>
  );
};

export default HomeButton;

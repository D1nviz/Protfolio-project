import logo from "../../../public/Logo.svg";
import Image from "next/image";
import { LogoContainer } from "./style";

const Logo = () => {
  return (
    <LogoContainer>
      <Image src={logo} alt="logo" />
    </LogoContainer>
  );
};

export default Logo;
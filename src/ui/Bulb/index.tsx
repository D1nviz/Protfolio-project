import { FC } from "react";
import Image from "next/image";
import { BulbContainer } from "./styles";
import BulbImg from "../../../public/bulb.svg";

const Bulb: FC = () => {
  return (
    <BulbContainer>
      <Image src={BulbImg} title="Light!" alt="Bulb" width={100} height={150} />
    </BulbContainer>
  );
};
export default Bulb;

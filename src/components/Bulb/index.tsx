import Image from "next/image";
import { BulbContainer } from "./styles";
import BulbImg from "../../../public/bulb.svg";

const Bulb = () => {
  return (
    <BulbContainer>
      <Image src={BulbImg} alt="Bulb" width={150} height={150}/>
    </BulbContainer>
  );
};
export default Bulb;

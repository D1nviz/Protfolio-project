import { FC } from "react";
import Image from "next/image";
import { Card, CardInner, Circle } from "./styles";
import authorThumbnail from "../../../public/img/Author.jpg";

interface IAuthorCard {}

const AuthorCard: FC<IAuthorCard> = () => {
  return (
    <Card>
      <Circle />
      <Circle />
      <CardInner>
        <div>
          <Image src={authorThumbnail} alt="Author Thumbnail"></Image>
        </div>
      </CardInner>
    </Card>
  );
};

export default AuthorCard;

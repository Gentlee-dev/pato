import Flex from "Components/Atoms/Flex/flex";
import { Body3, Body4, Caption2 } from "Components/Atoms/Text/text";
import Point, { SmallPoint } from "Components/Atoms/point";
import { Space16, Space8 } from "Components/Atoms/space";
import { Review } from "interface";
import { Thumbnail } from "Components/Atoms/StoreThumbnail/storeThumbnail";

const Review = ({ review }: { review: Review }) => {
  const {
    content,
    createdAt,
    parkingScore,
    toiletScore,
    imagePath: imgList,
  } = review;

  const reviewTitle = (): string => {
    let sum = toiletScore + parkingScore;
    let text = "";
    if (toiletScore && parkingScore) {
      sum = sum / 2;
    }
    if (sum < 1.9) {
      text = "눈물나는 파토";
    } else if (sum < 2.9) {
      text = "평범한 파토";
    } else if (sum < 3.9) {
      text = "훌륭한 파토";
    } else {
      text = "미슐랭 파토";
    }

    return text;
  };

  const onClickImg = (url: string) => {
    console.log(1);
  };
  return (
    <Flex vertical y="items-start">
      <Flex x="justify-between">
        <Body3 title={reviewTitle()} />
        <Caption2 title={createdAt} color={7} />
      </Flex>
      <Space8 />
      <Body4 title={content} />
      <Space16 />
      {imgList.map((img, idx) => {
        return (
          <button key={idx} onClick={() => onClickImg(img)}>
            <Thumbnail src={img} w="w-63" h="h-63" r="rounded-lg" />
          </button>
        );
      })}
      <Space16 />
      <SmallPoint parking={parkingScore} toilet={toiletScore} />
    </Flex>
  );
};

export default Review;

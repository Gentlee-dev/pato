import Button from "Components/Atoms/Button/btn";
import Flex from "Components/Atoms/Flex/flex";
import HR from "Components/Atoms/Hr/hr";
import StoreThumbnail from "Components/Atoms/StoreThumbnail/storeThumbnail";
import MetaInfo, {
  HorizenMetaInfo,
} from "Components/Molecules/MetaInfo/metaInfo";
import Point from "Components/Atoms/point";
import { Space16, Space24, Space32 } from "Components/Atoms/space";
import PageTitle from "Components/Molecules/PageTitle/pageTitle";
import { Body3, Body4 } from "Components/Atoms/Text/text";
import ReviewCount from "Components/Atoms/ReviewCount/reviewCount";
import Review from "Components/Molecules/Review/review";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsmYq7E0-ZWq3ELw9Xy7Je84KNAZ5BFDYkQ&usqp=CAU";

const Store = () => {
  return (
    <div>
      <PageTitle title="가게이름" />
      <Space24 />
      <div className="h-195">
        <StoreThumbnail srcList={[img]} />
      </div>
      <Space32 />
      <Flex x="justify-between" px={16}>
        <div>
          <MetaInfo title="가게이름" location="위치" />
          <Point parking={1} toilet={1} />
        </div>
        <Button title="정보수정" circle size="md" />
      </Flex>
      <HR size={4} my={24} />
      <Flex vertical y="items-start" px={16}>
        <HorizenMetaInfo title="주차" desc="없음" />
        <Space16 />
        <HorizenMetaInfo
          title="화장실"
          desc="건물내부 / 남녀분리 / 비누 / 수건 / 청결도 상"
        />
      </Flex>
      <HR size={4} my={24} />
      <Flex vertical y="items-start" px={16}>
        <Flex x="justify-between">
          <ReviewCount count={3} />
          <Button title="리뷰 남기기" circle size="md" />
        </Flex>
        <Space24 />

        {[1, 2, 3].map((el) => {
          return (
            <>
              <Review />
              <div className=" w-full  last:opacity-0">
                <HR size={1} my={24} />
              </div>
            </>
          );
        })}
      </Flex>
    </div>
  );
};

export default Store;

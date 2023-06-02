"use client";

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
import Link from "next/link";
import { GetRTDetailApi } from "Api/apis";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsmYq7E0-ZWq3ELw9Xy7Je84KNAZ5BFDYkQ&usqp=CAU";

const Store = ({ params }: { params: { idx: number } }) => {
  const { data } = GetRTDetailApi(params.idx);
  const store = data?.data?.restaurantDetails; // 매장정보
  const imgList = data?.data?.restaurantImages; // 매장의 화장실, 주차장 이미지
  const reviewList = data?.data?.restaurantReviews; // 매장 리뷰

  if (!store || imgList === undefined || reviewList === undefined) return null;
  return (
    <div>
      <PageTitle title={store.restaurantName} />
      <Space24 />
      <div className="h-195">
        <StoreThumbnail srcList={[img]} />
      </div>
      <Space32 />
      <Flex x="justify-between" px={16}>
        <div>
          <MetaInfo title={store.restaurantName} location={store.address} />
          <Point parking={store.parkingScore} toilet={store.toiletScore} />
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
          <Link href={`/postreview/${params.idx}`}>
            <Button title="리뷰 남기기" circle size="md" />
          </Link>
        </Flex>
        <Space24 />

        {[1, 2, 3].map((el) => {
          return (
            <div key={el}>
              <Review />
              <div className="w-full  last:opacity-0">
                <HR size={1} my={24} />
              </div>
            </div>
          );
        })}
      </Flex>
    </div>
  );
};

export default Store;

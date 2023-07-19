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
import ReviewCount from "Components/Atoms/ReviewCount/reviewCount";
import Review from "Components/Molecules/Review/review";
import Link from "next/link";
import { GetRTDetailApi } from "Api/apis";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ONLY_OPTIONS } from "Util/option";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsmYq7E0-ZWq3ELw9Xy7Je84KNAZ5BFDYkQ&usqp=CAU";

const Store = ({ params }: { params: { idx: number } }) => {
  const router = useRouter();
  const { data } = GetRTDetailApi(params.idx);
  const store = data?.data?.restaurantDetails; // 매장정보
  const imgList = data?.data?.restaurantImages; // 매장의 화장실, 주차장 이미지
  const reviewList = data?.data?.restaurantReviews; // 매장 리뷰

  const [toiletTextInfo, setToiletTextInfo] = useState("");
  const [parkingTextInfo, setParkingTextInfo] = useState("");

  const removeLastSlash = (str: string) => {
    if (str.slice(-1) === "/") {
      return str.slice(0, -1);
    }
    return str;
  };

  // prettier-ignore
  const getTextInfo = () => {
    if (!store) return;
    const isParkingLot = ONLY_OPTIONS['isParkingLot'][store.isParkingLot];
    const parkingCapacity = ONLY_OPTIONS['parkingCapacity'][store.parkingCapacity];
    const isToilet = ONLY_OPTIONS['isToilet'][store.isToilet];
    const toiletCleanliness = ONLY_OPTIONS['toiletCleanliness'][store.toiletCleanliness];
    const isSoap = ONLY_OPTIONS['isSoap'][store.isSoap];
    const isPaperTowel = ONLY_OPTIONS['isPaperTowel'][store.isPaperTowel];

    const _parking = `${isParkingLot ? isParkingLot + " /" : ""}${parkingCapacity||""}`
    const _toilet = `${isToilet ? isToilet + " /" : ""}${toiletCleanliness ? toiletCleanliness + " /" : ""}${isSoap ? isSoap + " /" : ""}${isPaperTowel||""}`

   const parking = removeLastSlash(_parking)
   const toilet = removeLastSlash(_toilet)
    
    setToiletTextInfo(parking||"정보없음")
    setParkingTextInfo(toilet||"정보없음")
  };

  const goToModify = () => {
    router.push(`/modifystore/${params.idx}`);
  };
  useEffect(() => {
    getTextInfo();
  }, [data]);

  if (!store || !imgList || !reviewList) return null;
  return (
    <div className="px-16">
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
        <Button title="정보수정" circle onClick={goToModify} size="md" />
      </Flex>
      <HR size={4} my={24} />
      <Flex vertical y="items-start" px={16}>
        <HorizenMetaInfo title="주차" desc={toiletTextInfo} />
        <Space16 />
        <HorizenMetaInfo title="화장실" desc={parkingTextInfo} />
      </Flex>
      <HR size={4} my={24} />
      <Flex vertical y="items-start" px={16}>
        <Flex x="justify-between">
          <ReviewCount count={reviewList?.length} />
          <Link href={`/postreview/${params.idx}`}>
            <Button title="리뷰 남기기" circle size="md" />
          </Link>
        </Flex>
        <Space24 />

        {/* {[1, 2, 3].map((el) => { */}
        {reviewList.map((review) => {
          return (
            <div className="w-full" key={review.reviewId}>
              <Review review={review} />
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

"use client";

import { useState } from "react";
import { BigHorizenMetaInfo } from "Components/Molecules/MetaInfo/metaInfo";
import { Space16, Space32, Space4, Space48 } from "Components/Atoms/space";
import PageTitle from "Components/Molecules/PageTitle/pageTitle";
import HR from "Components/Atoms/Hr/hr";
import Flex from "Components/Atoms/Flex/flex";
import { Body3, Body4 } from "Components/Atoms/Text/text";
import OPTIONS from "Util/option";
import Radio from "Components/Atoms/Radio/radio";
import { PutRT } from "interface";
import Button from "Components/Atoms/Button/btn";
import ChoiceTitle from "Components/Molecules/ChoiceTitle/choiceTitle";
import { GetRTDetailApi, postRTApi, putRTApi } from "Api/apis";
import { useRouter } from "next/navigation";

const ReportOptions = ({ params }: { params: { idx: number } }) => {
  const router = useRouter();

  const { data } = GetRTDetailApi(params.idx);
  const store = data?.data?.restaurantDetails; // 매장정보

  const [isParkingLot, setIsParkingLot] = useState(store?.isParkingLot || 0);
  const [parkingCapacity, setParkingCapacity] = useState(
    store?.parkingCapacity || 0
  );
  const [isToilet, setIsToilet] = useState(store?.isToilet || 0);
  const [toiletCleanliness, setToiletCleanliness] = useState(
    store?.toiletCleanliness || 0
  );
  const [isSoap, setIsSoap] = useState(store?.isSoap || 0);
  const [isPaperTowel, setIsPaperTowel] = useState(store?.isPaperTowel || 0);

  const stateList = [
    isParkingLot,
    parkingCapacity,
    isToilet,
    toiletCleanliness,
    isSoap,
    isPaperTowel,
  ];
  const setStateList = [
    setIsParkingLot,
    setParkingCapacity,
    setIsToilet,
    setToiletCleanliness,
    setIsSoap,
    setIsPaperTowel,
  ];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const confirm = window.confirm("수정 하시겠습니까?");
    if (!confirm) return;

    const body: PutRT = {
      restaurantId: +params.idx,
      isParkingLot,
      parkingCapacity,
      isToilet,
      toiletCleanliness,
      isSoap,
      isPaperTowel,
    };

    await putRTApi(body);
    alert("제보가 완료 되었습니다.");
    router.push(`/store/${params.idx}`);
  };

  return (
    <Flex y="items-start" vertical px={16}>
      <PageTitle title="수정하기" />
      <Space48 />
      <BigHorizenMetaInfo title="상호명" desc={store?.restaurantName || ""} />
      <BigHorizenMetaInfo title="주소" desc={store?.address || ""} />
      <HR size={1} my={16} />
      <Space16 />
      <form onSubmit={onSubmit}>
        {OPTIONS.map((option, idx) => {
          return (
            <div key={option.title}>
              <ChoiceTitle title={option.title} />
              <Radio
                dataList={option.option}
                value={stateList[idx]}
                setValue={setStateList[idx]}
                name={option.title}
              />
              <Space16 />
            </div>
          );
        })}

        <Space16 />

        <Button type="submit" title="수정하기" />
      </form>
      <Space16 />
    </Flex>
  );
};

export default ReportOptions;

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
import { Option, PostRT } from "interface";
import Button from "Components/Atoms/Button/btn";
import LabelInput from "Components/Molecules/LabelInput/labelInput";
import ThanksSVG from "/public/svg/thanks.svg";
import ChoiceTitle from "Components/Molecules/ChoiceTitle/choiceTitle";
import { postRTApi } from "Api/apis";
import { useRouter } from "next/navigation";
import { NextPage } from "next";

interface ReportReviewProps {
  searchParams: {
    restaurantName: string;
    address: string;
    locationX: number;
    locationY: number;
  };
}

const ReportOptions = ({ searchParams }: any) => {
  const router = useRouter();

  const [isParkingLot, setIsParkingLot] = useState(-1);
  const [parkingCapacity, setParkingCapacity] = useState(-1);
  const [isToilet, setIsToilet] = useState(-1);
  const [toiletCleanliness, setToiletCleanliness] = useState(-1);
  const [isSoap, setIsSoap] = useState(-1);
  const [isPaperTowel, setIsPaperTowel] = useState(-1);
  const [reporter, setReporter] = useState("");

  const { restaurantName, address, locationX, locationY } = searchParams;
  console.log(searchParams);

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
    const confirm = window.confirm("제보 하시겠습니까?");
    if (!confirm) return;

    const body: PostRT = {
      restaurantName,
      address,
      locationX: +locationX,
      locationY: +locationY,
      isParkingLot,
      parkingCapacity,
      isToilet,
      toiletCleanliness,
      isSoap,
      isPaperTowel,
      ...(reporter !== "" && { reporter }),
    };

    await postRTApi(body);
    alert("제보가 완료 되었습니다.");
    router.push(`/`);
  };

  return (
    <Flex y="items-start" vertical px={16}>
      <PageTitle title="제보하기" />
      <Space48 />
      <BigHorizenMetaInfo title="상호명" desc={searchParams.restaurantName} />
      <BigHorizenMetaInfo title="주소" desc={searchParams.address} />
      <HR size={1} my={16} />
      <Flex>
        <Body4 title="아래는" />
        <Space4 />
        <Body4 title="선택사항" color={0} />
        <Space4 />
        <Body4 title="입니다" />
      </Flex>
      <Body4 title="여러분이 알고있는 다양한 정보를 파토와 공유해주세요!" />
      <Space32 />
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
        <LabelInput
          placeholder="이메일 입력"
          title="이메일"
          value={reporter}
          setValue={setReporter}
        />
        <Space16 />
        <ThanksSVG />
        <Space48 />

        <Button type="submit" title="등록하기" />
      </form>
      <Space16 />
    </Flex>
  );
};

export default ReportOptions;

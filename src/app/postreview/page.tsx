"use client";

import { Body3, Body4, Sub4 } from "Components/Atoms/Text/text";
import ReportSVG from "/public/svg/report.svg";
import Flex from "Components/Atoms/Flex/flex";
import { Space16, Space32, Space48, Space8 } from "Components/Atoms/space";
import { userAgentFromString } from "next/server";
import { useState } from "react";
import Input from "Components/Atoms/Input/input";
import LabelInput from "Components/Molecules/LabelInput/labelInput";
import Button from "Components/Atoms/Button/btn";
import PageTitle from "Components/Molecules/PageTitle/pageTitle";
import { BigHorizenMetaInfo } from "Components/Molecules/MetaInfo/metaInfo";
import HR from "Components/Atoms/Hr/hr";
import PickImg from "/public/svg/PickImg.svg";

import {
  ParkingScoring,
  ToiletScoring,
} from "Components/Atoms/Scoring/paringScoring";

const Postreview = () => {
  const [parkingPoint, setParkingPoint] = useState(5);
  const [toilietPoint, setToilietPoint] = useState(5);

  const onClickParking = (score: number) => {
    setParkingPoint(score);
  };
  const onClickToilet = (score: number) => {
    setToilietPoint(score);
  };

  return (
    <Flex x="justify-center" px={16} vertical>
      <PageTitle title="리뷰" />
      <Space48 />
      <BigHorizenMetaInfo title="상호명" desc="인디제이" />
      <BigHorizenMetaInfo
        title="주소"
        desc="광주 동구 청년창업센터2호관 4층 404호"
      />

      <HR size={1} my={24} />

      <Flex vertical y="items-start">
        <Flex>
          <Body3 title="주차장" />
          <Space16 />
          <ParkingScoring score={parkingPoint} onClick={onClickParking} />
        </Flex>
        <Flex>
          <Body3 title="화장실" />
          <Space16 />
          <ToiletScoring score={toilietPoint} onClick={onClickToilet} />
        </Flex>
      </Flex>

      <Flex>
        <Body4 title="사진을 첨부해 주세요" />
        <Body4 title="(선택)" color={6} />
      </Flex>

      <input type="range" />
      <Flex>
        <PickImg />
      </Flex>

      <Button title="다음" />
    </Flex>
  );
};
export default Postreview;

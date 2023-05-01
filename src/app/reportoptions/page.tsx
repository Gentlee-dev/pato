"use client";

import { useState } from "react";
import { BigHorizenMetaInfo } from "Components/Molecules/MetaInfo/metaInfo";
import { Space16, Space32, Space48, Space8 } from "Components/Atoms/space";
import PageTitle from "Components/Molecules/PageTitle/pageTitle";
import HR from "Components/Atoms/Hr/hr";
import Flex from "Components/Atoms/Flex/flex";
import { Body3, Body4 } from "Components/Atoms/Text/text";
import OPTIONS from "./option";
import Radio from "Components/Atoms/Radio/radio";
import { Option } from "interface";
import Button from "Components/Atoms/Button/btn";
import LabelInput from "Components/Molecules/LabelInput/labelInput";
import ThanksSVG from "/public/svg/thanks.svg";
import ChoiceTitle from "Components/Molecules/ChoiceTitle/choiceTitle";

const ReportOptions = () => {
  const [parking, setParking] = useState(-1);
  const [parkingSize, setParkingSize] = useState(-1);
  const [toilet, setToilet] = useState(-1);
  const [toiletClean, setToiletClean] = useState(-1);
  const [soap, setSoap] = useState(-1);
  const [paper, setPaper] = useState(-1);
  const [email, setEmail] = useState("");

  const stateList = [parking, parkingSize, toilet, toiletClean, soap, paper];
  const setStateList = [
    setParking,
    setParkingSize,
    setToilet,
    setToiletClean,
    setSoap,
    setPaper,
  ];

  console.log(OPTIONS);

  return (
    <Flex y="items-start" vertical px={16}>
      <PageTitle title="제보하기" />
      <Space48 />
      <BigHorizenMetaInfo title="상호명" desc="인디제이" />
      <BigHorizenMetaInfo
        title="주소"
        desc="광주 동구 청년창업센터2호관 4층 404호"
      />
      <HR size={1} my={16} />
      <Flex>
        <Body4 title="아래는" />
        <Body4 title="선택사항" color={0} />
        <Body4 title="입니다" />
      </Flex>
      <Body4 title="여러분이 알고있는 다양한 정보를 파토와 공유해주세요!" />
      <Space32 />
      {OPTIONS.map((option: Option, idx: number) => {
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
        value={email}
        setValue={setEmail}
      />
      <Space16 />
      <ThanksSVG />
      <Space48 />

      <Button title="등록하기" />
      <Space16 />
    </Flex>
  );
};

export default ReportOptions;

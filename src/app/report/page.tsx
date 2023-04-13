"use client";

import { Body3, Sub4 } from "Components/Atoms/Text/text";
import ReportSVG from "/public/svg/report.svg";
import Flex from "Components/Atoms/Flex/flex";
import { Space32, Space48 } from "Components/Atoms/space";
import { userAgentFromString } from "next/server";
import { useState } from "react";
import Input from "Components/Atoms/Input/input";
import LabelInput from "Components/Molecules/LabelInput/labelInput";
import Button from "Components/Atoms/Button/btn";
import PageTitle from "Components/Molecules/PageTitle/pageTitle";

const Report = () => {
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <Flex x="justify-center" vertical>
        <PageTitle title="제보하기" />
        <Space48 />
        <ReportSVG />
      </Flex>

      <LabelInput title="상호명" value={storeName} setValue={setStoreName} />
      <Space32 />
      <LabelInput title="주소" value={address} setValue={setAddress} />
      <Space48 />
      <Button title="다음" />
    </div>
  );
};
export default Report;

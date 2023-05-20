"use client";

import ReportSVG from "/public/svg/report.svg";
import Flex from "Components/Atoms/Flex/flex";
import { Space32, Space48 } from "Components/Atoms/space";
import { useEffect, useRef, useState } from "react";
import LabelInput from "Components/Molecules/LabelInput/labelInput";
import Button from "Components/Atoms/Button/btn";
import PageTitle from "Components/Molecules/PageTitle/pageTitle";
import { getIpApi } from "Api/outterApis";
import Link from "next/link";

const Report = () => {
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");

  const OnOpenAddress = () => {
    new daum.Postcode({
      oncomplete: async (data: any) => {
        const { address, roadAddress, userSelectedType, zonecode } = data;
        if (userSelectedType === "R") {
          setAddress(roadAddress);
        } else {
          setAddress(address);
        }
        const { data: location } = await getIpApi(address);
        console.log(zonecode);
        console.log(location.documents[0].x);
        console.log(location.documents[0].y);
      },
    }).open();
  };

  useEffect(() => {}, []);

  return (
    <div className="px-16">
      <Flex x="justify-center" vertical>
        <PageTitle title="제보하기" />
        <Space48 />
        <ReportSVG />
      </Flex>

      <LabelInput
        placeholder="상호명 입력"
        title="상호명"
        value={storeName}
        setValue={setStoreName}
      />
      <Space32 />
      <button className="block w-full text-left" onClick={OnOpenAddress}>
        <LabelInput
          placeholder="주소 입력"
          title="주소"
          value={address}
          readOnly
        />
      </button>
      <Space48 />
      <Link
        href={{
          pathname: "/reportoptions",
          query: { name: storeName, address: address },
        }}
      >
        <Button title="다음" />
      </Link>
      {/* <Link href="reportoptions">
        <Button title="다음" />
      </Link> */}
    </div>
  );
};
export default Report;

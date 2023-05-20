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
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const Report = () => {
  const router = useRouter();
  const storeNameRef = useRef<HTMLInputElement>(null);

  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  // 주소검색 팝업
  const OnOpenAddress = () => {
    new daum.Postcode({
      oncomplete: async (data: any) => {
        const { address, roadAddress, userSelectedType, zonecode } = data;
        userSelectedType === "R"
          ? setAddress(roadAddress)
          : setAddress(address);
        const { data: location } = await getIpApi(address);
        console.log(zonecode);
        console.log(location.documents[0].y);
        console.log(location.documents[0].x);
        setLocationX(location.documents[0].y);
        setLocationY(location.documents[0].x);
      },
    }).open();
  };

  // 필수정보 입력 여부
  const pass = () => {
    if (storeName === "") {
      alert("상호명을 입력 해주세요.");
      storeNameRef.current?.focus();
      return false;
    }
    if (address === "") {
      alert("주소를 입력 해주세요.");
      OnOpenAddress();
      return false;
    }

    return true;
  };

  // 링크이동
  const onClickNext = () => {
    const isPass = pass();
    if (!isPass) return;
    router.push(`/reportoptions?adfs=asdf`);
    //https://velog.io/@rrrrrrrrrrrocky/next-13-useRouter-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%B4%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
    // 여기 참고해보자
  };

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
        refInput={storeNameRef}
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
      {/* <Link
        href={{
          pathname: "/reportoptions",

          query: {
            restaurantName: storeName,
            address: address,
            locationX,
            locationY,
          },
        }}
        as={"/reportoptions"}
      > */}
      <Button onClick={onClickNext} title="다음" />
      {/* </Link> */}
    </div>
  );
};
export default Report;

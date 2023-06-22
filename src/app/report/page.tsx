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
        setLocationX(location.documents[0].x);
        setLocationY(location.documents[0].y);
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
  const onClickNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isPass = pass();
    if (!isPass) return;
    router.push(
      `/reportoptions?restaurantName=${storeName}&address=${address}&locationX=${locationX}&locationY=${locationY}&`
    );
  };

  return (
    <div className="px-16">
      <Flex x="justify-center" vertical>
        <PageTitle title="제보하기" />
        <Space48 />
        <ReportSVG />
      </Flex>
      <form onSubmit={onClickNext}>
        <LabelInput
          placeholder="상호명 입력"
          title="상호명"
          value={storeName}
          setValue={setStoreName}
          refInput={storeNameRef}
        />
        <Space32 />
        <button
          type="button"
          className="block w-full text-left"
          onClick={OnOpenAddress}
        >
          <LabelInput
            placeholder="주소 입력"
            title="주소"
            value={address}
            readOnly
          />
        </button>
        <Space48 />
        <Button type="submit" title="다음" />
      </form>
    </div>
  );
};
export default Report;

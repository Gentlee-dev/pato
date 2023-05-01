"use client";

import ReportSVG from "/public/svg/report.svg";
import Flex from "Components/Atoms/Flex/flex";
import { Space32, Space48 } from "Components/Atoms/space";
import { useRef, useState } from "react";
import LabelInput from "Components/Molecules/LabelInput/labelInput";
import Button from "Components/Atoms/Button/btn";
import PageTitle from "Components/Molecules/PageTitle/pageTitle";
import Script from "next/script";

declare global {
  const daum: any;
}

const Address = () => {
  const [isOpen, setIsOpen] = useState(false);

  const addressRef = useRef<HTMLDivElement>(null);

  const onOpenAddress = () => {
    if (!addressRef.current || isOpen) return;
    setIsOpen(true);
    // 현재 scroll 위치를 저장해놓는다.
    new daum.Postcode({
      oncomplete: (data: any) => {
        console.log(data);
      },
      // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
      onresize: function (size: any) {
        // element_wrap.style.height = size.height+'px';
      },
      width: "100%",
      height: "444px",
    }).open();

    // iframe을 넣은 element를 보이게 한다.
    addressRef.current.style.display = "block";
  };

  return <div className="border-1 mt-10" ref={addressRef}></div>;
};
export default Address;

import { useEffect, useRef, useState } from "react";
import PickImg from "/public/svg/pickImg.svg";

const ACCEPT = [".png", ".jpg", ".jpeg", ".jfif", ".JPG", ".JPEG", ".PNG"];

const ImgInput = ({
  onchange,
}: {
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const imgUpload = useRef<HTMLInputElement>(null); // 파일업로드 input

  return (
    <>
      <button onClick={() => imgUpload.current?.click()}>
        <PickImg />
      </button>
      <input
        className="opacity-0 hidden"
        onChange={onchange}
        ref={imgUpload}
        type="file"
        accept={ACCEPT.join()}
      />
    </>
  );
};

export default ImgInput;

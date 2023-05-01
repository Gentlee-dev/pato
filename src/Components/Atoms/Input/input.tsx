"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SearchSVG from "/public/svg/search.svg";
import XSVG from "/public/svg/x.svg";

const Input = ({
  value,
  setValue,
  onchange,
  placeholder,
  readOnly = false,
}: {
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  onchange?: any;
  placeholder: string;
  readOnly?: boolean;
}) => {
  const [keyword, setKeyword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue && setValue(value);
    onchange && onchange(value);
  };

  return (
    <input
      value={value}
      onChange={onChange}
      className="w-full h-48 pl-16 outline-none bg-gray03 rounded-xl"
      type="text"
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
};

export default Input;

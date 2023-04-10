"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SearchSVG from "/public/svg/search.svg";
import XSVG from "/public/svg/x.svg";

const SearchInput = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [keyword, setKeyword] = useState("");

  // 검색

  return (
    <input
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      className="w-full h-48 pl-56 outline-none bg-inherit bg-primary bg-opacity-10 rounded-xl"
      type="text"
      placeholder="상호명, 동네명 검색"
      ref={inputRef}
    />
  );
};
export default SearchInput;

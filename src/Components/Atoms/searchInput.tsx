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
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === "") {
      alert("검색어를 입력 해주세요");
      return;
    }
    router.push(`/search/${keyword}`);
  };

  // input포커스
  const focusInput = () => {
    inputRef?.current?.focus();
  };

  // X버튼 클릭
  const onClickX = () => {
    setKeyword("");
    focusInput();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <form onSubmit={onSearch} className="relative flex items-center">
      <div className="absolute left-16">
        <SearchSVG />
      </div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full h-48 pl-56 outline-none bg-inherit bg-primary bg-opacity-10 rounded-xl"
        type="text"
        placeholder="상호명, 동네명 검색"
        ref={inputRef}
      />
      {keyword && (
        <button type="button" onClick={onClickX} className="absolute right-16">
          <XSVG />
        </button>
      )}
    </form>
  );
};
export default SearchInput;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Space8 } from "Components/Atoms/space";
import SearcSVG from "/public/svg/search.svg";

const SearchInput = () => {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword("");
    router.push(`/search/${keyword}`);
  };
  return (
    <form
      onSubmit={search}
      className="flex items-center h-48 p-8 rounded-xl bg-primary bg-opacity-10"
    >
      <SearcSVG />
      <Space8 />
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-[1] outline-none bg-inherit"
        type="text"
      />
    </form>
  );
};
export default SearchInput;

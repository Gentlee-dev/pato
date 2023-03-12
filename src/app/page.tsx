"use client";
import Image from "next/image";
import { Space16, Space32, Space8 } from "Components/Atoms/space";
import logo from "/public/img/logo_text.png";
import SearchInput from "Components/Atoms/searchInput";
import H2 from "Components/Atoms/Text/h2";
import TextBtn from "Components/Atoms/Button/textBtn";
import { useRouter } from "next/navigation";

const MOBILE_MAX = 767;

const Index = () => {
  const router = useRouter();

  // 반응형 input, 모바일일때는 페이지 이동
  const onClickInput = () => {
    if (window.innerWidth > MOBILE_MAX) return;
    router.push(`/search`);
  };

  return (
    <div className="min-h-screen pt-10">
      <div className="flex justify-end">
        <TextBtn name="제보하기" />
      </div>
      <Image priority src={logo} className="mx-auto mt-100" alt="로고" />
      <Space16 />
      <div className="flex justify-center">
        <H2 title="주차장과 화장실에 대한 모든 것" />
      </div>
      <Space32 />
      {/* button안에 button을 넣지 못합니다. */}
      <div onClick={onClickInput}>
        <SearchInput />
      </div>
    </div>
  );
};
export default Index;

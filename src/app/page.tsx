"use client";
import Image from "next/image";
import { Space16, Space40 } from "Components/Atoms/space";
import logo from "/public/img/logo_text.png";
import SearchInput from "Components/Atoms/Input/searchInput";
import { Body1, Sub3 } from "Components/Atoms/Text/text";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getApis } from "Api/baseApi";

const MOBILE_MAX = 767;

const Index = () => {
  const router = useRouter();

  // 반응형 input, 모바일일때는 페이지 이동
  const onClickInput = async () => {
    // if (window.innerWidth > MOBILE_MAX) return;
    // router.push(`/search`);
    const data = await getApis(";afds");
    console.log(data);
  };

  return (
    <div className="min-h-screen pt-10 px-16">
      <div className="flex justify-end">
        <Link href="/report">
          <Body1 title="제보하기" />
        </Link>
      </div>
      <Image
        priority
        src={logo}
        width={222}
        className="mx-auto mt-100"
        alt="로고"
      />
      <Space16 />
      <div className="flex justify-center">
        <Sub3 title="주차장과 화장실에 대한 모든 것" color={7} />
      </div>
      <Space40 />
      {/* button안에 button을 넣지 못합니다. */}
      <div onClick={onClickInput}>
        <SearchInput />
      </div>
    </div>
  );
};
export default Index;

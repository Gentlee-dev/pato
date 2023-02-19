import Image from "next/image";
import { Space32, Space8 } from "Components/Atoms/space";
import logo from "/public/img/logo.png";
import SearchInput from "Components/Atoms/searchInput";

const Index = () => {
  return (
    <div className="min-h-screen pt-10">
      <div className="flex justify-end">
        <button>제보하기</button>
      </div>
      <Image priority src={logo} className="mx-auto mt-100" alt="로고" />
      <Space32 />
      <SearchInput />
    </div>
  );
};
export default Index;

import Image from "next/image";
import { Space16, Space32, Space8 } from "Components/Atoms/space";
import logo from "/public/img/logo_text.png";
import SearchInput from "Components/Atoms/searchInput";
import H2 from "Components/Atoms/Text/h2";
import TextBtn from "Components/Atoms/Button/textBtn";

const Index = () => {
  return (
    <div className="min-h-screen pt-10">
      <div className="flex justify-end">
        <TextBtn name="제보하기" />
      </div>
      <Image priority src={logo} className="mx-auto mt-100" alt="로고" />
      <Space16 />
      <div className="flex justify-center">
        <H2 title="주차장과 화실실에 대한 모든 것" />
      </div>
      <Space32 />
      <SearchInput />
    </div>
  );
};
export default Index;

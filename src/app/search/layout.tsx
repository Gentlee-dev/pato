import SearchInput from "Components/Atoms/Input/searchInput";
import logo from "/public/img/logo_text.png";
import { Space24 } from "Components/Atoms/space";
import Image from "next/image";
import Flex from "Components/Atoms/Flex/flex";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[100vh] px-16">
      <Flex x="justify-center">
        <Link href="/">
          <Image src={logo} alt="로고" height={60} />
        </Link>
      </Flex>
      <Space24 />
      <SearchInput />
      <Space24 />
      {children}
    </div>
  );
};
export default Layout;

"use client";
import SearchInput from "Components/Atoms/searchInput";
import { Space24 } from "Components/Atoms/space";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Space24 />
      <SearchInput />
      <Space24 />
      {children}
    </div>
  );
};
export default Layout;

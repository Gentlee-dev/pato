import SearchInput from "Components/Atoms/searchInput";
import { Space24 } from "Components/Atoms/space";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[100vh]">
      <Space24 />
      <SearchInput />
      <Space24 />
      {children}
    </div>
  );
};
export default Layout;

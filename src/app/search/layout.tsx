import SearchInput from "Components/Atoms/Input/searchInput";
import { Space24 } from "Components/Atoms/space";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[100vh] px-16">
      <Space24 />
      <SearchInput />
      <Space24 />
      {children}
    </div>
  );
};
export default Layout;

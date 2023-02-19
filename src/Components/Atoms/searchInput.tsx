import { Space8 } from "Components/Atoms/space";
import SearcSVG from "/public/img/search.svg";

const SearchInput = () => {
  return (
    <div className="flex items-center h-48 p-8 border rounded-3xl">
      <SearcSVG />
      <Space8 />
      <input className="flex-[1] outline-none" type="text" />
    </div>
  );
};
export default SearchInput;

import SearchList from "Components/Molecules/searchList";

const DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Search = ({ params }: { params: { keyword: string } }) => {
  console.log(params);

  return (
    <div className="grid md:grid-cols-2">
      <SearchList searchList={DUMMY} />
    </div>
  );
};
export default Search;

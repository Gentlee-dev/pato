import { useQuery } from "@tanstack/react-query";
import { getRestaurantListApi } from "Apis/apis";
import Point from "Components/Atoms/point";
import SearchList from "Components/Molecules/searchList";
import { GetRestaurantListApiParams } from "types/interface";

const Search = async ({ params }: { params: { keyword: string } }) => {
  console.log(params);
  // const { data, isLoading, isError } = useQuery([], getRestaurantsApi);
  const apiParmas: GetRestaurantListApiParams = {
    name: "asd",
    offset: 1,
    limit: 20,
  };
  console.log(apiParmas);
  try {
    const { data } = await getRestaurantListApi(apiParmas);
    console.log("first");
    console.log(data);
    return <SearchList restaurantList={[]} />;
  } catch (error) {
    console.log(error);
    return <h1>에러</h1>;
  }
};
export default Search;

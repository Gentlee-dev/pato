import Image from "next/image";
import { Space16, Space32, Space8 } from "Components/Atoms/space";
import Point from "Components/Atoms/point";
import MetaInfo from "Components/Atoms/metaInfo";
import { Restanrant } from "types/interface";

const SearchList = ({ restaurantList }: { restaurantList: Restanrant[] }) => {
  return (
    <>
      {restaurantList.map((restaurant: Restanrant, idx: number) => (
        <div className="flex py-16 border-b-1 last:border-none" key={idx}>
          <Image
            src={restaurant.restaurantThumbnail}
            alt={restaurant.restaurantName}
            width={120}
            height={120}
            className="rounded-lg"
          />
          <Space16 />
          <div className="flex flex-col justify-center">
            <MetaInfo
              title={restaurant.restaurantName}
              desc={restaurant.restaurantType}
              location={restaurant.address}
            />
            <Point
              parking={restaurant.parkingScore}
              toilet={restaurant.toiletScore}
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default SearchList;

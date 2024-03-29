import Image from "next/image";
import { Space16 } from "Components/Atoms/space";
import Point from "Components/Atoms/point";
import { ListMetaInfo } from "Components/Molecules/MetaInfo/metaInfo";
import Link from "next/link";
import logo from "/public/img/logo_white.png";
import { RT } from "interface";

const SearchList = ({ storeList }: { storeList: RT[] }) => {
  return (
    <>
      {storeList?.map((store: RT, idx: number) => (
        <Link href={`/store/${store.id}`} key={store.id}>
          <section className="flex py-16 border-b-1 last:border-none" key={idx}>
            <Image
              src={store.restaurantThumbnail || logo}
              // src={logo}
              alt={store.restaurantName}
              width={120}
              height={120}
              className="rounded-lg"
            />
            <Space16 />
            <div className="flex flex-col justify-center">
              <ListMetaInfo
                title={store.restaurantName}
                desc={store.restaurantType}
                location={store.address}
              />
              <Point parking={store.parkingScore} toilet={store.toiletScore} />
            </div>
          </section>
        </Link>
      ))}
    </>
  );
};
export default SearchList;

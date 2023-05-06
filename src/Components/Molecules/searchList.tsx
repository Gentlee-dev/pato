import Image from "next/image";
import { Space16 } from "Components/Atoms/space";
import Point from "Components/Atoms/point";
import { ListMetaInfo } from "Components/Molecules/MetaInfo/metaInfo";
import Link from "next/link";
import { RT } from "interface";

const SearchList = ({ storeList }: { storeList: RT[] }) => {
  return (
    <>
      {storeList?.map((store: RT, idx: number) => (
        <Link href="/store/1" key={store.id}>
          <section className="flex py-16 border-b-1 last:border-none" key={idx}>
            <Image
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsmYq7E0-ZWq3ELw9Xy7Je84KNAZ5BFDYkQ&usqp=CAU"
              src={store.restaurantThumbnail}
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

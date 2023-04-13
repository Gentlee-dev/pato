import Image from "next/image";
import { Space16 } from "Components/Atoms/space";
import Point from "Components/Atoms/point";
import MetaInfo from "Components/Atoms/metaInfo";
import Link from "next/link";

const SearchList = ({ searchList }: { searchList: any }) => {
  return (
    <>
      {searchList.map((el: any, idx: number) => (
        <Link href="/store/1">
          <section className="flex py-16 border-b-1 last:border-none" key={idx}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsmYq7E0-ZWq3ELw9Xy7Je84KNAZ5BFDYkQ&usqp=CAU"
              alt="고양이"
              width={120}
              height={120}
              className="rounded-lg"
            />
            <Space16 />
            <div className="flex flex-col justify-center">
              <MetaInfo
                title="공사중포차"
                desc="포장마차"
                location="광주광역시 금남로 193-12"
              />
              <Point parking={4.9} toilet={3.5} />
            </div>
          </section>
        </Link>
      ))}
    </>
  );
};
export default SearchList;

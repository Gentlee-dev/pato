import Button from "Components/Atoms/Button/btn";
import Flex from "Components/Atoms/Flex/flex";
import HR from "Components/Atoms/Hr/hr";
import StoreThumbnail from "Components/Atoms/StoreThumbnail/storeThumbnail";
import MetaInfo from "Components/Atoms/metaInfo";
import Point from "Components/Atoms/point";
import { Space16, Space24, Space32 } from "Components/Atoms/space";
import PageTitle from "Components/Molecules/PageTitle/pageTitle";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsmYq7E0-ZWq3ELw9Xy7Je84KNAZ5BFDYkQ&usqp=CAU";

const Store = () => {
  return (
    <div>
      <PageTitle title="가게이름" />
      <Space24 />
      <div className="h-195">
        <StoreThumbnail srcList={[img]} />
      </div>
      <Flex x="justify-between">
        <div>
          <Space32 />
          <MetaInfo title="가게이름" location="위치" />
          <Point parking={1} toilet={1} />
        </div>
        <Button title="정보수정" circle size="md" />
      </Flex>
      <Space16 />
      <HR />
      <Space16 />
    </div>
  );
};

export default Store;

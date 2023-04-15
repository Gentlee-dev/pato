import Flex from "Components/Atoms/Flex/flex";
import { Body3, Body4 } from "Components/Atoms/Text/text";
import { Space16 } from "Components/Atoms/space";

const StoreSummary = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <Flex x="justify-start">
      <div className="w-40">
        <Body3 title={title} />
      </div>
      <Space16 />
      <div className="flex-[1]">
        <Body4 title={desc} />
      </div>
    </Flex>
  );
};

export default StoreSummary;

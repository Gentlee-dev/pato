import { Palete } from "interface";
import {
  Body1,
  Body2,
  Body3,
  Body4,
  Caption2,
  Sub4,
} from "../../Atoms/Text/text";
import Flex from "Components/Atoms/Flex/flex";
import { Space16 } from "Components/Atoms/space";

interface MetaInfoProps {
  title: string;
  desc?: string;
  location?: string;
  subColor?: Palete;
}

const MetaInfo = ({ title, desc, location, subColor = 10 }: MetaInfoProps) => {
  return (
    <div>
      <Sub4 title={title} color={subColor} />
      {desc && <Body4 title={desc} color={subColor} />}
      {location && <Body4 title={location} color={subColor} />}
    </div>
  );
};
export const ListMetaInfo = ({
  title,
  desc,
  location,
  subColor = 10,
}: MetaInfoProps) => {
  return (
    <div className="flex flex-col">
      <Body1 title={title} color={subColor} />
      {desc && <Caption2 title={desc} color={subColor} />}
      {location && <Caption2 title={location} color={subColor} />}
    </div>
  );
};

export const HorizenMetaInfo = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
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
export const BigHorizenMetaInfo = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <Flex x="justify-start">
      <div className="w-45">
        <Body1 title={title} />
      </div>
      <Space16 />
      <div className="flex-[1]">
        <Body2 title={desc} color={9} />
      </div>
    </Flex>
  );
};
export default MetaInfo;

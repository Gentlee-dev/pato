import { Palete } from "interface";
import { Body1, Body4, Caption2, Sub4 } from "../../Atoms/Text/text";

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
export default MetaInfo;

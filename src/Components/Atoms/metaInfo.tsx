import { Palete } from "interface";
import { Body4, Sub4 } from "./Text/text";
import { palete } from "Util/function";

const MetaInfo = ({
  title,
  desc,
  location,
  subColor = 10,
}: {
  title: string;
  desc?: string;
  location?: string;
  subColor?: Palete;
}) => {
  return (
    <div>
      <Sub4 title={title} color={subColor} />
      {desc && <Body4 title={desc} color={subColor} />}
      {location && <Body4 title={location} color={subColor} />}
    </div>
  );
};
export default MetaInfo;

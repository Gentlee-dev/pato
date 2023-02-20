import { Space8 } from "Components/Atoms/space";
import ParkingSVG from "/public/img/parking.svg";
import ToiletSVG from "/public/img/toilet.svg";

const MetaInfo = ({
  title,
  desc,
  location,
}: {
  title: string;
  desc: string;
  location?: string;
}) => {
  return (
    <div>
      <h3 className="font-bold text-16">{title}</h3>
      <p>{desc}</p>
      {location && <p>{location}</p>}
    </div>
  );
};
export default MetaInfo;

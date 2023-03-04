import { Space8 } from "Components/Atoms/space";

const MetaInfo = ({
  title,
  desc,
  location,
}: {
  title: string;
  desc?: string;
  location?: string;
}) => {
  return (
    <div>
      <h3 className="font-bold text-16">{title}</h3>
      {desc && <p>{desc}</p>}
      {location && <p>{location}</p>}
    </div>
  );
};
export default MetaInfo;

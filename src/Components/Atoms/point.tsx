import { Space16, Space8 } from "Components/Atoms/space";
import ParkingSVG from "/public/img/parking.svg";
import ToiletSVG from "/public/img/toilet.svg";

const Point = ({ parking, toilet }: { parking: number; toilet: number }) => {
  return (
    <div className="flex">
      <div className="flex">
        <ParkingSVG />
        <Space8 />
        <span>{`${parking}`}</span>
      </div>
      <Space16 />
      <div className="flex">
        <ToiletSVG />
        <Space8 />
        <span>{toilet}</span>
      </div>
    </div>
  );
};
export default Point;

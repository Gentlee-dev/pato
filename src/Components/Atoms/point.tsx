import { Space16, Space8 } from "Components/Atoms/space";
import ParkingSVG from "/public/img/parking.svg";
import ToiletSVG from "/public/img/toilet.svg";

/**
 * 주차장, 화장실 별점 atom
 * @param {number} parking 주차장 별점
 * @param {number} toilet  화장실 별점
 */
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

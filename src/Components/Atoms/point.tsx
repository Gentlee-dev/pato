import { Space16, Space8 } from "Components/Atoms/space";
import ParkingSVG from "/public/svg/parking.svg";
import ToiletSVG from "/public/svg/toilet.svg";
import BigParkingSVG from "/public/svg/bigParking.svg";
import BigToiletSVG from "/public/svg/bigToilet.svg";
import { Body1, Body4 } from "./Text/text";
import Flex from "./Flex/flex";

/**
 * 주차장, 화장실 별점 atom
 * @param {number} parking 주차장 별점
 * @param {number} toilet  화장실 별점
 */
const Point = ({ parking, toilet }: { parking: number; toilet: number }) => {
  return (
    <Flex>
      <Flex>
        <BigParkingSVG />
        <Space8 />
        <Body1 title={String(parking)} color={7} />
      </Flex>
      <Flex>
        <Space16 />
        <BigToiletSVG />
        <Space8 />
        <Body1 title={String(toilet)} color={7} />
      </Flex>
    </Flex>
  );
};
export const SmallPoint = ({
  parking,
  toilet,
}: {
  parking: number;
  toilet: number;
}) => {
  return (
    <Flex full={false}>
      <Flex>
        <ParkingSVG />
        <Space8 />
        <Body4 title={String(parking)} color={8} />
      </Flex>
      <Space16 />
      <Flex>
        <ToiletSVG />
        <Space8 />
        <Body4 title={String(toilet)} color={8} />
      </Flex>
    </Flex>
  );
};
export default Point;

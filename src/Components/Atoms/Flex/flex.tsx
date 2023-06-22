import { AlignItems, JustifyContent } from "interface";

const pdx: { [x: number]: string } = {
  0: "",
  4: "px-4",
  8: "px-8",
  16: "px-16",
  18: "px-18",
  20: "px-20",
  24: "px-24",
  28: "px-28",
  32: "px-32",
  48: "px-48",
  64: "px-64",
};
const pdy: { [x: number]: string } = {
  4: "py-4",
  8: "py-8",
  16: "py-16",
  18: "py-18",
  20: "py-20",
  24: "py-24",
  28: "py-28",
  32: "py-32",
  48: "py-48",
  64: "py-64",
};
const gapList: { [x: number]: string } = {
  0: "",
  4: "gap-4",
  8: "gap-8",
  16: "gap-16",
  18: "gap-18",
  20: "gap-20",
  24: "gap-24",
  28: "gap-28",
  32: "gap-32",
  48: "gap-48",
  64: "gap-64",
};

const Flex = ({
  x = "justify-start",
  y = "items-center",
  px = 0,
  py = 0,
  vertical = false,
  children,
  full = true,
  gap = 0,
}: {
  x?: JustifyContent;
  y?: AlignItems;
  px?: number;
  py?: number;
  vertical?: boolean;
  children: React.ReactNode;
  full?: boolean;
  gap?: number;
}) => {
  return (
    <div
      className={`flex ${full && "w-full"} ${vertical && "flex-col"} ${
        pdx[px]
      } ${pdy[py]} ${gapList[gap]} ${x} ${y}`}
    >
      {children}
    </div>
  );
};

export default Flex;

import { AlignItems, JustifyContent } from "interface";

const Flex = ({
  x,
  y = "items-center",
  vertical = false,
  children,
}: {
  x: JustifyContent;
  y?: AlignItems;
  vertical?:boolean;
  children: React.ReactNode;
}) => {
  return <div className={`flex ${vertical && "flex-col"}  ${x} ${y}`}>{children}</div>;
};

export default Flex;

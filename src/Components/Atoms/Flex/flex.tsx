import { AlignItems, JustifyContent } from "interface";

const Flex = ({
  x,
  y,
  children,
}: {
  x: JustifyContent;
  y: AlignItems;
  children: React.ReactNode;
}) => {
  return <div className={`flex ${x} ${y}`}>{children}</div>;
};

export default Flex;

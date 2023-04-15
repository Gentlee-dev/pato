const HR = ({ size, my }: { size: number; my: number }) => {
  const borderHeight: { [index: number]: string } = {
    1: "border-b-1",
    2: "border-b-2",
    3: "border-b-3",
    4: "border-b-4",
  };
  const verticalMargin: { [index: number]: string } = {
    4: "my-4",
    8: "my-8",
    16: "my-16",
    18: "my-18",
    20: "my-20",
    24: "my-24",
    28: "my-28",
    32: "my-32",
    48: "my-48",
    64: "my-64",
  };

  return (
    <hr className={` w-full ${borderHeight[size]} ${verticalMargin[my]}`} />
  );
};

export default HR;

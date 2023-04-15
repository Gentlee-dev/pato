const HR = ({ size }: { size: number }) => {
  const borderHeight: { [index: number]: string } = {
    1: "border-b-1",
    2: "border-b-2",
    3: "border-b-3",
    4: "border-b-4",
  };
  return <hr className={` w-full ${borderHeight[size]}`} />;
};

export default HR;
